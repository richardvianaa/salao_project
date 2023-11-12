var express  = require('express');
var router = express.Router();

const serviceController = require('../controllers/serviceControllers');

router.get("/servicos", serviceController.index);

router.post('/novo-servico', serviceController.create);

module.exports = router;