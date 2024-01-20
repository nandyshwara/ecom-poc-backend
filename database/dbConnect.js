const mongoose = require("mongoose")


const dbConnect = async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017")
        console.log("Database Connected Successfully");
    }
    catch(error){
        console.log(error);
    }
}

module.exports = {
    dbConnect
}