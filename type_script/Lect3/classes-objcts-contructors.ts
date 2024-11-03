class Point
{
  x:number;
  y:number;

  constructor(x?: number, y?: number) {   
    this.x = x ?? 0;

    this.y = y ?? 0;  
  }

  draw() {
      console.log('X: ' + this.x + ', Y: ' + this.y);
  } 

  getDistance  ( another:Point)  {
    //...
  }
}

// create point object from Point Class
let point:Point = new Point(1,2);
point.draw();

let point2:Point = new Point();
// point.x = 1;
// point.y = 2;
//point.z = 3;
//....
//...



