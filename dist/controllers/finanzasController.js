"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerRegistros = exports.crearRegistro = void 0;
const Finanza_1 = __importDefault(require("../models/Finanza"));
const crearRegistro = async (req, res) => {
    try {
        const nuevo = new Finanza_1.default(req.body);
        const guardado = await nuevo.save();
        res.json(guardado);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear registro', error });
    }
};
exports.crearRegistro = crearRegistro;
const obtenerRegistros = async (req, res) => {
    try {
        const registros = await Finanza_1.default.find();
        res.json(registros);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener registros', error });
    }
};
exports.obtenerRegistros = obtenerRegistros;
