window.addEventListener("DOMContentLoaded", (event) => {
    const taskName = document.getElementById("name");
    const taskDescription = document.getElementById("description");
    const button = document.getElementById("submit");
    const listContainer = document.getElementById("lists");
  
    const taskArray = [];
  
    const addTodo = () => {
      if (taskName.value === "" || taskDescription.value === "") {
        alert("Please fill this form!");
        return;
      }
      const newTask = {
        nameOfTask: taskName.value,
        taskDescription: taskDescription.value,
      };
  
      taskArray.push(newTask);
      taskName.value = "";
      taskDescription.value = "";
      return
    }
  
    const displayTodo = () => {
      listContainer.innerHTML = ''
      const li = document.createElement("li");
      for (let index = 0; index < taskArray.length; index++) {
        const itemDiv = document.createElement("div");
        const li = document.createElement("li");
        const check = document.createElement("input");
        check.setAttribute("type","checkbox")
        itemDiv.setAttribute("class", "item");
        li.setAttribute("class", "todo-item");
        const deleteBtn = document.createElement("button");
        const editBtn = document.createElement("button");
        editBtn.className = "edit";
        editBtn.textContent = "Edit";
        deleteBtn.textContent = "delete";
        deleteBtn.className = "delete";
        itemDiv.className = "item";
        li.textContent = taskArray[index].nameOfTask;
        listContainer.appendChild(itemDiv);
        itemDiv.appendChild(check);
        itemDiv.appendChild(li);
        itemDiv.appendChild(editBtn);
        itemDiv.appendChild(deleteBtn);
        listContainer.appendChild(itemDiv);

        deleteBtn.addEventListener("click", () => {
          taskArray.splice(index, 1);
          displayTodo();
      });
      check.addEventListener("click", ()=>{

        if(check.checked){
          li.classList.add("done");
          editBtn.disabled = true;
        }else{
          li.classList.remove("done");
          editBtn.disabled = false;

        }
      })

      editBtn.addEventListener("click", () => {
        taskName.value = taskArray[index].nameOfTask.trim();
        taskDescription.value = taskArray[index].taskDescription.trim();
        button.value = "Update";
      
    
        button.onclick = function() {
    
          const updatedTask = {
              nameOfTask: taskName.value,
              taskDescription: taskDescription.value,
          };
          
          // Replace the task at the specified index with the updated task
          taskArray.splice(index, 1, updatedTask);
      
          displayTodo();
          taskName.value = "";
          taskDescription.value = "";
          button.value = "Add Task";
          button.onclick = null; // Reset the onclick handler
         
      };
    });
      }
    }
  
    button.addEventListener("click", () => {
      if(button.value == "Add Task"){

        addTodo()
        displayTodo()
      }
      // else{
      //   addTodo()
      //   displayTodo()
      // }
    });
  });