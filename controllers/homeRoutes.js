
const router = require('express').Router();
const { User, Need, Inventory } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const inventoryData = await Inventory.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const needData = await Need.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const inventory = inventoryData.map((inv) => inv.get({ plain: true }));
    const needs = needData.map((need) => need.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      inventory, 
      needs,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});






module.exports = router;
