const getAllTasks = (req, res) => {
    res.status(200).send('Bạn có 1 task mới');
}

const createTask = (req, res) => {
    res.status(201).json({ message: 'Task đã được tạo thành công' });
}

const updateTask = (req, res) => {
    res.status(200).json({ message: 'Task đã được cập nhật thành công' });
}

const deleteTask = (req, res) => {
    res.status(200).json({ message: 'Task đã được xóa thành công' });
}

export { getAllTasks, createTask, updateTask, deleteTask };