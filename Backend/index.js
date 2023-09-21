const express = require("express");
const cors = require("cors")
const {connection}= require("./Config/db")
const { userRouter } = require("./Routes/User.Route");
const { oemRouter } = require("./Routes/Oem.Route");
const { MarketPlaceRouter } = require("./Routes/Marketplace_Inventory.Route");
require("dotenv").config()


const app = express()

app.use(express.json())
app.use(cors())
app.use("/user", userRouter);
app.use("/oem",oemRouter)
app.use("/marketplace",MarketPlaceRouter)


app.listen(process.env.PORT, async () => {
      await connection;

    console.log("Server is running");
  });