const express= require("express")
const {oemModel}= require("../Model/OEM.Model")

const oemRouter = express.Router()



oemRouter.get("/", async (req, res) => {
    const oems = await oemModel.find();
    res.send(oems)
})


oemRouter.post("/create", async (req, res) => {
    await oemModel.insertMany(req.body);

    res.send({ "msg": "Product has been added" });

})

module.exports={oemRouter}