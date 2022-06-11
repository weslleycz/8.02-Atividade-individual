const express = require("express");
const controller = require("../controllers")

const router = express.Router();

router.get('/',controller.home);

router.get('/new-entry',controller.newEntry);

router.get('/new-entry-fetch',controller.newEntryFetch);

router.post('/new-entry',controller.postNewEntry);

module.exports ={router};