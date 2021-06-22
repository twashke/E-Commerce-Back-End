const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// -----------------------------------------|
//            API Tag Endpoint              | 
// -----------------------------------------|

// Find all Tags
router.get('/', async (req, res) => {
  try {
    // Declare Tag variable
    const tagData = await Tag.findAll({
      // Include associated Product Models
      include: [{ model: Product, ProductTag }]
    });
    // Return OK Status and tagData
    res.status(200).json(tagData);
  // Catch for any errors
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a single Tag by its "id"
router.get('/:id', async (req, res) => {
  try {
    // Declare Tag variable
    const tagData = await Tag.findByPk(req.params.id, {
        // Include associated Product Models
        include: [{ model: Product, ProductTag }]
    });
    // If specified id is not found, send 404 response and message
    if (!tagData) {
      res.status(404).json({ message: 'No Tag found with that id!' });
      return;
    }
    // Return OK Status and tagData
    res.status(200).json(tagData);
    // Catch for any errors
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new Tag
router.post('/', async (req, res) => {
  try {
  // Declare Tag variable
  const tagData = await Tag.create(req.body);
  // Return OK Status and tagData
  res.status(200).json(tagData);
  // Catch for any errors
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a Tag by its "id" value
router.put('/:id', async (req, res) => {
  try {
    // Declare Tag variable
    const tagData = await Tag.update(req.body, {
      where: {id: req.params.id }
    });
    // If specified id is not found, send 404 response and message
    if (!tagData) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }
    // Return OK Status and tagData
    res.status(200).json(tagData);  
  // Catch for any errors
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a tag by its "id"
router.delete('/:id', async (req, res) => {
  try {
    // Declare Tag variable
    const tagData = await Tag.destroy({
      where: { id: req.params.id }
    });
    // If specified id is not found, send 404 response and message
    if (!tagData) {
      res.status(404).json({ message: 'No Tag with this id!' });
      return;
    }
    // Return OK Status and tagData
    res.status(200).json(tagData);
  // Catch for any errors
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
