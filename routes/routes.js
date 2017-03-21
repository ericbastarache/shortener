let express = require('express');
let router = express.Router();

let shorten_controller = require('../controllers/ShortenController');

router.get('/:url_id', shorten_controller.by_id);
router.get('/urls', shorten_controller.all_urls);
router.post('/urls/create', shorten_controller.create_url);

module.exports = router;
