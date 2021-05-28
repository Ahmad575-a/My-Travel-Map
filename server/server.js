const express = require('express')
const mongoose = require('mongoose')
const app = express()
const pinRoute =require('./routes/pins')
const usersRoute = require('./routes/users')
const cors = require('cors')
// dotenv config
require('dotenv').config()

// mongoose config
const DB_NAME = process.env.DB_NAME

const DB_LINK = process.env.MONGO_LINK + DB_NAME
mongoose.connect(DB_LINK, {
    // hide the warnings in  the console because the default is false
    useUnifiedTopology : true,
    useNewUrlParser: true
})
.then(()=> console.log('MongoDB database is Successfully connected'))
.catch(()=> console.log('Database connection failed!'))

app.use(cors());

// Routes
app.use('/pins',pinRoute)
app.use('/users',usersRoute)


app.listen(5000,()=> console.log('server is running ...'))