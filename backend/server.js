import express from 'express';
import taskRoutes from './src/routes/taskRoutes.js';
import { connect } from 'mongoose';
import { connectDB } from './src/config/db.js';
import 'dotenv/config';
const PORT = process.env.PORT || 5000;

const app = express();

connectDB();

app.use(express.json());
app.use('/api/task', taskRoutes);

app.listen(PORT, () => {
    console.log('Server đã chạy trên port ' + PORT);
});

