const express = require("express")
const router = express.Router()
const studentDB = require("../../dbSchemas/student")
const path = require("path")
const { log } = require("console")
// 监听学员列表数据的请求
router.get("/studentList", async (req, res) => {
    // 前端必传: pageNum页码、pageSize每页数据条数
    // 可选参数: 分类 / 课程阶段 / 班期名称
    const {  kindName, courseName, className, pageNum, pageSize } = req.query
    let data = await studentDB.find({}, {__v:0, _id:0})

    // 如果客户端传了这些参数, 就基于这些参数筛选数据
    if(kindName) data = data.filter(item => item.kindName === kindName)
    if(courseName) data = data.filter(item => item.courseName === courseName)
    if(className) data = data.filter(item => item.className === className)

    // 数据总条数
    const total = data.length

    data = data.splice((pageNum-1) * pageSize, pageSize)

    res.send({
        code: 200,
        msg: "学员数据列表请求成功",
        data,
        total
    })
})


// 响应可以筛选学员数据的条件(类别、阶段、班期)
router.get("/courseClassification", async (req, res) => {
    res.sendFile(path.join(__dirname, "../../json/courseClassification.json"))
})


// 更新学员信息
router.post("/updateStudent", async(req, res) => {
    const studentInfo = req.body
    const result = await studentDB.updateOne({phone: studentInfo.phone}, {detailInfo: studentInfo})
    // 校验数据更新是否成功
    if(result.acknowledged){
        console.log("result",result);
    console.log('acknowledged:',result.acknowledged);

        res.send({code: 200, msg: "学员信息修改成功"})
    }else{
        res.status(400).send({code: 400, msg: "学员信息修改失败"})
    }
}) 

// 修改班期数据
router.post("/updateStudentClass", async (req,res)=>{
 const {phone,className}  = req.body
 const result = await studentDB.updateOne({phone},{className})
 if(!result.acknowledged) return res.status(400).send({code: 400, msg: "学员班期修改失败"})

 return res.send({code: 200, msg: "学员班期修改成功"})
})




module.exports = router