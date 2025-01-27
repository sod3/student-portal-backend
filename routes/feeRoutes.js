import express from 'express';
import { getStudentFees, postStudentFees} from '../controllers/feesController.js';
import auth from '../middleware/auth.js';

const feesRouter = express.Router();

feesRouter.get('/student', auth, getStudentFees);
feesRouter.post('/student', auth, postStudentFees);

export default feesRouter;