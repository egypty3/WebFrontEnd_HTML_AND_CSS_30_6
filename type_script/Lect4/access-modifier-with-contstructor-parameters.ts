class GoldenPoint {

  constructor(private _x?: number,private _y?: number) { 
  }

  draw() {
    console.log(`X: ${this._x}, Y: ${this._y}`);
  }
  
  // property
  get x() {
    return this._x;
  }

  set x(value)
  {
    if ( value == undefined || value < 0) {
      throw new Error("X coordinate must be positive");
    }
    this._x = value;
  }
}

let point1 = new GoldenPoint(1, 2);

point1.draw();

//point1.setX(-10);
point1.x = 10;
//console.log(point1.getX());
console.log(point1.x);