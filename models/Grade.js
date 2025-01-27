import mongoose from 'mongoose';
const { Schema } = mongoose;

const gradeSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  role: { type: String, enum: ['student', 'teacher', 'admin'], required: true },
  grades: [{
    courseId: Schema.Types.ObjectId,
    quiz: Number,
    assignments: Number,
    mids: Number,
    finals: Number
  }],
  uploadedBy: { type: Schema.Types.ObjectId, ref: 'User' } 
}, { timestamps: true });

export default mongoose.model('Grade', gradeSchema);

