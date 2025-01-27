import express from 'express';
import {
  createGrade,
  getGradesByUser,
  updateGrade,
  deleteGrade,
} from '../controllers/gradeController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/', auth, createGrade);
router.get('/user/:userId', auth, getGradesByUser);
router.put('/:id', auth, updateGrade);
router.delete('/:id', auth, deleteGrade);

export default router;

