const { default: mongoose } = require("mongoose");

const Autores = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "El nombre es obligatorio con un minimo de 3 caracteres"],
    minlength: 3,
  },
});

const Autor = new mongoose.model("Autor", Autores);
module.exports = Autor;
