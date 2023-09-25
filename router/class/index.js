const express = require("express")
const router = express.Router()
const classDB = require("../../dbSchemas/class")
const liveDB = require("../../dbSchemas/live")

router.get("/classList", async (req,res)=>{

    const {pageCode, pageSize, enrollTime, className} = req.query
    let data = await classDB.find().populate({path: "refLiveId", model:liveDB})
    if(data.length <=0) return res.status(400).send({code:400,msg:"不存在班期数据"})
    if(enrollTime && enrollTime.length >=2){
        const startTime = enrollTime[0] - 0
        const endTime = enrollTime[1] - 0
        data = data.filter(item => startTime >= item.enrollTime[0] && endTime <= item.enrollTime[1])
    }
    // 筛选班期，模糊插叙
    if(className) data = data.filter(item => item.className.includes(className))

    data.sort((a,b)=> b.updateTime - a.updateTime)

    const total = data.length
    data = data.splice((pageCode - 1) * pageSize, pageSize)

    res.send({code:200,data,total, msg:"班期列表请求成功"})

})
module.exports = router