import express from 'express';
import taskRoutes from './src/routes/taskRoutes.js';
import { connectDB } from './src/config/db.js';
import { swaggerUi, swaggerSpec } from './src/config/swagger.js';
import 'dotenv/config';

const PORT = process.env.PORT || 5000;
const app = express();

// Kết nối DB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/task', taskRoutes);

// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log('Server đã chạy trên port ' + PORT);
    console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
});
