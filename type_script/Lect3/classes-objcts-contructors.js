var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x !== null && x !== void 0 ? x : 0;
        this.y = y !== null && y !== void 0 ? y : 0;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
// create point object from Point Class
var point = new Point(1, 2);
point.draw();
var point2 = new Point();
// point.x = 1;
// point.y = 2;
//point.z = 3;
//....
//...
