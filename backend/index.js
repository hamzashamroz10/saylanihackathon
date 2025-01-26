// index.js

import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';
import DbConnecting from './Db/Dbconnecting/Dbconnecting.js';
import { AuthRoute } from './AuthRoutes/AuthRoutes.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use('/api/auth', AuthRoute)

const PORT = process.env.PORT || 4000;

app.get('/', (req, res)=>{
    res.send("welcome to backend of final hackathon");
})

DbConnecting();

app.listen(PORT, ()=>{
    console.log("Final Hackathon Backend Running");
})