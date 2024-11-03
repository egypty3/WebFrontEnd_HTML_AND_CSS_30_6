class Point
{
  private x:number;
  private y:number;

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

let point3 = new Point(1,7);

// point3.x = 17;
// point3.y = 20;
point3.draw();