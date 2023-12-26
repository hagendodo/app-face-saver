const { Sequelize } = require("sequelize");
const sequelizeClient = new Sequelize("facesaver", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelizeClient;
