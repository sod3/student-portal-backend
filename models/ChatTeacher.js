// models/ChatTeacher.js
import mongoose from 'mongoose';
const { Schema } = mongoose;

const chatTeacherSchema = new Schema({
  teacherId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  teacherName: String,
  teacherAvatar: String,
  lastSeen: Date,
  teacherEmail: String,
  messages: [{
    sender: { type: String, enum: ['them', 'you'], required: true },
    messageTime: { type: Date, default: Date.now },
    messageText: String,
    messageSentTime: { type: Date, default: Date.now }
  }]
}, { timestamps: true });

export default mongoose.model('ChatTeacher', chatTeacherSchema);

