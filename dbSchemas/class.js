const mongoose = require("../middlewares/mongoose")
const Schema = mongoose.Schema
// 班期表
const classSchema = new Schema({
    // 课程名称(阶段名)
    courseName:{
        type: String,
        require: true
    },
    // 班期名称
    className:{
        type: String,
        require: true,
        unique: true
    },
    // 招生时间
    enrollTime:{
        type: Array,
        require: true,
    },
    // 学员数量
    studentNum:{
        type: Number,
        default: 0
    },
    // 更新人
    updatePeople:{
        type: String
    },
    // 更新时间
    updateTime:{
        type: Number
    },
    // 班期表 和 直播表进行表关联.  目的: 为了通过班期获取到它对应的直播列表数据
    refLiveId:{
        type: Schema.Types.ObjectId,
        ref: "live"  // 当前字段关联的表
    }
})

module.exports = mongoose.model("class", classSchema)