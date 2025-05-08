import express from 'express';
import multer from 'multer';
import { createSliderItem, getSliderItems } from '../controllers/sliderController.js';

const router = express.Router();

// Multer setup for image uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});
const upload = multer({ storage });

// Routes
router.get('/', getSliderItems);
router.post('/', upload.single('image'), createSliderItem);

export default router;
