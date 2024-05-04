module.exports = (sequelize, DataTypes)=>{
    
    let alias = 'Generos';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    };

    let config = {
        tableName: 'genres',
        timestamps: false
    };

    let Genero = sequelize.define(alias, cols, config);

    Genero.associate = function(models) {
        Genero.hasMany(models.Peliculas, {
            as: "peliculas",
            foreignKey: "genre_id"
        }); 
    }

    return Genero;
}