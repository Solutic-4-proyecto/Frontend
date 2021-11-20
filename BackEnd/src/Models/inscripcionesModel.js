const { Schema, model } = require("mongoose");

const inscripcionSchema = new Schema({
  idproyecto: {
    type: String,
    required: true,
    trim: true,
  },
  identificacionEstudiante: {
    type: String,
    required: true,
  },
  estado: String,
  fechaIngreso: Date,
  fechaEgreso: Date,
});
module.exports= model("Inscripcion", inscripcionSchema);