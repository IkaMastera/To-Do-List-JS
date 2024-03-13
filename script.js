document.querySelector("#push").onclick = function () {
  if (document.querySelector("#newtask input").value.length == 0) {
    alert("Please Enter a Task");
  } else {
    document.querySelector("#tasks").innerHTML += `<div class="task"><span>${
      document.querySelector("#newtask input").value
    }</span><button class="delete"><i class="fa-solid fa-trash"></i></button></div>`;

    var current_tasks = document.querySelectorAll(".delete");
    for (var i = 0; 1 < current_tasks.length; i++) {
      current_tasks[i].onclick = function () {
        this.parentNode.remove();
      };
    }
  }
};
