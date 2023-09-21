const express= require("express");
const {MarketplaceModel}= require("../Model/Marketplace_Inventory.Model")
const { authenticate } = require("../Middleware/Authentication.Middleware");


const MarketPlaceRouter = express.Router()


MarketPlaceRouter.get("/",authenticate,async(req,res)=>{
    const {user}= req.body
    const cars = await MarketplaceModel.find({user})
    res.send(cars)
})


MarketPlaceRouter.post("/add",async(req,res)=>{
    const {user} = req.body;
    const payload = req.body

    let existingInventory= await MarketplaceModel.findOne({user})

    
    if(existingInventory){
    const id = existingInventory._id
     const newItem=  payload.cars[0]
  
     const forUpdate=[...existingInventory.cars,newItem]
     await MarketplaceModel.findByIdAndUpdate({_id:id},{cars:forUpdate})
     res.send({"msg":"Car Added to Inventory"})
     
    }
    else{
        const newInventory = new MarketplaceModel(payload)
        await newInventory.save()
        res.send({"msg":"Car Added to Inventory"})
    
    }

})


MarketPlaceRouter.patch("/update/:id",async(req,res)=>{
    const id= req.params.id;
    const {user} = req.body;
    const {payload} = req.body;
    await MarketplaceModel.findOneAndUpdate({user,"cars.OemId":id},{"cars.$.KMsOnOdometer":payload.KMsOnOdometer})
    res.send({"msg":"Inventory updated"})
  
     })

    

    MarketPlaceRouter.patch("/deleteItem/:id",async(req,res)=>{
    const id = req.params.id
    const {user} = req.body
    await MarketplaceModel.findOneAndUpdate(
        {user},
        {"$pull": {"cars": {"OemId": id}}}
    )
    res.send("deleted")
})





module.exports={MarketPlaceRouter}