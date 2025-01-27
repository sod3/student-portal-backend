import express from 'express';
import {
  createAttendance,
  getAttendanceByStudent,
  updateAttendance,
  deleteAttendance,
} from '../controllers/attendanceController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/student/:studentId', auth, getAttendanceByStudent);

router.put('/:id', auth, updateAttendance);

export default router;

