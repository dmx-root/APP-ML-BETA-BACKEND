const {db}= require('../db/conection')


class USersControllers{
    async getUSers(req,res){
        try {
            const [rows]=await db.query('SELECT *FROM users');
            if(rows.length<=0){
                return res.status(404).send({message:'There are any user'})
            }
            return res.status(200).send(rows);
        } catch (error) {
            console.log(error)
            return res.status(500).send({message:'Any goes wrong'});
        }
    }
    async getUser(req,res){
        const {id}=req.params;
        try {
            const [rows]=await db.query('SELECT *FROM users WHERE id=?',[id]);
            if(rows.length===0){
                return res.status(404).send('User no found');
            }
            return res.status(200).send(rows);
        } catch (error) {
            console.log(error);
            return res.status(500).send({message:'something goes wrong'})
        }
    }
    async postUsers(req,res){
        const {user_name, user_cedula,user_phone,user_password}=req.body;
        try {
            const [rows]=await db.query('INSERT INTO users(user_name, user_cedula,user_phone,user_password) VALUES(?,?,?,?)',[user_name, user_cedula,user_phone,user_password]);
            if(rows.affectedRows===0){
                return res.status(404).send({message:'The value not could insert'})
            }
            return res.status(200).send({message:'The element was inserted'});
        } catch (error) {
            console.log(error);
            return res.status(500).send({message:'something goes wrong'})
        }
    }
    async deleteUsers(req,res){
        const {id}=req.params;
        try {
            const [rows] = await db.query('DELETE FROM users WHERE id=?',[id]);
            if(rows.affectedRows===0){
                return res.status(404).send({message:'The element wasnt delete'});
            }
            return res.status(200).send({message:'The element was deleted'});
        } catch (error) {
            console.log(error);
            return res.status(500).send({message:'something goes wrong'})   
        }
    }
}

module.exports.USersControllers=USersControllers;