module.exports = (sequelize, DataTypes)=>{
    
    let alias = 'Actores';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        first_name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: DataTypes.DECIMAL
        },
        favorite_movie_id: {
            type: DataTypes.INTEGER
        }
    };

    let config = {
        tableName: 'actors',
        timestamps: false
    };

    let Actor = sequelize.define(alias, cols, config);

    Actor.associate = function(models) {
        Actor.belongsToMany(models.Peliculas, {
            as: "peliculas",
            through: "actor_movie",
            foreignKey: "actor_id",
            otherKey: "movie_id",
            timestamps: false
        }); 
    }

    return Actor;
}