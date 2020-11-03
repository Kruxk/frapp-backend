const { Router } = require("express");
const item = require("../models/item");
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

router.patch("/used/:id", async (req, res, next) => {
    const id = parseInt(req.params.id)
    const { wasted } = req.body;
    try {
        const itemToUpdate = await Item.update(
            { used: true, wasted },
            { where: { id: id } }
        )
        res.send(itemToUpdate);
    } catch (e) {
        next(e)
    }
})

router.delete("/delete/:id", async (req, res, next) => {
    try {
        const itemToDelete = await Item.destroy({ where: { id: req.params.id } });
        itemToDelete ? res.send("received and destroyed") : res.send("item is already deleted")
    } catch (e) {
        next(e)
    }   
})