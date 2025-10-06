import express from 'express';
import taskRoutes from './src/routes/taskRoutes.js';
const app = express();

app.use(express.json());
app.use('/api/task', taskRoutes);

app.listen(3000, () => {
    console.log('Server đã chạy trên port 3000');
});

