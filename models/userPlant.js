module.exports = function (sequelize, DataTypes) {
    var UserPlant = sequelize.define("UserPlant", {
        plantId: {
            type: DataTypes.INTEGER,
            allowNull: false,

        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },

    },{
        timestamps: false
    }
    );

    UserPlant.associate = function (models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        UserPlant.belongsTo(models.User, { foreignKey: 'userId' });
        UserPlant.belongsTo(models.Plant, { foreignKey: 'plantId' })
    };

    return UserPlant;
};