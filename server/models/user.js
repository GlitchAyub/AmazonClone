const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        required : true,
        type : String,
        trim :  true,
    },
    email : {
        required : true,
        type:String,
        trim : true,
        validate : {
            validator:(value)=>{
                const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                return value.match(regex);
            },
            message:"please enter a valid email address"
        }
    },
    password:{
        required:true,
        type:String,
        validate:(value)=>{
            return value.length > 6 
        },
        message:"please enter more than letter in password"
    },
    address:{
        type:String,
        default:''
    },
    type:{
        type:String,
        default : 'user',
    }
})

const User = mongoose.model('User',userSchema);

module.exports = User;