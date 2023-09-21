const mongoose = require("mongoose")

const Marketplace_InventorySchema= mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    cars:[{ OemId:{type:String}, KMsOnOdometer:{type:Number},
                MajorScratches:{type:String},
                NumberOfAccidents:{type:Number},
                RegistraionPlace:{type:String}
            }
        ]
   
})

const MarketplaceModel = mongoose.model("MarketPlace",Marketplace_InventorySchema)

module.exports={MarketplaceModel}