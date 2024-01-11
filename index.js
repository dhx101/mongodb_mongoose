const express = require("express");
const { conecto } = require("./utils/db.js");
const alumnosRoutes = require("./src/api/routes/alumnos.routes.js");
const PORT = 3000;

const app = express();

conecto();

app.use("/alumnos", alumnosRoutes);


app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}/`);
});
