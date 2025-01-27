import mongoose from 'mongoose';
const { Schema } = mongoose;

const transcriptSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  semester: String,
  courseDetails: [{
    courseName: String,
    credits: Number,
    grade: String,
    points: Number
  }]
}, { timestamps: true });

export default mongoose.model('Transcript', transcriptSchema);

