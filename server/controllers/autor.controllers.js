const Autores = require("../models/autores.model");

module.exports.getAutor = async (req, res) => {
  try {
    findAutores = await Autores.find();
    res.status(200);
    res.json(findAutores);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.getAutorById = async (req, res) => {
  try {
    findAutorId = await Autores.findById(req.params.id);
    res.status(200);
    res.json(findAutorId);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.createAutor = async (req, res) => {
  try {
    const crearAutor = await Autores.create(req.body);
    res.status(201); //201 significa creado
    res.json(crearAutor);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.updateAutor = async (req, res) => {
  try {
    const updateAutor = await Autores.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200);
    res.json(updateAutor);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};

module.exports.deleteAutor = async (req, res) => {
  try {
    const deleteAutor = await Autores.deleteOne({
      _id: req.params.id,
    });
    res.status(200);
    res.json(deleteAutor);
  } catch (error) {
    res.status(500);
    res.json(error);
  }
};
