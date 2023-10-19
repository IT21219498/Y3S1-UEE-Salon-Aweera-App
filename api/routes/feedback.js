const express = require('express');
const Feedback = require('../models/feedback');
const feedbackRouter = express.Router();

feedbackRouter.post('/create', async (req, res) => {
  const newFeedback = new Feedback({
    customerName: req.body.customerName,
    contactNo: req.body.contactNo,
    feedback: req.body.feedback,
    date: new Date(),
  });

  const feedback = await newFeedback.save();
  res.status(201).send({ message: 'New Feedback Created', feedback });
});
module.exports = feedbackRouter;
