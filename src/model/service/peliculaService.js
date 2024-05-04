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
            await db.Peliculas.update(pelicula, {where: {id: id}})
        } catch (error) {
            
        }
    }
}