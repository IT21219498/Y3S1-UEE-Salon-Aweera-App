const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  packages: [
    {
      name: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
      packageCreatedAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  categoryCreatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
