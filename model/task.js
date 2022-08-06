const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    media:{
        type:String,
    },
    targetDate:{
        type: Date,
        required: true 
    },
    status:{
    type: String,
    enum: ["Todo", "In-Progress", "Done"],
    default: "Todo",
    }
},{
    timestamps:true
})



const Task = new mongoose.model('Task', taskSchema)

module.exports= Task