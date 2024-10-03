let restultDiv = document.getElementById("result");

function printNumbersFrom1_12() {
  restultDiv.innerHTML = "";

  for (let i = 1; i <= 12; i++) {
    restultDiv.innerHTML += i + "<br/>";
    //console.log(restultDiv.innerHTML);
  }
}

function showDateSelector() {
  let newContent = "";

  newContent += " <label>Day :</label> ";

  newContent += " <select>";

  for (let i = 1; i <= 31; i++) {
    newContent += "<option>" + i + "</option> ";
  }

  newContent += "</select>";

  newContent += " <label>Month :</label> ";

  newContent += " <select>";

  for (let i = 1; i <= 12; i++) {
    newContent += "<option>" + i + "</option>";
  }

  newContent += "</select>";

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  //console.log(currentYear);
  let endYear = currentYear - 7;

  newContent += " <label>Year :</label> ";

  newContent += " <select>";
  
  for (let i = 1975; i <= endYear; i++) {
    newContent += "<option>" + i + "</option>";
  }

  newContent += "</select><br/><br/>";
  restultDiv.innerHTML = newContent;
}
