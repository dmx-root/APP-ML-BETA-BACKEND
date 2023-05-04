const {db}=require('../db/conection.js');

class OcrControllers{
    async postOcr(req,res){
        const {op,lote,referencia,ref_color,modulo,n_operarios,desde,hasta,cantidad_registros,belong_to}=req.body;
        try {
            const [rows]=await db.query('INSERT INTO ocr(op,lote,referencia,ref_color,modulo,n_operarios,desde,hasta,cantidad_registros,belong_to) VALUE(?,?,?,?,?,?,?,?,?,?)',[op,lote,referencia,ref_color,modulo,n_operarios,desde,hasta,cantidad_registros,belong_to])
            if(rows.affectedRows>0){
                return res.status(200).send({message:'The element was inserted'})
            }
            return res.status(404).send({message:'The element wasnt inserted'})
        } catch (error) {
            res.status(500).send({message:'something goes wrong'});
            console.log(error)
        }
    }
    async getOcr(req,res){
        const {belong_to}=req.body;
        const id=req.params.id;
        try {
            const [rows]=await db.query('SELECT *FROM ocr WHERE id=? AND belong_to=?',[id,belong_to]);
            if(rows.length>0){
                return res.status(200).send(rows);
            }
            return res.status(404).send({message:'Element wasnt finded'});
            
        } catch (error) {
            res.status(500).send({message:'something goes wrong'});
            console.log(error)
        }
    }
    async getOcrs(req,res){
        const {belong_to}=req.body;
        try {
            const [rows]=await db.query('SELECT *FROM ocr WHERE belong_to=?',[belong_to]);
            if(rows.length>0){
                return res.status(200).send(rows);
            }
            return res.status(404).send({message:'Resource no found'});
        } catch (error) {
            res.status(500).send({message:'something goes wrong'});
            console.log(error)
        }
    }
}

module.exports.OcrControllers=OcrControllers;