import mongoose from 'mongoose';
const Task = mongoose.model('task');

/**
 * Creates and saves a task
 * @param {*} props Properties related to task
 */
function createTask(props) {
    const task = new Task(props);
    return task.save();
}

/**
 * Deletes a task with the specified ID. If the task is not
 * found then it throws an error.
 * @param {*} id ID of the task to delete
 */
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
