// models/User.js
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  role: {
    type: String,
    enum: ['student', 'teacher', 'admin'],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  avatar: String,
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  lastSeen: Date,
}, { timestamps: true });

export default model('User', userSchema);