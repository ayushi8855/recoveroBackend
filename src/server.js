const connect= require("./configs/db")
const app = require("./index");

const PORT = 5000
app.listen(PORT,async()=>{
    console.log(`listening at ${PORT}`)
        try {
          await connect()
        } catch (error) {
            console.log(error)
        } 
    })