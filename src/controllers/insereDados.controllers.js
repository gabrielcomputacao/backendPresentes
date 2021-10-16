const mysql = require('mysql')

const db = mysql.createPool({
    host:'108.167.168.75',
    user:"prog1185_poder",
    password:'gabriel123',
    database:'prog1185_testando'
})



module.exports={

    
        create(req,res){
            const {nome,tel,item} = req.body;
        
            let sql = "INSERT INTO presentes(nome,telefone,item) values (?,?,?)";
        
        
            const respostaQuery=db.query(sql,[nome,tel,item],(err,result)=>{
                if(err) throw err;
            })
        
            
            if(respostaQuery != null){
                res.status(500)
            }else{
                res.status(200)
            }
        }
    


}