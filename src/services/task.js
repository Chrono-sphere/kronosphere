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

/**
 * Return a task
 * @param {String} userId Id of the user
 */
function getTask(id, req) {
    return Task.findById(id).then(task => {
        if (req.user.id === task.userId) {
            return task;
        }

        throw new Error('The user does not have access to that task.');
    });
}

/**
 * Returns all the tasks associated with the user.
 * @param {String} request object
 */
function getTasks(req) {
    if (req.user) {
        return Task.find({ userId: req.user.id });
    }

    throw new Error('No user is signed in to retrieve tasks.');
}

export {
    createTask,
    deleteTask,
    editTask,
    getTasks,
    getTask
};
