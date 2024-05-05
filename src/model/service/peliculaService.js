const { Association } = require("sequelize");
let db = require("../db/models")

module.exports = {
    getAll: function() {
        return new Promise((resolve, reject) => { 
            db.Peliculas.findAll()
            .then(peliculas => {
                resolve(peliculas)
            })
            .catch(err => reject([]));
        })
    },

    getBy: async function(id) {
        try {
            return await db.Peliculas.findByPk(id);
        } catch (error) {
            console.log(error);
            return {
                id: 0,
                title: "no encontrado",
                rating: 0,
                awards: 0,
                length: 0,
                release_date: ""
            }
        }
    },

    updateBy: async function(body, id){
        try {
            let pelicula = new Pelicula(body);
            return await db.Peliculas.update(pelicula, {where: {id: id}})
        } catch (error) {
            console.log(error);
            throw new Error("Un error");
        }
    },

    createNew: async function (body){
        try {
            let createdMovie = await db.Peliculas.create({
                title: body.title,
                rating: body.rating,
                awards: body.awards,
                release_date: body.release_date,
                length:body.length,
                genre_id: body.genre_id
            })
            return createdMovie.dataValues;       
            }
        catch (error) {
            console.log(error);
            throw new Error("Un error");
            
        }
    },

    destroyMovie: async function (id){
        try {

            await db.ActorMovie.destroy(
                {
                    where: {movie_id: id}
                }
            );

            await db.Actores.destroy({
                where: { favorite_movie_id: id }
            });
            
            await db.Peliculas.destroy(
                {
                    where: {id: id}
                }
            );

            return 'Película eliminada con éxito';

        } catch (error) {
            console.log(error);
            return res.send('Pelicula eliminada con éxito')
        }
    }
}

function Pelicula({title, rating, awards, release_date, length, genre_id}){
    this.title = title;
    this.rating = rating;
    this.awards = awards;
    this.release_date = release_date;
    this.length = length;
    this.genre_id = genre_id;
}