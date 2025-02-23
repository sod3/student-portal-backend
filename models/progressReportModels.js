import mongoose from 'mongoose';
const { Schema } = mongoose;

const progressReportSchema = new Schema({
  // For student progress reports, this field is required.
  // For teacher subject template records, it can be omitted.
  studentId: { 
    type: Schema.Types.ObjectId, 
    ref: 'Student', 
    required: function() { return !this.isTeacherSubjectTemplate; } 
  },
  // Instead of a separate TeacherSubject model, we embed the subject details directly.
  subject: {
    teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    subjectName: { type: String, required: true }
  },
  gpa: { type: Number },
  quizzes: { type: Number },
  midExam: { type: Number },
  finalExam: { type: Number },
  total: { type: Number },
  attendance: { type: Number },
  // Flag to differentiate between student progress reports and teacher subject templates.
  isTeacherSubjectTemplate: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('ProgressReport', progressReportSchema);
