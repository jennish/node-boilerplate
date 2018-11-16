import express from 'express';
import {userRouter} from './resources/user';
import {issuesRouter} from './resources/issues';
import {apiErrorHandler} from './modules/errorHandler';

export const apiRouter= express.Router();

// Register user routes to API
apiRouter.use('/user', userRouter);

// Register issues routes to API
apiRouter.use('/issues', issuesRouter);

// Attach a common API error handlor for all API routes.
apiRouter.use(apiErrorHandler);