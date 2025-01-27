import express from 'express';
import {
  sendStudentMessage,
  getStudentChat,
  sendTeacherMessage,
  getTeacherChat,
} from '../controllers/chatController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/student/:studentId/messages', auth, sendStudentMessage);
router.get('/student/:studentId', auth, getStudentChat);

router.post('/teacher/:teacherId/messages', auth, sendTeacherMessage);
router.get('/teacher/:teacherId', auth, getTeacherChat);

export default router;

