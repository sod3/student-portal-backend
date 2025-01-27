import express from 'express';
import {
  getJobsList,
  getBootcampsDetails,
  postBootcampApplication,
  postJobOpportunities,
  postBootcampsDetails,
  getBootcampApplications,
} from '../controllers/jobsBootcampsController.js';
import auth from '../middleware/auth.js';

const jobsBootcampsRouter = express.Router();

jobsBootcampsRouter.get('/jobs', auth, getJobsList);
jobsBootcampsRouter.get('/bootcamps', auth, getBootcampsDetails);
jobsBootcampsRouter.post('/bootcamps/apply', auth, postBootcampApplication);
jobsBootcampsRouter.post('/jobs/admin', auth, postJobOpportunities);
jobsBootcampsRouter.post('/bootcamps/admin', auth, postBootcampsDetails);
jobsBootcampsRouter.get('/bootcamps/applications', auth, getBootcampApplications);

export default jobsBootcampsRouter;