import express from 'express';
import {
  getStudentRecordings,
  getTeacherRecordings,
  postTeacherRecording,
  putTeacherRecording,
} from '../controllers/recordingsController.js';
import auth from '../middleware/auth.js';

const recordingsRouter = express.Router();

recordingsRouter.get('/student', auth, getStudentRecordings);
recordingsRouter.get('/teacher', auth, getTeacherRecordings);
recordingsRouter.post('/teacher', auth, postTeacherRecording);
recordingsRouter.put('/teacher', auth, putTeacherRecording);

export default recordingsRouter;
