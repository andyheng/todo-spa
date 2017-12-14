//Check if list is empty; if so, show the h3 "default" element.
function checkIfEmpty() {
  const list = document.querySelector(".list");
  if (list.childElementCount === 0) {
    document.querySelector(".default").classList.toggle("hidden");
  }
}

//GET request: get all items in the database
axios.get("/api/todos")
  .then(res => {
    checkIfEmpty();
    createAllToDos(res.data);
  })
  .catch(err => {
    console.log(err);
  })

//POST request: add a new item to the database
const input = document.querySelector("#task");
input.addEventListener("keyup", function (e) {
  if (e.keyCode === 13) {
    axios.post("/api/todos", {
      todoName: this.value
    })
      .then(res => {
        checkIfEmpty();
        console.log(res.data);
        addToDo(res.data);
        this.value = "";
      })
  }
})

// Create a single todo list element, and append it to the list
function addToDo(item) {
  const list = document.querySelector(".list");
  let el = document.createElement("li");
  el.innerHTML = `${item.todoName} <span class="delete">X</span>`;
  el.setAttribute("data-id", item._id);
  el.setAttribute("data-completed", item.completed);
  if (item.completed) {
    el.classList.add("complete")
  }
  list.appendChild(el);
}

// For the main GET all items, we want to run a forEach function that creates a list item for all items in the database
// Takes res.data above as the argument
function createAllToDos(todos) {
  todos.forEach(todo => {
    addToDo(todo);
  })
}

//Delete and Edit Events
const list = document.querySelector(".list");
list.addEventListener("click", function (e) {
  const clickedEl = e.target;
  editCall(clickedEl);
  deleteCall(clickedEl);
})

//Delete call
function deleteCall(el) {
  if (el.matches("span")) {
    const parentEl = el.parentNode; // Selects the parent of the delete span, which should be the li
    const url = `/api/todos/${parentEl.dataset.id}`;
    axios.delete(url)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    parentEl.parentNode.removeChild(parentEl); // Selects the li's parent, the ul, and then removes the selected li
    checkIfEmpty();
  }
}

//Edit - Same logic
function editCall(el) {
  if (el.matches("li")) {
    const url = `/api/todos/${el.dataset.id}`;
    const changeCompletedState = (function () {
      if (el.dataset.completed === "true") {
        return false;
      }
      return true;
    }());
    axios.put(url, {
      completed: changeCompletedState
    })
      .then(res => {
        console.log(res);
        el.setAttribute("data-completed", changeCompletedState);
        el.classList.toggle("complete")
      })
      .catch(err => {
        console.log(err);
      })
  }
}