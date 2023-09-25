const express = require("express")
const router = express.Router()
const { generateToken } = require("../../middlewares/jwt/authorization")
const roleTable = require("../../dbSchemas/roles")

// 处理登录请求: /api/login
router.post("/", async (req, res)=>{
    // 需要到数据库中取出数据进行对比, 检查客户端传来的用户密码是否有效

    const {username, password} = req.body
    console.log('req.body',username, password);
    const data = await roleTable.findOne({username, password}, {_id:0, __v:0})
    if(!data) return res.status(401).send({code: 401, msg: "账户或密码有误,请正确填写"})
    const {role, avatar, permissionId} = data

    // 生成token
    const token = generateToken({username, role, avatar})
    // 响应： 登录成功的信息、用户的数据、token
    res.send({code: 200, msg: "登录成功", token, userInfo: {username, role, avatar, permissionId}})
})

module.exports = router


// 哈希加盐