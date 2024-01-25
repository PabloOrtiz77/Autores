const { default: mongoose } = require("mongoose");

const Autores = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Este campo es requrido"],
    minlength: 3,
  },
});

const Autor = new mongoose.model("Autor", Autores);
module.exports = Autor;
