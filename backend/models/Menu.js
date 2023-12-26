const { DataTypes } = require("sequelize");
const sequelizeClient = require("../database/connection");
const HistoryMenu = require("./HistoryMenu");

const Menu = sequelizeClient.define(
  "menus",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(100),
    },
    message: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

Menu.hasMany(HistoryMenu, { foreignKey: "id" });
HistoryMenu.belongsTo(Menu, { foreignKey: "menu_id" });

module.exports = Menu;
