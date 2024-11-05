"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SilverPoint = void 0;
var SilverPoint = /** @class */ (function () {
    function SilverPoint(x, y) {
        this.x = x;
        this.y = y;
    }
    SilverPoint.prototype.draw = function () {
        console.log("X: ".concat(this.x, ", Y: ").concat(this.y));
    };
    return SilverPoint;
}());
exports.SilverPoint = SilverPoint;
