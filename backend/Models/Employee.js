const mongoose = require('mongoose');
const schema = mongoose.Schema;

const employees = new schema({
    name:{
        type:String,
        unique:true,
        default:"Babuja"
    },
    dateOfBirth:{
        type:Date,
        default:null
    },
    gender:{
        type:String,
        default:"Female",
    },
    salary:{
        type:Number,
        default:12000,
    }
});

module.exports={
    Employee:mongoose.model("Employee",employees),

}
