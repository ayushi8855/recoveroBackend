const express = require("express")

const router = express.Router();


const Admin =require("../model/user_model")

router.post("/createuser",async(req,res)=>{
    try {
        let admin = await Admin.create(req.body)
     return   res.send(admin)
    } catch (error) {
        return   res.send(error)
    }
})
router.get("/dashboard",async(req,res)=>{
    try {
        let admin = await Admin.find()
     return   res.send(admin)
    } catch (error) {
        return   res.send(error)
    }
})
router.delete("/user/:id",async(req,res)=>{
    try {
        let admin = await Admin.findByIdAndDelete(req.params.id)
     return   res.send(admin)
    } catch (error) {
        return   res.send(error)
    }
})
module.exports = router;