let  mysql = require('mysql');
class Cons {
    craecon(){
        return mysql.createConnection({
            host: '127.0.0.1',
            database: 'exam',
            user: 'root',
            password: 'root'
        });
    }
    execute(sql,param = undefined) {
        return new Promise((resolve,reject) => {
            let con = this.craecon();
            con.connect();
            con.query(sql,param,(err, results) =>{
                if(err){
                    reject(err);
                }else{
                    resolve(results);
                }
            });
            con.end();
        });
    }
}
export default Cons;
