//sql类，用于判断tableDB插入的表
class Sql {
    constructor(table_name,obj){
        this.table = table_name;
        this.obj = obj;
    }
    sqlquery(term){
        if(!isNaN(+term)){
            return 'select * from '+ this.table + ' where id ='+term;
        }else if(term == 'undefined'|| term == undefined){
            return 'select * from '+ this.table;
        }else{ 
            var s = "";
            for (let v in this.obj) {
                if(v == 'createTime'||v == 'uploadTime'){
                    s += (v + " like binary '%"+term+"%' or ");
                }else{
                    if(v!='id')s += (v + " like '%"+term+"%' or ");
                }
            }
            s = s.slice(0,-4);
            return "select * from "+this.table+" where "+s;
        }
    }
    sqldel(ids){
        return 'delete from '+ this.table + ' where id in' + '('+ ids +')';
    }
    sqladd(ops){
        var s = '';
        var r = '';
        for (let v in ops) {
            if(v!='id'&& ops[v])
            {
                s += (v+',');
                r +='?,';
            }
        }
        s = s.slice(0,-1)
        r = r.slice(0,-1);
        return 'insert into '+ this.table + '('+s+') values('+r+')';
    }
    sqlupdate(ops){
        var s = '';
        for (let v in ops){
            if(v!="id"&& ops[v])s += (v +'=?,');
        }
        s = s.slice(0,-1);
        return 'update '+this.table+' set '+s+' where id =?';
    }
}
export default Sql;
