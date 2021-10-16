const mysql = require('mysql')

const db = mysql.createPool({
    host:'108.167.168.75',
    user:"prog1185_poder",
    password:'gabriel123',
    database:'prog1185_testando'
})


module.exports = {

    selectDados(req,res){
        let resposta=[]
        
        let sql = 'SELECT item FROM presentes'

          db.query(sql,(err,result)=>{
            
            if(err) throw err;
            /* console.log(result) */
            
             result.forEach(element => {
                /* console.log(element.item) */
                resposta.push(element.item)
            });  

            res.json(resposta)
            /* console.log(resposta) */
        })
        
        
        
    }


}