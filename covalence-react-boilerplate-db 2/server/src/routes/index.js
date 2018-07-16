import { Router } from 'express';
import peopleRouter from './people';
import blogRouter from './blog';
import authRouter from './auth';

let router = Router();
router.use('/auth', authRouter);
router.use('/people', peopleRouter);
router.use('/blogs', blogRouter);

export default router;