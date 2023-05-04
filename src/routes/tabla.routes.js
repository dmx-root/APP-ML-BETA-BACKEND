const express=require('express');
const {TablaControllers}=require('../controllers/tabla.controllers.js');
const tablaRouter=express.Router();
const objectTablaControllers=new TablaControllers();

tablaRouter.post('/',objectTablaControllers.postTabla);
tablaRouter.get('/',objectTablaControllers.getTabla);

module.exports.tablaRouter=tablaRouter;