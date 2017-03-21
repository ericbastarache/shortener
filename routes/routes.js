let express = require('express');
let router = express.Router();

let shorten_controller = require('../controllers/ShortenController');

router.get('/:url_id', shorten_controller.get_id);
router.post('/urls/create', shorten_controller.create_url);

module.exports = router;
