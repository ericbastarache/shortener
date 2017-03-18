let express = require('express');
let router = express.Router();

let shorten_controller = require('../controllers/ShortenController');

router.get('/', shorten_controller.index);
router.get('/urls', shorten_controller.all_urls);
router.post('/urls/create', shorten_controller.create_url);

module.exports = router;
