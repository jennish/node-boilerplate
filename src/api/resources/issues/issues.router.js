import express from express;
import issuesController from './issues.controller';

export const issuesRouter= express.Router();

issuesRouter.param('id', issuesController.findByParam);

issuesRouter.route('/')
	.get(issuesController.getAll)
	.post(issuesController.createOne);

issuesRouter.route(':id')
	.get(issuesController.getOne)
	.put(issuesController.updateOne)
	.delete(issuesController.deleteOne);