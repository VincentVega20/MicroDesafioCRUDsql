const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController');

/* -- lista de peliculas --*/
router.get('/movies', moviesController.list);

/* -- creacion --*/
router.get('/movies/add', moviesController.new);
router.post('/movies/', moviesController.newMovie);

/* -- edicion de pelicula --*/
router.get('/movies/edit/:id', moviesController.edit);
router.put('/movies/:id', moviesController.update);

/* --Detalle de Producto--*/
router.get('/movies/:id', moviesController.getOne)

/* ---- DELETE ---- */
router.delete('/movies/:id', moviesController.delete)


//router.get('/movies/recommended', moviesController.recomended);


module.exports = router;