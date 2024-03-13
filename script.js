document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    // Add Tasks Functionality
    document.querySelector("#tasks").innerHTML += `<div class="task"><span>${
      document.querySelector("#newtask input").value
    }</span><button class="delete"><i class="fa-solid fa-trash"></i></button></div>`;

    // Delete Tasks Functionality
    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; i < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }

    // Cross Finished Tasks Functionality
    var tasks = document.querySelectorAll(".task");
    for (var i = 0; i < tasks.length; i++) {
      tasks[i].onclick = function () {
        this.classList.toggle("completed");
      };
    }

    // Clearing Input field after each entry Functionality
    document.querySelector("#newtask input").value = "";
  }
};
