const express = require("express");

const router = express.Router();

const AutoresContollers = require("../controllers/autor.controllers");

router.post("", AutoresContollers.createAutor);
router.get("", AutoresContollers.getAutor);
router.get("/:id", AutoresContollers.getAutorById);
router.put("/edit/:id", AutoresContollers.updateAutor);
router.delete("/:id", AutoresContollers.deleteAutor);

module.exports = router;
