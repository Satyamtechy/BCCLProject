const express = require("express");
const router = express.Router();
require("../db/connection");
const Input = require("../model/inputSchema");


router.post("/userinput", async (req, res) => {
    const{StoreName,SerialNumber,MaterialNumber,MaterialDesc,OpeningBalance,RecievedQuantity,IssueQuantity,BalanceQuantity,Day_and_Date}=req.body;
    if (!StoreName||!SerialNumber||!MaterialNumber||!MaterialDesc||!OpeningBalance||!RecievedQuantity||!IssueQuantity||!BalanceQuantity||!Day_and_Date) {
        return res.status(422).json({ error: "Please fill the field properly" });
    }
    try{
        const input = new Input({
            StoreName,
            SerialNumber,
            MaterialNumber,
            MaterialDesc,
            OpeningBalance,
            RecievedQuantity,
            IssueQuantity,
            BalanceQuantity,
            Day_and_Date
          });

         await input.save();
         res.status(201).json({ message: "user registered succesfully" });
    }
    catch(err){
        console.log(err);
    }

  });
  module.exports = router;