const mongoose=require("mongoose")

const userSchema = mongoose.Schema({
    fname:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        required:true
    },
})

const UserModel = mongoose.model("User",userSchema)

module.exports={UserModel}