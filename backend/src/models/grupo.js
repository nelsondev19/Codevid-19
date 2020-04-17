const mongoose = require("mongoose");
const { Schema } = mongoose;

const grupoSchema = new Schema({
  nombreGrupo: { type: String },
  _id:{ type: String },
  creador: [
    {
      email: String,
      password: String,
      firstname: String,
      last_name: String,
      urlimage: String,
      _id: String,
      incluido: { type: Boolean},
    },
  ],
  familiares: [
    {
      email: String,
      password: String,
      firstname: String,
      last_name: String,
      urlimage: String,
      _id: String,
      incluido: { type: Boolean, default: false },
      idGrupo:{type:String}
    },
  ],
  fechaCreacionGrupo: { type: String, default: new Date().toISOString()},
  codigo: String,
  fechaInicioAsignado: {type: String},
  asignado: [
    { 
      fechaCaducidad: { type: Number , default: new Date().setSeconds(500)},//adelanta la hora actual en dos dias new Date().setSeconds(172800)
      email: String,
      password: String,
      firstname: String,
      last_name: String,
      urlimage: String,
      _id: String,
      incluido: { type: Boolean, default: false },
      idGrupo:{type:String},
      elegido:{type:Boolean , default:false}
    },
  ],
});

module.exports = mongoose.model("grupo", grupoSchema);
