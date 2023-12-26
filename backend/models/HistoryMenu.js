const { DataTypes } = require("sequelize");
const sequelizeClient = require("../database/connection");
const Menu = require("./Menu");

const HistoryMenu = sequelizeClient.define(
  "history_menus",
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
    menu_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = HistoryMenu;
