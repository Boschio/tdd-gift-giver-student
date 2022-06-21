const express = require("express")
const morgan = require("morgan")
const router = require("./routes/gift-exchange")

const app = express()

morgan('tiny') //app.use?

app.use(express.json())
app.use("/gift-exchange", router)

app.get('/', async (req, res, next) => {
    res.status(200).send({ "ping": "pong" })
})

module.exports = app