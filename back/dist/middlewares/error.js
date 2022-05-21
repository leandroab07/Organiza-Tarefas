"use strict";
exports.__esModule = true;
var error = function (err, req, res, next) {
    console.error(err);
    res.status(500).end();
};
exports["default"] = error;
