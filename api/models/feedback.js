const mongoose = require('mongoose');

const feedbackSchema = mongoose.Schema({
  feedbackId: {
    type: String,
    unique: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  feedback: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

feedbackSchema.pre('save', async function (next) {
  try {
    if (!this.feedbackId) {
      let count = await this.constructor.countDocuments({});

      let id = `FB${(count + 1).toString().padStart(3, '0')}`;

      let duplicate = true;

      //   Check if id already exists in the database
      while (duplicate) {
        const existingFeedback = await this.constructor.findOne({
          feedbackId: id,
        });

        if (!existingFeedback) {
          duplicate = false;
        } else {
          count++;

          id = `FB${(count + 1).toString().padStart(3, '0')}`;
        }
      }

      this.feedbackId = id;
    }
    next();
  } catch (err) {
    next(err);
  }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
