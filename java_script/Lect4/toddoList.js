let ul = document.createElement("ul");
document.body.appendChild(ul);
//let i = 1;

document.getElementById("btnAddNew").addEventListener(
              "click", 
              function () {  //anonymous function
                let newTodo = prompt('Enter the text for the new todo item');
                
                //li.textContent = `This is item ${i}`;
                if (newTodo != null ) 
                {
                  let li = document.createElement("li");
                  li.textContent = newTodo ;
                  // li.style.color = " tomato ";
                  // li.style.fontFamily = "Arial";
                  // li.style.fontSize = "24px";
                  li.classList.add("todoItem");
                  
                  li.addEventListener(
                    "click",
                    function () { 
                      li.classList.toggle("greenish");
                    });

                  ul.appendChild(li);
                }         

                //i++;
              }
);
