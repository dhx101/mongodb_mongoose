const express = require("express");

const alumnosRoutes = express.Router();

alumnosRoutes.get('/', (req,res)=> {
    res.send('ESta es la alumnoRoutes')
})


module.exports = alumnosRoutes;
