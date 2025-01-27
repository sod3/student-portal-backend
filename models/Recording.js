import { Schema, model } from 'mongoose';

const recordingSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  recordingsData: [{
    title: String,
    lessons: [String]
  }]
}, { timestamps: true });

export default model('Recording', recordingSchema);
