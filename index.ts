import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors({
  origin: "https://finanzas-project-frontend.vercel.app"
}));
app.use(express.json());

// Rutas de ejemplo
app.get('/', (req, res) => {
  res.send('API funcionando 🚀');
});

// Importar rutas de finanzas
import finanzasRoutes from './routes/finanzasRoutes';
app.use('/api/finanzas', finanzasRoutes);

// Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
