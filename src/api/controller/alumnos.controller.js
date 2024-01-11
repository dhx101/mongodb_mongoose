const Alumnos = require("../models/alumnos.model");

const getAlumnos = async (req, res) => {
	try {
		const allAlumnos = await Alumnos.find();
		return res.status(200).json(allAlumnos);
	} catch (error) {
		return res.status(500).json(error);
	}
};
const postAlumnos = async (req, res) => {
	try {
			const newAlumno = new Alumnos(req.body);
			const insertAlumno = await newAlumno.save();
			return res.status(201).json(insertAlumno);
		
	} catch (error) {
		console.error(error);
		return res.status(500).json(error);
	}
};

module.exports = { getAlumnos, postAlumnos };
