const mongoose = require("../middlewares/mongoose")
const Schema = mongoose.Schema

// roles角色表规则
const rolesSchema = new Schema({
    // 权限id:   1:管理员   2: 非管理员(不可查看隐私数据)    
    permissionId: {
        type: Number,
        require: true
    },
    // 角色
    role: {
        type: String,
        require: true
    },
    // 姓名
    username: {
        type: String,
        require: true,
        // 唯一性
        unique: true
    },
    // 密码
    password: {
        type: String,
        require: true
    },
    // 头像
    avatar: {
        type: String,
        // 默认图片
        default: "https://img0.baidu.com/it/u=892484092,3290135757&fm=253&fmt=auto&app=138&f=GIF?w=200&h=200"
    }
}) 

// 导出roles表操作对象
module.exports = mongoose.model("roles", rolesSchema)