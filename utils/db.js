const mongoose = require("mongoose");
const user = "dhx101";
const password = "YvZBMf0KKQLq1kHz";
const DB_URL = `mongodb+srv://${user}:${password}@cluster0.mmv93o5.mongodb.net/?retryWrites=true&w=majority`;

const conecto = async () => {
	try {
		const db = await mongoose.connect(DB_URL);
		const { name, host } = db.connection;
		console.log(`Conexion con el servidor ${name}, con host ${host}`);
	} catch (e) {
		console.error("Error al conectar con el server", e);
	}
};

module.exports = { conecto };
