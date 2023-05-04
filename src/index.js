const express=require('express');
const morgan=require('morgan');
const dotenv=require('dotenv');
const {usersRouter}=require('./routes/users.routes.js');
const {ocrRouter}=require('./routes/ocr.routes.js')
const {tablaRouter}=require('./routes/tabla.routes.js');

dotenv.config();
const URI_USERS='/api/users'
const URI_OCR='/api/ocr'
const URI_TABLA='/api/tabla'

const PORT=process.env.PORT||3000;
const app=express();

app.use(morgan('dev'));
app.use(express.json());

app.use(URI_USERS,usersRouter);
app.use(URI_OCR,ocrRouter);
app.use(URI_TABLA,tablaRouter);

app.get('/',(req,res)=>{
    return res.send('hola')
})

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
});