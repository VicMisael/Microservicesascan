const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const eventSchema=new Schema({
    userId:{type: Number,required: true},
    userName:{type: String,required: true},
    state:{type: String,required:true},
    alterDate:{type:String,required:true}
})