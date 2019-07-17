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

    UserPlant.associate = function (models) {

        UserPlant.belongsTo(models.User, {
        
        });
      };
    

    return UserPlant;
};
