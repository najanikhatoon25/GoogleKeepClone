const mongoose = require("mongoose")

const connectdb=async()=>{
    try{
      await mongoose.connect(process.env.MONGO_URI)
      console.log("mongodb has connected") 
    }
    catch(error){
        console.log("mongodb connection has failed")
        console.log(error.message)
    }
    
}
module.exports=connectdb