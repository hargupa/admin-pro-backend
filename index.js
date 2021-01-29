require('dotenv').config();

const express=require('express');
const cors = require('cors');

const{dbConnection} = require('./database/config');


//Crear el servidor de express
const app=express();
//admon 
//Rutas
//Configurar CORS
app.use(cors());

//BD
dbConnection();

app.get('/',(req,res)=>{
    res.json({
        ok:true,
        msg: 'Hola que mira'
    })
});

app.listen(process.env.PORT,()=>{
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
})