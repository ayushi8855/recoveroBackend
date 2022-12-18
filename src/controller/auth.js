const User=require("../model/user_model")
const jwt=require("jsonwebtoken")
// const transporter= require("../middleware/nodemailer")
// require("dotenv").config()
//we have to remeber masaisecret
const genToken=(user)=>{
    // console.log(process.env.sec_key)
    return jwt.sign({user},"masaischool")
}

const register= async(req,res)=>{
     try {

        let user=await User.findOne({email:req.body.email})
          
        if(user){
        return    res.status(401).send("email already exist")
        }
        else{
            const token=genToken(user)
            user= await User.create(req.body)
            return    res.status(201).send({user,token})
        }

        
     } catch (er) {
         res.status(401).send(er.message)
     }

}


const login= async(req,res)=>{
    try {
         
        const user=await User.findOne({email:req.body.email})

        if(!user){
            return res.status(400).send("user not found")

        }
      
      const match=user.checkPassword(req.body.password)
         
      if(!match){
               return res.status(401).send("wrong password")
            }
            else{
                const token=genToken(user)
                return res.status(200).send({user,token})
            }

            
       
    } 
    catch (er) {
        res.status(201).send(er.message)
    }

}

module.exports={register,login}