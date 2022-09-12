// dependencies
const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
    name: { 
        type: String, 
        default: "Others"
    }, 
    type: {
        type: String, 
        default: "Expenses"
    },
    amount: { 
        type: Number
    }
}, { timestamps: true })


const transaction = mongoose.model('Transaction',  TransactionSchema)

module.exports = transaction