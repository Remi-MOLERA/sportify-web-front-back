const express = require('express');
const { initializeConfigMiddlewares, initializeErrorMiddlwares } = require('./middlewares');
const {sequelize} = require("../database/sqlite.db");

const userRoutes = require("../controllers/user.routes")
const loginRoutes = require("../controllers/login.routes")

class WebServer {
  app = undefined;
  port = 3000
  server = undefined;

  constructor() {
    this.app = express();
    initializeConfigMiddlewares(this.app);
    this._initializeRoutes();
    initializeErrorMiddlwares(this.app);
    sequelize.sync();
  }

  start() {
    this.server = this.app.listen(this.port, () => {
      console.log(`app listening on port ${this.port}`);
    });
  }

  stop() {
    this.server.close();
  }

  _initializeRoutes() {
    this.app.use("/users", userRoutes.initializeRoutes())
    this.app.use("/login", loginRoutes.initializeRoutes())
  }
}

module.exports = WebServer;
