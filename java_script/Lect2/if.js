function showQuestion1(){

  let day = prompt(
    'ما اليوم الذي بدأت فيه حرب 6 أكتوبر ؟'
  );

  if (day > 6)
  {
    alert('اليوم متأخر شوية');
  }
  else if (day < 6)
  {
    alert('اليوم بدري شوية');
  }
  else
  {
    alert('صحيح');
  }

  //Ternary operator (also known as shorthand if-else)  
  //Conditional operator ‘?’
  //(condition)? 'result if true':'result if false';
  // alert( 
  //   (day == 6)? 'صحيح' : 'غلط وانت مش مركز'
  // );

}