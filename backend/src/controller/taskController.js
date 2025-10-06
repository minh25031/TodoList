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
            return res.status(400).json({ message: 'Tiêu đề và mô tả phải bắt buộc nhập' });
        }
        const newTask = new Task({ title, description });
        const savedTask = await newTask.save();
        res.status(201).json({ message: 'Tạo Task thành công', task: savedTask });
    }
    catch (error) {
        console.error('Lỗi khi khi gọi createTask', error);
        res.status(500).json({ message: 'Lỗi hệ thống', error: error.message });
    }

}


const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title,
                description,
                status,
                completedAt: status === 'completed' ? new Date() : null,
            },
            {
                new: true
            }
        );
        if (!updatedTask) {
            return res.status(404).json({ message: 'Không tìm thấy Task' });
        }
        res.status(200).json({ message: 'Cập nhật Task thành công', task: updatedTask }
        );
    } catch (error) {
        console.error('Lỗi khi khi gọi updateTask', error);
        res.status(500).json({ message: 'Lỗi hệ thống', error: error.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTask = await Task.findByIdAndDelete(id);
        if (!deletedTask) {
            return res.status(404).json({ message: 'Không tìm thấy Task' });
        }
        res.status(200).json({ message: 'Xóa Task thành công', task: deletedTask });
    } catch (error) {
        console.error('Lỗi khi khi gọi deleteTask', error);
        res.status(500).json({ message: 'Lỗi hệ thống', error: error.message });

    }
}

export { getAllTasks, createTask, updateTask, deleteTask };