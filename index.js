"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function uniqueid(w) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var count = 5;
    if (w && !isNaN(parseFloat(w)) && isFinite(w))
        count = w;
    for (var i = 0; i < count; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}
exports.uniqueid = uniqueid;
