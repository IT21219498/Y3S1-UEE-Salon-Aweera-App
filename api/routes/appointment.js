const express = require('express');
const Appointment = require('../models/appointment');
const appointmentRouter = express.Router();

appointmentRouter.post('/create', async (req, res) => {
  const newAppointment = new Appointment({
    categoryName: req.body.category,
    packageName: req.body.package,
    stylistName: req.body.stylist,
    date: req.body.date,
    time: req.body.time,
  });

  const appointment = await newAppointment.save();
  res.status(201).send({ message: 'New Appointment Created', appointment });
});

module.exports = appointmentRouter;
