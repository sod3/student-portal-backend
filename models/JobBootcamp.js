import mongoose from 'mongoose';
const { Schema } = mongoose;

const jobBootcampSchema = new Schema({
  type: { type: String, enum: ['job', 'bootcamp'], required: true },
  title: String,
  description: String,
  updates: [{
    adminId: { type: Schema.Types.ObjectId, ref: 'User' },
    updateText: String,
    updateDate: Date
  }],
  form: String, 
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

export default mongoose.model('JobBootcamp', jobBootcampSchema);

