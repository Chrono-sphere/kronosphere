import mongoose from 'mongoose';

const Task = mongoose.model('task');

/**
 * Creates and saves a task
 * @param {Object} props Properties related to task
 */
function createTask(props) {
    const task = new Task(props);
    return task.save();
}

/**
 * Deletes a task with the specified ID.
 * @param {String} id ID of the task to delete
 */
function deleteTask(id) {
    return Task.findByIdAndRemove(id);
}

/**
 * Edits the specified task with the provided properties.
 * @param {String} id ID of the task
 * @param {Object} props Properties of the task
 */
function editTask(id, props) {
    return Task.findByIdAndUpdate(
        id,
        { $set: props },
        { new: true }
    );
}

export {
    createTask,
    deleteTask,
    editTask
};
