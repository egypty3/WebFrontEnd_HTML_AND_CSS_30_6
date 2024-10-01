function changeBodyStyle(){
 // var desiredBackgroundColor = prompt('enter your desired background color');
 var desiredBackgroundColor = document.getElementById("desiredBackground").value;

  document.getElementById("secondP").innerText = 
      // `The new background color is : ${desiredBackgroundColor}`;
      'The new background color is : ' + desiredBackgroundColor ;

  document.body.style.background = desiredBackgroundColor; ;
  document.body.style.fontSize = '32px';
  document.body.style.color = 'white' ;
}