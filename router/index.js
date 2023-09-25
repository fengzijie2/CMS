// 路由入口文件。 每一个能进来的路由都是 /api 开头
const express = require("express")
const router = express.Router()  // 模块化路由程序
const { verifyToken } = require("../middlewares/jwt/authorization")
// 登录:   /api/login
router.use("/login", require("./login"))

// 项目相关的描述数据
router.use("/projectData", require("./projectData"))

// 获取角色相关的信息
router.use("/role", verifyToken, require("./role"))

// 获取学员相关的信息
router.use("/student", verifyToken, require("./student"))

// 处理导入
router.use("/import", verifyToken, require("./import"))

// 处理课程相关请求
router.use("/course", verifyToken, require("./course"))

// 处理班期数据的请求
router.use("/class", verifyToken, require("./class"))

// 处理直播的请求
router.use("/live", verifyToken, require("./live"))

// 处理文章的请求
router.use("/article", verifyToken, require("./article"))

// 处理上传文章内引用的图片
router.use("/uploadImg", require("./uploadArticleImg"))
module.exports = router

