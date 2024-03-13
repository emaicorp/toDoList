// window.addEventListener("DOMContentLoaded", () => {
//     const taskName = document.getElementById("name");
//     const taskDescription = document.getElementById("description");
//     const button = document.getElementById("submit");
//     const lists = document.getElementById("lists");
//     const taskArray = [];

//     button.addEventListener("click", () => {
//         if (taskName.value === "" || taskDescription.value === "") {
//             alert("Fill Both Forms !!");
//             return;
//         }

//         const task = {
//             nameOfTask: taskName.value,
//             taskDescription: taskDescription.value
//         };

//         taskArray.push(task);
//         taskName.value = "";
//         taskDescription.value = "";

//         renderTasks();
//     });

//     function renderTasks() {
//         lists.innerHTML = ""; // Clear the existing list items before rendering the updated list

//         taskArray.forEach((task, index) => {
//             const itemDiv = document.createElement("div");
//             const li = document.createElement("li");
//             const check = document.createElement("input");
//             check.setAttribute("type", "checkbox");
//             const deleteBtn = document.createElement("button");
//             const editBtn = document.createElement("button");

//             editBtn.className = "edit";
//             editBtn.textContent = "Edit";
//             deleteBtn.textContent = "Delete";
//             deleteBtn.className = "delete";

//             itemDiv.className = "item";
//             li.innerHTML = `${task.nameOfTask}`;

//             lists.appendChild(itemDiv);
//             itemDiv.appendChild(check);
//             itemDiv.appendChild(li);
//             itemDiv.appendChild(editBtn);
//             itemDiv.appendChild(deleteBtn);

//             deleteBtn.addEventListener("click", () => {
//                 taskArray.splice(index, 1);
//                 renderTasks();
//             });

//             editBtn.addEventListener("click", () => {
//                 taskName.value = task.nameOfTask;
//                 taskDescription.value = task.taskDescription;

//                 button.value = "Update";

//                 button.onclick = function updateTask() {
//                     taskArray[index].nameOfTask = taskName.value;
//                     taskArray[index].taskDescription = taskDescription.value;

//                     renderTasks();

//                     button.value = "Submit";
//                     button.onclick = null; // Reset the onclick handler
//                 };
//             });
//         });
//         console.log(taskArray)
//     }
// });



// const student = {};
// //const studentData = new Object();

// student['name'] = 'Chika';
// student.age = 34;
// student['department'] = 'Computer Engineering';
// console.log('The name of the student is ' + student.name);
// console.log(`The age of the student is ${student.age} \n the department is ${student.department}`);
// console.log(student);

//New line
window.addEventListener("DOMContentLoaded", (event) => {
    const taskName = document.getElementById("name");
    const taskDescription = document.getElementById("description");
    const button = document.getElementById("submit");
    const listContainer = document.getElementById("lists");
  
    const taskArray = [{nameOfTask:"hllo ", taskDescription: "chimoo"}, {nameOfTask:"helo" , taskDescription: "chim"},{nameOfTask:"hel" , taskDescription: "chimo"}, ];
  
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
          button.value = "Submit";
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
    });
  });