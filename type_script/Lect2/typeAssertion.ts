let message ;
message =  'abc';
//Type assertion way 1
let endsWithC = (<string> message).endsWith('c');

//Type assertion way 2
let alternateWay = (message as string).endsWith('c');