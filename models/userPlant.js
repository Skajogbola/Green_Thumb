module.exports = function (sequelize, DataTypes) {
    var UserPlant = sequelize.define("UserPlant", {
        // plantId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,

        // },
        // userId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },

    },{
        timestamps: false
    }
    );



    return UserPlant;
};