"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class HomeController {
    constructor() {
        this.path = '/';
        this.router = express.Router();
        this.index = (_, res) => {
            const users = [
                {
                    id: 1,
                    name: 'Ali'
                },
                {
                    id: 2,
                    name: 'Can'
                },
                {
                    id: 3,
                    name: 'Ahmet'
                }
            ];
            res.render('home/index', { users });
        };
        this.initRoutes();
    }
    initRoutes() {
        this.router.get('/', this.index);
    }
}
exports.default = HomeController;
