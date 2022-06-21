const express = require("express")
const router = express.Router()

router.post('/:pairs', async (req, res, next) => {
    console.log(req.params)
    res.status(200).json(req.params)
})

router.post('/:traditional', async (req, res, next) => {
    console.log(req.params)
    res.status(200).json(req.params)
})

module.exports = router