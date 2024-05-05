module.exports = (sequelize, DataTypes)=>{
    
    let alias = 'ActorMovie';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        actor_id:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        movie_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: 'actor_movie',
        timestamps: false
    };

    let ActorMovie = sequelize.define(alias, cols, config);


    return ActorMovie;
}