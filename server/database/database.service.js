// dependencies
const mongoose = require('mongoose')
const { env } = require('process')

const connect = async () => { 
    await mongoose.connect(env.MONGO_URI || "mongodb://localhost:27017/wallet_tracker_server" )
        .then(() => { 
            console.log('Database connection successful...')
        }).catch((e) => { 
            console.log(`Database connection unsuccessful: ${e.message}...`)
        })
}

module.exports = connect