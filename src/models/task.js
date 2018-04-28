import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: String,
    userId: String,
    description: String,
    deadline: Date,
    creationDate: Date
});

mongoose.model('task', TaskSchema);
