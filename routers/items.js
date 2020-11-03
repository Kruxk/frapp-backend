const { Router } = require("express")
const Item = require("../models").item

const router = new Router();

router.get("/", async (req, res, next) => {
    const { userId } = req.body
    try {
        const items = await Item.findAll({ where: {userId} })
        res.send(items);
    } catch (e) {
        next(e);
    }
})

router.post("/new", async (req, res, next) => {
    const { name, quantity, expirationDate, location, userId } = req.body
    try {
        const newItem = await Item.create({ name, quantity, expirationDate, location, userId })
        res.send(newItem)
    } catch (e) {
        next(e)
    }
})