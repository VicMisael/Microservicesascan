const express = require("express");
const mongoose = require("mongoose");
const Event=require('./models/event.model.js')
const consume=require('./consumers/event.consumer.js')


const app = express();

app.use(express.json());

mongoose.connect('mongodb://event_service:Y585wKkKZp95xrwq@localhost:27018')

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

app.get('/all',async (req,res)=>{
    try{
    const data=await Event.find();
    res.json(data)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

consume()