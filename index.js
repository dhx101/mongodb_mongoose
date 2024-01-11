const express = require("express");
const { conecto } = require("./utils/db");
const alumnosRoutes = require("./src/api/routes/alumnos.routes");
const PORT = 3000;

const app = express();

conecto();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use("/alumnos", alumnosRoutes);

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}/`);
});
