import mongoose from 'mongoose';
const { Schema } = mongoose;

const progressReportSchema = new Schema({
  studentId: { type: Schema.Types.ObjectId, ref: 'Student', required: true },
  subjectId: { type: Schema.Types.ObjectId, ref: 'TeacherSubject', required: true },
  gpa: { type: Number },
  quizzes: { type: Number },
  midExam: { type: Number },
  finalExam: { type: Number },
  total: { type: Number },
  attendance: { type: Number }
}, { timestamps: true });

export default mongoose.model('ProgressReport', progressReportSchema);
