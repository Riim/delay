"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const duration_1 = require("@riim/duration");
function delay(value, unit) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined);
        }, typeof value == 'string' ? (0, duration_1.duration)(value) : unit !== undefined ? (0, duration_1.duration)(value, unit) : value);
    });
}
exports.delay = delay;
