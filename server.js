require('dotenv').config();
const express = require('express');
const multer = require('multer');
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const cors = require('cors');

process.on('uncaughtException', (err) => {
  console.error('Backend crashed:', err);
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

const s3Client = new S3Client({
  region: process.env.AWS_REGION || 'us-east-1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
});

const upload = multer({ storage: multer.memoryStorage() });

app.post('/upload', upload.single('media'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.file;
    const location = req.body.location ? JSON.parse(req.body.location) : null;

    if (!location || !location.latitude || !location.longitude) {
      return res.status(400).json({ error: 'Invalid or missing location data' });
    }

    const fileName = `${Date.now()}-${file.originalname.replace(/\s+/g, '-')}`;

    const params = {
      Bucket: process.env.S3_BUCKET_NAME,
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype,
      Metadata: {
        latitude: String(location.latitude),
        longitude: String(location.longitude)
      },
      ACL: 'public-read'
    };

    const command = new PutObjectCommand(params);
    await s3Client.send(command);

    const fileUrl = `https://${params.Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${params.Key}`;

    res.status(200).json({
      success: true,
      message: 'Upload successful',
      fileUrl,
      location,
      metadata: {
        filename: fileName,
        type: file.mimetype,
        size: file.size,
        latitude: location.latitude,
        longitude: location.longitude
      }
    });

  } catch (error) {
    console.error('Upload Error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  console.log(`Accepting uploads to bucket: ${process.env.S3_BUCKET_NAME}`);
});
