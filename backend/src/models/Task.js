import mongoose from "mongoose";
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: 'active',
    },
    description: {
        type: String,
        required: true,
    },
    completedAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
});

const Task = mongoose.model('Task', taskSchema);
export default Task;    