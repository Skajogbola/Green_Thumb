module.exports = function (sequelize, DataTypes) {
    var Plant = sequelize.define("Plant", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        sunlight: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        water: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fertilizer: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        careSummary: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },{
        timestamps: false
    }
    );

    Plant.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        Plant.hasMany(models.UserPlant, {
            foreignKey:"UserPlantId"
        });
    };

    return Plant;
};