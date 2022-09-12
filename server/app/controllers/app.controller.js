const Category = require('../models/category.model')
const Transaction = require('../models/transaction.model')

const controller = {
    getCategories: async (req, res) => { 
        try {
            const categories = await Category.find({}).limit(100)
            return res.status(200).json(categories)
        } catch (error) {
            return res.status(400).json({ 
                error: error.message
            })
        }
    },
    createCategory: async (req, res) => {
        if (!req.body) return res.status(404).json({
            message: "The type and color fields are required!"
        })

        const { type, color } = req.body
        
        const category = new Category({ 
            type: type, 
            color: color
        })

        try {
            await category.save()
            return res.status(201).json(category)
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }

    },
    getTransactions: async (req, res) => { 
        try {
            const transactions = await Transaction.find({}).limit(100)
            return res.status(200).json(transactions)
        } catch (error) {
            return res.status(400).json({ 
                error: error.message
            })
        }
    },
    createTransaction: async(req, res) => {
        if (!req.body) return res.status(404).json({
            message: "The name, type and amount fields are required!"
        })

        const { name, type, amount} = req.body
        
        const transaction = new Transaction({
            name: name,
            type: type,
            amount: amount
        })

        try {
            await transaction.save()
            return res.status(201).json(transaction)
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }
    },
    deleteTransaction: async (req, res) => {
        let id = req.params.id

        if(!id) return res.status(404).json({
            message: 'The id of the transaction is required!'
        })

        try {
            const transaction = await Transaction.findById(id)
            await transaction.delete()
            return res.status(200).json({
                message: 'The transaction was successfully deleted!'
            })
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }
    },
    getLabels: async(req, res) => {
        try {
            let aggregrate = await Transaction.aggregate([
                {
                    $lookup: {
                        from: "categories",
                        localField: 'type',
                        foreignField: "type",
                        as: "categories_info"
                    }
                }
            ])

            const filter = aggregrate.map(
                value => Object.assign(
                    {},
                    {
                        _id: value._id,
                        name: value.name,
                        type: value.type,
                        amount: value.amount,
                        color: value.categories_info[0].color
                    },
                ) 
            )
            return res.status(200).json(filter)
        } catch (error) {
            return res.status(400).json({
                error: error.message
            })
        }
    }
}

module.exports = controller