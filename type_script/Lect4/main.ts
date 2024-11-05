import { SilverPoint } from "./silver-point";
import { LikeComponent } from "./like.component";

let point2 = new SilverPoint(5, 10);

point2.draw();

let component = new LikeComponent(10,true);
//component.likesCount = 10000000;
component.onClick();
console.log(`likesCount: ${component.likesCount}`);