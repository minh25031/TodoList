import Task from "../models/Task.js";



const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch (error) {
        console.error('Lỗi khi lấy danh sách Task:', error);
        res.status(500).json({ message: 'Lỗi khi lấy danh sách Task', error: error.message });
    }
}

const createTask = async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).json({ message: 'Tiêu đề và mô tả là bắt buộc' });
        }

        const newTask = new Task({
            title,
            description,
        });

        newTask.save()
            .then((task) => {
                res.status(201).json({ message: 'Task đã được tạo thành công', task });
            })
            .catch((error) => {
                console.error('Lỗi khi tạo Task:', error);
                res.status(500).json({ message: 'Lỗi khi tạo Task', error: error.message });
            });
    }
    catch (error) {
        console.error('Lỗi khi tạo Task:', error);
        res.status(500).json({ message: 'Lỗi khi tạo Task', error: error.message });
    }
}

const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const updatedTask = await Task.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Không tìm thấy Task' });
        }

        res.status(200).json({
            message: 'Task đã được cập nhật thành công',
            task: updatedTask
        });
    } catch (error) {
        console.error('Lỗi khi cập nhật Task:', error);
        res.status(500).json({ message: 'Lỗi khi cập nhật Task', error: error.message });
    }
}

const deleteTask = (req, res) => {
    res.status(200).json({ message: 'Task đã được xóa thành công' });
}

export { getAllTasks, createTask, updateTask, deleteTask };