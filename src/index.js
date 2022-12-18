const express = require("express")
const app= express()
const cors = require("cors")
app.use(cors())
const adminController=require("./controller/admin_cont")
const memberController=require("./controller/member_cont")
const {register,login}=require("./controller/auth")
app.use(express.json())
app.use("/admin",adminController)
// app.use("/member",memberController)
app.post("/register",register)
app.post("/login",login)


module.exports=app