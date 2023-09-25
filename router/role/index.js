const express = require("express")
const router = express.Router()
const { generateToken } = require("../../middlewares/jwt/authorization")
const roleTable = require("../../dbSchemas/roles")

// 请求用户信息
router.get("/user", async (req, res) => {
    const { username, role } = req.userInfo
    const data = await roleTable.findOne({ username, role }, { __v:0, _id:0,password:0 })
    if (!data) return res.status(404).send({ code: 404, msg:"未查询到用户信息,建议联系管理员" })
    res.status(200).send( {code:200,msg: "当前登录的用户信息获取成功",data:data})
})

module.exports = router


// 哈希加盐