const mongoose = require('mongoose');
const appointmentSchema = mongoose.Schema({
  AppointmentId: {
    type: String,
    unique: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  categoryName: {
    type: String,
    required: true,
  },
  packageName: {
    type: String,
    required: true,
  },
  stylistName: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

appointmentSchema.pre('save', async function (next) {
  try {
    if (!this.AppointmentId) {
      let count = await this.constructor.countDocuments({});

      let id = `APP${(count + 1).toString().padStart(3, '0')}`;

      let duplicate = true;

      //   Check if id already exists in the database
      while (duplicate) {
        const existingAppointment = await this.constructor.findOne({
          AppointmentId: id,
        });

        if (!existingAppointment) {
          duplicate = false;
        } else {
          count++;

          id = `APP${(count + 1).toString().padStart(3, '0')}`;
        }
      }

      this.AppointmentId = id;
    }
    next();
  } catch (err) {
    next(err);
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
