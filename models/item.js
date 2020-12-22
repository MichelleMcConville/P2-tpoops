
module.exports = function(sequelize, DataTypes) {
    const Item = sequelize.define('Item', {
        store: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        zipcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })
    return Item;
};
