let todos =  JSON.parse(localStorage.getItem("todos")) || [];

const todoInput = document .getElementById("todoInput") ;
const todoList = document .getElementById("todoList") ;

function addTodo(){

   todos.push({ text: todoInput.value, completed: false });

   localStorage.setItem("todos", JSON.stringify(todos));

   todoInput.value = "";
   renderTodos();

}

function renderTodos() {
  todoList.innerHTML = "";
    for(let i = 0 ; i < todos.length ; i++) {
         
          let li = document.createElement("li");

          let checkbox = document .createElement("input") ;
          checkbox.type = "checkbox"
          checkbox.checked = todos[i].completed;
          li.appendChild(checkbox);


          let span = document.createElement("span");
          span.textContent = todos[i].text;

          if (todos[i].completed) {
              span.classList.add("done");
            }

          li.appendChild(span);


          let deleteBtn = document.createElement("span");
          deleteBtn.innerHTML = '<i class="fa-regular fa-trash-can"></i>';
          li.appendChild(deleteBtn);

          deleteBtn.addEventListener("click",
             function() {
                todos.splice(i, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
                renderTodos();
         }
        );


        let editBtn = document.createElement("span");
        editBtn.innerHTML = '<i class="fa-regular fa-pen-to-square"></i>';
        li.appendChild(editBtn);   


        editBtn.addEventListener("click", 
            function() {
                let newText = prompt("edite", todos[i].text);
  
            if (newText !== null) {
                todos[i].text = newText;
                localStorage.setItem("todos", JSON.stringify(todos));
                renderTodos();
            }
}

);


          

          todoList.appendChild(li);
          


          checkbox.addEventListener("change", function() 
          {
             todos[i].completed = !todos[i].completed;

             localStorage.setItem("todos", JSON.stringify(todos));
             console.log("چک‌باکس کلیک شد");
             renderTodos();
          }
        );


    }


}

renderTodos();