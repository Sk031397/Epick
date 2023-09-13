import express from 'express';
import fs from "fs";
import CSGOKPI_states from "../models/CSGO_states.js";
const router = express.Router();

router.get("/state", async (req,res)=>{
    const files = fs.readdirSync("./data/CSGO")
    for(const file of files){
        if(file.endsWith('.json')){
            try{
                const data = fs.readFileSync(`./data/CSGO/${file}`);
                const document = JSON.parse(data);
               // console.log("START",file);
                res.status(200).json(document);
                CSGOKPI_states.insertMany(document);
            }catch(err){
                //console.error(err);
            }
        }
    }
})
router.get("/events", async (req,res)=>{
    const files = fs.readdirSync("./data/CSGO")
    for(const file of files){
        if(file.endsWith('.jsonl')){
            try{
                const data = fs.readFileSync(`./data/CSGO/${file}`);
                const document = JSON.parse(data);
               // console.log("START",file);
                res.status(200).json({message:"OK"});
                CSGOKPI.insertMany(document);
            }catch(err){
                console.error(err);
            }
        }
    }
})
export default router;