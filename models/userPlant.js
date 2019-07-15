module.exports = function (sequelize, DataTypes) {
    var UserPlant = sequelize.define("UserPlant", {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        plantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    Post.associate = function (models) {
        // We're saying that a UserPlant should belong to a User and a Plant
        // A UsePlant can't be created without a User and a Plant due to the foreign key constraint
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    Post.associate = function (models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Post.belongsTo(models.Plant, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return UserPlant;
};
