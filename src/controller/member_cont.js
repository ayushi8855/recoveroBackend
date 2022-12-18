const express = require("express")

const router = express.Router();


const Member =require("../model/user_model")

router.post("",async(req,res)=>{
    try {
        let member = await Member.create(req.body)
     return   res.send(member)
    } catch (error) {
        return   res.send(error)
    }
})
router.get("",async(req,res)=>{
    try {
        let member = await Member.find()
     return   res.send(member)
    } catch (error) {
        return   res.send(error)
    }
})
module.exports = router;