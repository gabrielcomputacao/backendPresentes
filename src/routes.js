const express = require('express');

const rotas = express.Router();
const insere = require('./controllers/insereDados.controllers')
const selecetDados = require('./controllers/selectDados.controller')


rotas.post('/api/create',insere.create)
rotas.get('/api/select',selecetDados.selectDados)


module.exports=rotas;