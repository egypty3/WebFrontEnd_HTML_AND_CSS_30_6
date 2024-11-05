var GoldenPoint = /** @class */ (function () {
    function GoldenPoint(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    GoldenPoint.prototype.draw = function () {
        console.log("X: ".concat(this._x, ", Y: ").concat(this._y));
    };
    Object.defineProperty(GoldenPoint.prototype, "x", {
        // property
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value == undefined || value < 0) {
                throw new Error("X coordinate must be positive");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    return GoldenPoint;
}());
var point1 = new GoldenPoint(1, 2);
point1.draw();
//point1.setX(-10);
point1.x = 10;
//console.log(point1.getX());
console.log(point1.x);
