import express from 'express';
import apiRouter from './api';
import setGlobalMiddleware from './middleware';

// Create an app from express.
const app = express();

// Set global middleware for the app
setGlobalMiddleware(app);

// Register API routes to the app
app.use('/api', apiRouter);

app.use('*', (req, res) => {
	res.json({"error": "Unspecified routes"});
});

export default app;