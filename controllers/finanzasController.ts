import { Request, Response } from 'express';
import Finanza from '../models/Finanza';

export const crearRegistro = async (req: Request, res: Response) => {
  try {
    const nuevo = new Finanza(req.body);
    const guardado = await nuevo.save();
    res.json(guardado);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear registro', error });
  }
};

export const obtenerRegistros = async (req: Request, res: Response) => {
  try {
    const registros = await Finanza.find();
    res.json(registros);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener registros', error });
  }
};
