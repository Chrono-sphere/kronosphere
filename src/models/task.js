import mongoose from 'mongoose';

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: { type: String, required: [true, 'title is a required field'] },
    userId: { type: String, required: [true, 'userId is a required field'] },
    image: String,
    description: String,
    deadline: Date,
    creationDate: { type: Date, required: [true, 'creationDate is a required field'] }
});

mongoose.model('task', TaskSchema);
