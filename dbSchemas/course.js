const mongoose = require("../middlewares/mongoose")
const Schema = mongoose.Schema
const courseSchema = new Schema({
    // 课程类别
    kindName: {
        type: String,
        require: true
    },
    // 课程名称
    courseName: {
        type: String,
        require: true
    },
    // 售价
    sellingPrice:{
        type: Number,
        require: true
    },
    // 是否在售
    isSale: {
        type: Boolean,
        default: true
    },
    // 更新者
    updatePeople:{
        type: String,
        require: true
    },
    // 更新时间
    updateTime:{
        type: String,
        default: Date.now()
    },
    // 课程描述
    description:{
        type: String
    },
    // 课程封面
    coverImage:{
        type: String
    }
})

module.exports = mongoose.model("course", courseSchema)