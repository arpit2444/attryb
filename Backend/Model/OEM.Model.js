const mongoose=require("mongoose")

const oemSchema = mongoose.Schema({
    modelName:{
        type:String
    },
    yearOfModel:{
        type:Number
    },
    listPrice:{
        type:String
    },
   mileage:{
    type:String
},
powerBHP:{
    type:String
}
})

const oemModel = mongoose.model("oem",oemSchema)

module.exports={oemModel}