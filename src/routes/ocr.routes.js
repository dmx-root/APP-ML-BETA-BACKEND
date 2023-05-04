const express=require('express');
const {OcrControllers}=require('../controllers/ocr.controllers.js');
const ocrRouter=express.Router();

const OcrObjectControllers=new OcrControllers();

ocrRouter.post('/',OcrObjectControllers.postOcr)
ocrRouter.get('/',OcrObjectControllers.getOcrs)
ocrRouter.get('/:id',OcrObjectControllers.getOcr)


module.exports.ocrRouter=ocrRouter;