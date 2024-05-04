const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

router.get('/movies', moviesController.list);

router.get('/movies/add', moviesController.new);

//router.get('/movies/recommended', moviesController.recomended);
router.get('/movies/edit/:id', moviesController.edit);
router.post('/movies/:id', moviesController.update);
router.get('/movies/:id', moviesController.getOne)

module.exports = router;