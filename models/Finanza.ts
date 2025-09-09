import mongoose, { Document, Schema } from 'mongoose';

export interface IFinanza extends Document {
  tipo: 'income' | 'expense' | 'savings';
  monto: number;
  categoria?: string;
  descripcion?: string;
  fecha: Date;
}

const FinanzaSchema: Schema = new Schema({
  tipo: { type: String, enum: ['income', 'expense', 'savings'], required: true },
  monto: { type: Number, required: true },
  categoria: { type: String },
  descripcion: { type: String },
  fecha: { type: Date, default: Date.now } // 👈 la fecha se guarda automáticamente
});

export default mongoose.model<IFinanza>('Finanza', FinanzaSchema);
