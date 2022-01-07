const task = {
    id: {
        type: 'number',
        required: true
    },
    taskName: {
        type: 'string',
        required: true,
        unique: true
    },
    isDeleted: {
        type: 'string',
        required: false
    },
    isDone: {
        type: 'string',
        required: false
    }
}

module.exports = task
