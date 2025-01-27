import express from 'express';
import { getTranscript, adminViewTranscript } from '../controllers/transcriptController.js';
import auth from '../middleware/auth.js';

const transcriptRouter = express.Router();

transcriptRouter.get('/transcript', auth, getTranscript);
transcriptRouter.post('/admin/transcript', auth, adminViewTranscript);

export default transcriptRouter;