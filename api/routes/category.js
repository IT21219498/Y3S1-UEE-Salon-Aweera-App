const express = require('express');
const Category = require('../models/category');
const categoryRouter = express.Router();

categoryRouter.get('/', async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

categoryRouter.post('/create', async (req, res) => {
  const newCategory = new Category({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    packages: req.body.packages,
  });

  const category = await newCategory.save();
  const response = { message: 'New Category Created', data: category };

  res.status(201).send(response);
});

categoryRouter.put('/add-package/:id', async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    category.packages.push({
      name: req.body.name,
      imageUrl: req.body.imageUrl,
    });

    const updatedCategory = await category.save();
    res.send({ message: 'Category Updated', category: updatedCategory });
  }
});

module.exports = categoryRouter;
