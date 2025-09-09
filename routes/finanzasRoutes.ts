import express from 'express';
import { crearRegistro, obtenerRegistros } from '../controllers/finanzasController';

const router = express.Router();

router.post('/', crearRegistro);
router.get('/', obtenerRegistros);

export default router;
