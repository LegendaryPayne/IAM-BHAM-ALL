import { Router } from 'express';
import peopleRouter from './people';
import classesRouter from './classes';
import authRouter from './auth';
import usersRouter from './users';
import blogsRouter from './blog'
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/classes', classesRouter);
router.use('/people', peopleRouter);
router.use('/users', usersRouter);
router.use('/blogs', blogsRouter);

export default router;