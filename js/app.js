const button = document.querySelector(".input_btn");

const input = document.querySelector(".container__body-input");

const ul = document.querySelector(".todo__values");

$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//delete todos
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
      event.stopPropagation();
    });
});
function content() {
  const todoList = input.value;
  $("ul").append(
    `<li><span><i class="fa fa-trash"></i></span> ${todoList} </li>`
  );
  input.value = "";
}
//ADD A NEW LIST
input.addEventListener("keypress", function (e) {
  if (e.which === 13 && input.value.length > 0) {
    content();
  }
});
button.addEventListener("click", function (e) {
  if (input.value.length > 0) {
    content();
  }
});
