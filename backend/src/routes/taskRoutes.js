import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send('Bạn có 1 task mới');
});

router.post('/', (req, res) => {
    res.status(201).json({ message: 'Task đã được tạo' });
});

router.put('/:id', (req, res) => {
    res.status(201).json({ message: 'Task đã được tạo thành công' });
});

router.delete('/:id', (req, res) => {
    res.status(201).json({ message: 'Task đã được xóa thành công' });
});

export default router;