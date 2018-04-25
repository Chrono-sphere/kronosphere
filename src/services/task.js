import mongoose from 'mongoose';
const Task = mongoose.model('task');

function createTask(props) {
    const task = new Task(props);
    return task.save();
}

function deleteTask(id) {
    return Task.findOne({ id }).then((task) => {
        if(task) {
            return task.delete();
        }
        else {
            throw new Error('Task to delete not found.');
        }
    })
}

function editTask() {
    // TODO
}

export {
    createTask,
    deleteTask,
    editTask
};
