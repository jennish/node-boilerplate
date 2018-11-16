import mongoose from 'mongoose';

const schema= {
	
}

const issueSchema= new mongoose.Schema(schema);

export const Issue= mongoose.model('issue', issueSchema);