 const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/feature',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../json/projectFeature.json"))
})

router.get('/version',(req,res)=>{
    res.sendFile(path.join(__dirname,"../../json/projectVersion.json"))
})

module.exports = router