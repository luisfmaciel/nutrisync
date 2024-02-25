import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const itemMenuSchema = new Schema({
    alimento: String,
    quantidade: String
  });

const itemValoresNutrocionaisSchema = new Schema({
    title: String,
    value: String
  });

const menuSchema = new Schema({
  userId: {
    type: String,
    require: true
  },
  nome: {
    type: String,
    require: true,
  },
  tipo: {
    type: String,
    require: true,
  },
  classification: {
    type: Number,
    require: true,
    default: 0
  },
  cardapio: {
    type: [itemMenuSchema],
    require: true,
  },
  valoresNutricionais: {
    type: [itemValoresNutrocionaisSchema],
    require: true,
  }
}, { timestamps: true });

menuSchema.index({ userId: 1 });
menuSchema.index({ nome: 1 });
menuSchema.index({ tipo: 1 });

const Menus = mongoose.model('Menus', menuSchema);

export default Menus;
