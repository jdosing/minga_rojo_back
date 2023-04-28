// var createError = require('http-errors');
// var express = require('express');
import 'dotenv/config.js'
import './config/database.js'
import createError from 'http-errors'
import express from 'express'

import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors'
import indexRouter from './routes/index.js';
import authsRouter from './routes/auth.js';
import {__dirname} from './utils.js'
 
import notFound from './middlewares/notFound.js'; // se importa el error creado en notfound.js
import errorHandler from './middlewares/errorHandler.js';
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use((req,res,next)=>{
  console.log('logged'); //1
//una vez que se ejecuta esto 1
  next() //2
})
//pasa a la siguiente ejecucion //2
app.use(cors()) // middlewars ESTA EJECUCION
app.use(logger('dev'));
app.use(express.json());//verifica la carga util 
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); //HASTA QUE SE EJECUTE LA TAREA PRINCIPAL QUE ES LA RESPUESTA
//__dirname es la direccion absolurta donde se encuentra la raiz de la ubicacion, express le hace la peticion se usa para servir los archivos estaticos en el navegador 



app.use('/', indexRouter);
app.use('/auth', authsRouter);
app.use(notFound)//si no hay ruta ejecuta eror 404
app.use(errorHandler)//
// se borra lo que trae por defecto 



export default app;