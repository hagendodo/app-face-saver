const { DataTypes } = require("sequelize");
const sequelizeClient = require("../database/connection");

const Response = sequelizeClient.define(
  "responses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    helper_id: {
      type: DataTypes.INTEGER,
    },
    response_message: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Response;
