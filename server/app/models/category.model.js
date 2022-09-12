// dependencies
const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    type: {
        type: String,
        required: true, 
        default: "Expenses"
    },
    color:  { 
        type: String,
        default: "#FCBE44"
    }
}, { timestamps: true })


const category = mongoose.model('Category', CategorySchema)

module.exports = category