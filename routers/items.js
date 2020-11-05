const { Router } = require("express");
const Item = require("../models").Item;
const User = require("../models").User;

const router = new Router();

router.get("/:id", async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findByPk(userId);
  if (!user) {
    res.status(404).send(`User with id ${userId} doesn't exist`);
    next();
  } else {
    try {
      const items = await Item.findAll({ where: { userId } });
      res.send(items);
    } catch (e) {
      next(e);
    }
  }
});

router.post("/:id", async (req, res, next) => {
  const userId = req.params.id;
  const { name, quantity, expirationDate, location } = req.body;

  const user = await User.findByPk(userId);
  if (!name || !quantity || !expirationDate || !location || !userId || !user) {
    if (!user) {
      res.status(404).send(`User with id ${userId} doesn't exist`);
    } else {
      res
        .status(412)
        .send("Plz supply valid json with the proper fields to create an Item");
    }
    next();
  } else {
    try {
      const newItem = await Item.create({
        name,
        quantity,
        expirationDate,
        location,
        userId,
      });
      res.send(newItem);
    } catch (e) {
      next(e);
    }
  }
});

router.patch("/:id", async (req, res, next) => {
  const userId = req.params.id;
  const { wasted, id } = req.body;
  const user = await User.findByPk(userId);
  if (!user) {
    res.status(404).send(`User with id ${userId} doesn't exist`);
    next();
  } else {
    try {
      const itemToUpdate = await Item.findByPk(id);
      itemToUpdate.update({ used: true, wasted });
      res.send(itemToUpdate);
    } catch (e) {
      next(e);
    }
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const itemToDelete = await Item.destroy({ where: { id: req.params.id } });
    itemToDelete
      ? res.send("received and destroyed")
      : res.send("item is already deleted");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
