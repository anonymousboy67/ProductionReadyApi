import express from "express";

import { PORT } from "./config/env";

const app=express();


app.get("/", (req, res)=>{
    res.send("Welcome to the Subscription Tracker api");
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

export default app