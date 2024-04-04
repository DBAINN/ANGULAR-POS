const {Client} = require('pg')

const client= new Client({
    host:"localhost",
    user: "postgres",
    port:5432,
    password: "1234",
    database:"Log_user"
})
client.connect();

client.query('Select * from  public."Log"',(err,res)=>{
 if (!err){
    console.log(res.rows)
} else{
    consolole.log(err.message);
}
client.end;
})