const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()
const app = express()
app.use(cors())
app.use(express.json())



const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => console.log('Mongodb database connection extablished successfully'));







PORT = 4445
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})