const express = require("express");
const { getAlumnos, postAlumnos } = require("../controller/alumnos.controller");
const alumnosRoutes = express.Router();

alumnosRoutes.get("/", getAlumnos);
alumnosRoutes.post("/", postAlumnos);

module.exports = alumnosRoutes;
