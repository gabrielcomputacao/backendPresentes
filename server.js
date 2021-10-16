const express = require('express');
const cors = require('cors')
const path = require('path')
const Sequelize = require('sequelize')
const db1 = require('mysql2/promise')

const routes = require('../serverPresentes/src/routes')


//sequelize nao deu certo pois a versao do banco da hostgator era
//5.6 sequelzie funciona a partir da 5.7
/* const sequelize = new Sequelize('prog1185_testando','prog1185_poder',
'gabriel123',{
    host:"108.167.168.75",
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('deu certo')
}).catch((err)=>{
    console.log('deu erro ' + err)
}) */


//testando funcao para conexao com o banco
/* async function connect(){
    
    const connection = await db.createConnection("mysql://prog1185_poder:gabriel123@108.167.168.75:3306/prog1185_testando");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

connect() */






const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

/* app.get('/',function(req,res){

    let sql = "INSERT INTO presentes(nome,telefone,item) values ('gabriel','123','100')";

    db.query(sql,(err,result)=>{
        console.log(err)
        console.log(result)
    }) 
}) */




app.listen(3002,function(){
    console.log("server escutando na porta 3002")
})