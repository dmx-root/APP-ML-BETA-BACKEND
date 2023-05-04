const {db}=require('../db/conection.js');

class TablaControllers{
    async getTabla(req,res){
        const {belong_to}=req.body;
        try {
            const [rows]=await db.query('SELECT *FROM tabla WHERE belong_to=?',[belong_to]);
            if(rows.length>0){
                return res.status(200).send(rows);
            }
            return res.status(404).send({message:'The element no found'})
        } catch (error) {
            console.log(error);
            return res.status(500).send({message:'Something goes wrong'})
        }
    }
    async postTabla(req,res){
        const{xs_30,s_32,m_34,l_36,xl_38,xxl_40,xxxl_42,xxxxl_44,belong_to}=req.body;
        try {
            const [rows]=await db.query('INSERT INTO tabla (xs_30,s_32,m_34,l_36,xl_38,xxl_40,xxxl_42,xxxxl_44,belong_to) VALUE(?,?,?,?,?,?,?,?,?)',[xs_30,s_32,m_34,l_36,xl_38,xxl_40,xxxl_42,xxxxl_44,belong_to]);
            if(rows.affectedRows>0){
                return res.status(200).send({message:'The element was inserted'});
            }
            return res.status(404).send({message:'The element wasnt inserted'});
        } catch (error) {
            console.log(error);
            return res.status(500).send({message:'Something goes wrong'})
        }
    }
}

module.exports.TablaControllers=TablaControllers;