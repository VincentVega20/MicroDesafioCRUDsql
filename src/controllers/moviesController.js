const peliculaService = require("../model/service/peliculaService");
const genreService = require("../model/service/genreService");

module.exports = {
    list:  function(req, res) { 
        peliculaService.getAll()
        .then((peliculas)=>{
            res.render('moviesList', {movies: peliculas})
        })
        .catch((error)=>{ 
            res.render('moviesList', {movies: error})
        })
    },

    edit: async function(req, res) {
        try {
            let pelicula = await peliculaService.getBy(req.params.id);
            let generos = await genreService.getAll(); 
            res.render("editMovie", {pelicula: pelicula, generos: generos})
        } catch (error) {
            res.send("Error al recuperar la peli")            
        }
    },

    getOne: async function(req, res) {
        try {
            let pelicula = await peliculaService.getBy(req.params.id);
            let generos = await genreService.getAll()
            res.render("moviesDetail", {movie: pelicula, generos: generos})
        } catch (error) {
            res.send("Error al recuperar la peli")            
        }
    },

    update: async function (req, res) {
        try {
            await peliculaService.updateBy(req.body, req.params.id)
            res.redirect("/movies/" + req.params.id)
        } catch (error) {
            res.send("no se pudo editar")
        }
    },

    new: async function (req, res) {
        try {
            let generos = await genreService.getAll()
            res.render("createMovie", {generos: generos})
        } catch (error) {
            res.send("ha ocurrido un error")
        }
    },

    newMovie: async function (req,res){
        try {
            let newCreatedMovie = await peliculaService.createNew(req.body);
            res.redirect("/movies/" + newCreatedMovie.id);
        } catch (error) {
            res.send("No se pudo crear!!");
        }
    }, 

    delete: async function (req,res){
        try {
            await peliculaService.destroyMovie(req.params.id);
            res.redirect('/movies')
        } catch (error) {
            res.send ('No se pudo eliminar')
        }
    }
}
