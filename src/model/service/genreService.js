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
    }
}