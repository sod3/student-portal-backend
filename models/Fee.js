import mongoose from 'mongoose';
const { Schema } = mongoose;

const feeSchema = new Schema({
  rollNo: { type: String, required: true },
  studentName: String,
  program: String,
  batch: String,
  semester: String,
  dueDate: Date,
  status: { type: String, enum: ['paid', 'due'], default: 'due' },
  pastRecord: [{
    paymentDate: Date,
    amount: Number,
    status: String
  }]
}, { timestamps: true });

export default mongoose.model('Fee', feeSchema);

