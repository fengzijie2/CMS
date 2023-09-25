const express = require("express")
const router = express.Router()
const liveDB = require("../../dbSchemas/live")

// 删除直播(项)
router.delete("/deleteLiveItem", (req, res) => {
    const { liveDataId, liveItemId } = req.body
    if (liveDataId && liveItemId) { // 有值
        liveDB.updateOne(
            { _id: liveDataId },
            {
                $pull: { // 删除字段值为数组的指定成员
                    liveList: {
                        _id: liveItemId
                    }
                }
            }
        ).then(() => {
            res.send({ code: 200, msg: "该节直播删除成功" })
        }).catch(() => {
            res.status(400).send({ code: 400, msg: "该节直播删除失败" })
        })
    } else {
        res.status(400).send({ code: 400, msg: "直播的参数不能为空, 删除失败" })
    }
})

// 增加直播(项)
router.post("/addLiveItem", (req, res) => {
    const { className, courseName, _id, liveTitle, liveTime, liveDuration, teacher } = req.body

    if (className && courseName && _id && liveTitle && liveTime && liveDuration && teacher) {
        // 都不为空
        liveDB.updateOne({ _id }, {
            $push: {
                liveList: {
                    className,
                    courseName,
                    liveTitle,
                    liveTime: liveTime - 0, // 转数字
                    liveDuration: liveDuration - 0,
                    teacher,
                }
            }
        }).then(() => {
            res.send({ code: 200, msg: "直播创建成功" })
        }).catch(() => {
            res.status(400).send({ code: 400, msg: "直播创建失败" })
        })
    } else {
        res.status(400).send({ code: 400, msg: "创建直播提交的参数不能有空" })
    }

})

module.exports = router