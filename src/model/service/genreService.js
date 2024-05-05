const { Association } = require("sequelize");
let db = require("../db/models")

module.exports = {
    getAll: function() {
        return new Promise((resolve, reject) => { 
            db.Generos.findAll()
            .then(genres => {
                resolve(genres)
            })
            .catch(err => reject([]));
        })
    },

    getBy: async function(id) {
        try {
            return await db.Generos.findByPk(id);
        } catch (error) {
            console.log(error);
            }
        }
}