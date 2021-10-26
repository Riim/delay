"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delay = void 0;
const interval_1 = require("@riim/interval");
function delay(value, unit) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(undefined);
        }, typeof value == 'string' ? interval_1.interval(value) : unit !== undefined ? interval_1.interval(value, unit) : value);
    });
}
exports.delay = delay;
