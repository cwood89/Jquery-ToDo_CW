$("#todo-add").on("submit", function (event) {
  event.preventDefault();

  let input = $("#todo")
  let todo = input.val().trim();
  if (input.val() == "") {
    input.focus();
  } else {
    input.val("");
    addTodo(todo);
  }
})

function addTodo(item) {
  let todoList = $("#todo-list")
  let listItem = $('<li>')
  listItem.text(item);
  todoList.append(listItem);
};

$("ol").on("click", "li", function () {
  let self = this;
  $(this).toggleClass("done");
  setTimeout(function () {
    console.log("deleted");
    $(self).remove();
  }, 1500);
})