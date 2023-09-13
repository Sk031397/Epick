import express from 'express';
import fs from "fs";
import Dota2_Schema from '../models/Dota2_states.js';
const router = express.Router();

router.get("/state", async (req,res)=>{
    const files = fs.readdirSync("./data/dota/dota2")
    for(const file of files){;
        if(file.endsWith('.json')){
            try{
                const data = fs.readFileSync(`./data/dota/dota2/${file}`);
                const document = JSON.parse(data);
                //console.log("START",file);
                res.status(200).json(document);
                Dota2_Schema.insertMany(document);
            }catch(err){
                //console.error(err);
            }
        }
    }
    
})
export default router;