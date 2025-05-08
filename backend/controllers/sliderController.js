import SliderItems from '../models/sliderItem.js';

// POST: Upload image and create slider item
export const createSliderItem = async (req, res) => {
  try {
    const newItem = new SliderItems({
      title: req.body.title,
      content: req.body.content,
      imageUrl: `${req.protocol}://${req.get('host')}/${req.file.path.replace(/\\/g, '/')}`
    });
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create slider item' });
  }
};


// GET: Fetch all slider items
export const getSliderItems = async (req, res) => {
  try {
    const items = await SliderItems.find();
    res.json(items);
  } catch (error) {
    res.status(500).send('Server error');
  }
};
