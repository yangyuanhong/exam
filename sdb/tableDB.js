import Sql from './sql.js';
import Cons from './con.js';


//加载链接，sql对象等
//let sql = new Sql('xk_student');
let cons = new Cons();


class TabDB {
    constructor(sqltable, obj){
        this.sql = new Sql(sqltable, obj);
    }
    queryArg(arg){
        let sqls = this.sql.sqlquery(arg);
        return cons.execute(sqls);
    }
    deleteById(ids) {
        let sqls = this.sql.sqldel(ids);
        return cons.execute(sqls);
    }
    addSave(student){
        var param = [];
        for(let key in student){
           if(key != 'id'&& student[key]) param.push(student[key]);
        }
        let sqls = this.sql.sqladd(student);
        return cons.execute(sqls,param);
    }
    upData(student){
        console.log(111)
        var param = [];
        for(let key in student){
           if(key != 'id'&& student[key]) param.push(student[key]);
        }
        param.push(student.id);
        let sqls = this.sql.sqlupdate(student);
        return cons.execute(sqls,param);
    }
}
export default TabDB;
//47.94.206.92
