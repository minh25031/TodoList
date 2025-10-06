import express from 'express';
import { getAllTasks, createTask, updateTask, deleteTask } from '../controller/taskController.js';

const router = express.Router();

/**
 * @openapi
 * /api/task:
 *   get:
 *     summary: Lấy danh sách tất cả task
 *     tags:
 *       - Task
 *     responses:
 *       200:
 *         description: Thành công
 */
router.get('/', getAllTasks);

/**
 * @openapi
 * /api/task:
 *   post:
 *     summary: Tạo mới một task
 *     tags:
 *       - Task
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Học NodeJS"
 *               description:
 *                 type: string
 *                 example: "Hoàn thành bài học về Express và Swagger"
 *     responses:
 *       201:
 *         description: Task đã được tạo thành công
 */
router.post('/', createTask);

/**
 * @openapi
 * /api/task/{id}:
 *   put:
 *     summary: Cập nhật một task
 *     tags:
 *       - Task
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của task cần cập nhật
 *     responses:
 *       200:
 *         description: Cập nhật thành công
 */
router.put('/:id', updateTask);

/**
 * @openapi
 * /api/task/{id}:
 *   delete:
 *     summary: Xóa một task
 *     tags:
 *       - Task
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *         description: ID của task cần xóa
 *     responses:
 *       200:
 *         description: Xóa thành công
 */
router.delete('/:id', deleteTask);

export default router;
