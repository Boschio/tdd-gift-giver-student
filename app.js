const express = require("express")
const morgan = require("morgan")
const router = require("./routes/gift-exchange")
const { ExpressError, BadRequestError, NotFoundError } = require("./utils/errors")


const app = express()

morgan('tiny')

app.use(express.json())
app.use("/gift-exchange", router)

app.get('/', async (req, res, next) => {
    res.status(200).send({ "ping": "pong" })
})

// handle errors

app.use((req, res, next) => {
    return next(new NotFoundError())
})


app.use(async (error, req, res, next) => {
    const status = error.status || 500
    const message = error.message || "Something wen't wrong in the application"

    return res.status(status).json({error: { message, status}})
})



module.exports = app