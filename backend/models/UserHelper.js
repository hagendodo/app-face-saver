const { DataTypes } = require("sequelize");
const sequelizeClient = require("../database/connection");

const UserHelper = sequelizeClient.define(
  "user_helpers",
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
    helper_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = UserHelper;
