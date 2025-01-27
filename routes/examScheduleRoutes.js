import express from 'express';
import {
  upsertExamSchedule,
  getExamSchedule,
} from '../controllers/examScheduleController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, upsertExamSchedule);

router.get('/:studentId/:semester', auth, getExamSchedule);

export default router;

