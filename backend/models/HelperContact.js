const { DataTypes } = require("sequelize");
const sequelizeClient = require("../database/connection");

const HelperContact = sequelizeClient.define(
  "helper_contacts",
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
    contact: {
      type: DataTypes.STRING(20),
    },
    type: {
      type: DataTypes.STRING(20),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = HelperContact;
