// dependencies
const express = require('express');
const cors = require('cors');
const helmet = require('helmet')
const xss = require('xss-clean')
const compress = require('compression')
const router = require('./app/routes/app.route');
const connect = require('./database/database.service');
const app = express();

// connect to database
connect()

// middlewares
app.use(cors())
app.use(helmet())
app.use(xss())
app.use(compress())
app.use(express.json())

// routes
app.use('/api', router)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}...`);
});
