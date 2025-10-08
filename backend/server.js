import express from 'express';
import taskRoutes from './src/routes/taskRoutes.js';
import { connectDB } from './src/config/db.js';
import { swaggerUi, swaggerSpec } from './src/config/swagger.js';
import 'dotenv/config';

const PORT = process.env.PORT || 5000;
const app = express();


// Middleware
app.use(express.json());

// Routes
app.use('/api/task', taskRoutes);

// Kết nối DB
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('Server đã chạy trên port ' + PORT);
        console.log(`Swagger docs: http://localhost:${PORT}/api-docs`);
    });
})
    .catch((err) => {
        console.error('Kết nối DB thất bại:', err);
        process.exit(1);
    });


// Swagger UI route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));