const mongoose= require('mongoose')
const Schema=mongoose.Schema
const employeeSchema=new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
})

const Employee= mongoose.model
