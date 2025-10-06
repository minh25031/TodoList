import path from 'path';
import { fileURLToPath } from 'url';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Task API',
            version: '1.0.0',
            description: 'API tài liệu cho Task Manager',
        },
        servers: [{ url: 'http://localhost:5000' }],
    },
    // Dùng đường dẫn tuyệt đối để chắc chắn quét đúng
    apis: [path.join(__dirname, '../routes/*.js')],
};

export const swaggerSpec = swaggerJsdoc(options);
export { swaggerUi };
