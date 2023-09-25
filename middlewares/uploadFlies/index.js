const multer = require("multer")
const path = require("path")

// 配置上传来的.xlsx表文件
const storageExcel = multer.diskStorage({
    // 上传文件的存储位置
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../upload/excel"))
    },
    // 指定上传文件的文件名
    filename: function (req, file, cb) {
        // 解决文件名中有中文的情况
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8")
        // 随机名称
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const uploadExcelStorage = multer({ storage: storageExcel })


// 配置上传来的课程封面
const storageCoverImage = multer.diskStorage({
    // 上传文件的存储位置
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/file/images/coverImage"))
    },
    // 指定上传文件的文件名
    filename: function (req, file, cb) {
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8")
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const uploadCoverImageStorage = multer({ storage: storageCoverImage })



// 配置上传来的文章内的图片
const storageArticleImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../../public/file/images/articleImage"))
    },
    filename: function (req, file, cb) {
        file.originalname = Buffer.from(file.originalname, "latin1").toString("utf8")
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname))
    }
})
const uploadArticleImageStorage = multer({ storage: storageArticleImage })



module.exports = {
    uploadExcelStorage,
    uploadCoverImageStorage,
    uploadArticleImageStorage
}