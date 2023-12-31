import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from "morgan";
import csgoRoutes from "./routes/csgo.js";
import dotaRoutes from "./routes/dota.js"
/* CONFIGURATION */
dotenv.config()
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}));
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());


/* ROUTING */
app.use("/csgo",csgoRoutes);
app.use("/dota",dotaRoutes);
/* MONGOOSE */
const PORT = process.env.PORT || 9000;
mongoose.
    connect(process.env.MONGO_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(async () =>{
        app.listen(PORT);
        await mongoose.connection.db.dropDatabase();
        
    })
    .catch((err) => console.log(`${err} did not connect`));