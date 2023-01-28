var express = require('express');
var router = express.Router();
const { getTableData } = require('../controllers/tableData')

router.get("/protfolioData", getTableData);

module.exports = router;