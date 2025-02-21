import express from 'express';
import { createDay, getDays, createSubject, getSubjects, createSlot, getSlots, createBreak, getBreaks } from '../controllers/classScheduleController.js';

const router = express.Router();

router.post('/day/create', createDay); 
router.get('/day/list', getDays);     

router.post('/subject/create', createSubject);
router.get('/subject/list', getSubjects);

router.post('/slot/create', createSlot);
router.get('/slot/list', getSlots);

router.post('/break/create', createBreak);
router.get('/break/list', getBreaks);

export default router;

