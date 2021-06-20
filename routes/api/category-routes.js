// Declare Express Router Variable
const router = require('express').Router();
// Declare Required Models
const { Category, Product } = require('../../models');

// -----------------------------------------|
//         API Category Endpoint            | 
// -----------------------------------------|

// Find All Categories
router.get('/', async (req, res) => {
    try {
      // Declare Category variable
      const categoryData = await Category.findAll({
        // Include associated Product Model
        include: { 
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"]
        }
      });
      // Return OK Status and categoryData
      res.status(200).json(categoryData);
    // Catch for any errors
    } catch (err) {
      res.status(500).json(err);
    }
  });

// Find one category by it's "id" value
router.get('/:id', async (req, res) => {
  try {
    // Declare Category variable
    const categoryData = await Category.findByPk(req.params.id, {
      // Include associated Product Model
        include: { 
          model: Product,
          attributes: ["id", "product_name", "price", "stock", "category_id"]
        }
    });
    // If specified id is not found, send 404 response and message
    if (!categoryData) {
      res.status(404).json({ message: 'No Category found with that id!' });
      return;
    }
    // Return OK Status and categoryData
    res.status(200).json(categoryData);
    // Catch for any errors
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new Category
router.post('/', async (req, res) => {
  try {
  // Declare Category variable
  const categoryData = await Category.create(req.body);
  // Return OK Status and categoryData
  res.status(200).json(categoryData);
  // Catch for any errors
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update a category by its "id" value
router.put('/:id', async (req, res) => {
  try {
    // Declare Category variable
    const categoryData = await Category.update(req.body, {
      where: {id: req.params.id }
    });
    // If specified id is not found, send 404 response and message
    if (!categoryData) {
      res.status(404).json({ message: 'No Category with this id!' });
      return;
    }
    // Return OK Status and categoryData
    res.status(200).json(categoryData);  
  // Catch for any errors
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a category by its "id" value
router.delete('/:id', async (req, res) => {
  try {
    // Declare Category variable
    const categoryData = await Category.destroy({
      where: { id: req.params.id }
    });
    // If specified id is not found, send 404 response and message
    if (!categoryData) {
      res.status(404).json({ message: 'No Category with this id!' });
      return;
    }
    // Return OK Status and categoryData
    res.status(200).json(categoryData);
  // Catch for any errors
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
