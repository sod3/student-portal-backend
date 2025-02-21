import express from 'express';
import { createStudent, getStudents, createTeacherSubject, getTeacherSubjects } from '../controllers/progressReportController.js';

const router = express.Router();

router.post('/student/create', createStudent);
router.get('/student/list', getStudents);      

router.post('/teacher-subject/create', createTeacherSubject);
router.get('/teacher-subject/list', getTeacherSubjects);

export default router;