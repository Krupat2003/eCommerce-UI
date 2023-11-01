const express = require("express");

const router = express.Router();

const categoryValidations = require("../Validations/categoryValidations");

const Category = require("../controllers/Categorys");

const Authorization = require("../services/Authorization")

// middelware = categoryValidations,  Authorization.authorization 
router.post('/create-category', [categoryValidations, Authorization.authorized], Category.create);

router.get("/categories/:page",Authorization.authorized, Category.categories);

router.get('/fetch-category/:id', Authorization.authorized, Category.fetchCategory)

module.exports = router;
