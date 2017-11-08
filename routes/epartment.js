var express=require("express");
var router =express.Router();
import TabDB from '../db/tableDB.js'
import comms from '../model/index';
let stu =new comms.Epartment();
let stus = new TabDB('tbl_exam_epartment', stu);



router.get('/query',(req,res,next) =>{
    stus.queryArg(req.query.arg).then((results) =>{
        res.json(results);
    }).catch((err) =>{
        res.send(err);
    })
    
});

router.get('/delById',(req,res,next) =>{
    stus.deleteById(req.query.ids).then((results)=>{
        res.json(results);
    }).catch((err) => {
        res.send(err);
    })
});
router.post('/addSave',(req,res,next) =>{
    let student=new comms.Epartment();
    Object.assign(student, req.body);
    stus.addSave(student).then((results) => {
        res.json(results);
    }).catch((err) => {
        res.send(err);
    })
});
router.post('/upData',(req,res,next) =>{
    let student=new comms.Epartment();
    Object.assign(student, req.body);
    stus.upData(student).then((results) => {
        res.json(results);
    }).catch((err) => {
        res.send(err);
    })
});

module.exports=router;
