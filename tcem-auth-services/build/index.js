"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const bodyParser = require("body-parser");
const logger_1 = require("./src/middlewares/logger");
const home_controller_1 = require("./src/controllers/home.controller");
const app = new app_1.default({
    port: 5000,
    controllers: [
        new home_controller_1.default(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        logger_1.default
    ]
});
app.listen();
