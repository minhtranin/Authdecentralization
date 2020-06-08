"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.listen('5000', () => {
    console.log('connected 5000');
});
