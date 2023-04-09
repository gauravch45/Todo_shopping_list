var button = document.getElementById("ent-button");
var input = document.getElementById("input");
var ul = document.querySelector("ul");
const delbtn = document.getElementsByClassName("delete");

function inputLenght() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");
  var div = document.createElement("div");
  const newbttn = document.createElement("button");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(div);
  div.appendChild(li);
  div.appendChild(newbttn);
  newbttn.innerHTML = "Delete";
  li.id = "list";
  newbttn.id = "delete";
  input.value = "";
  li.addEventListener("click", function () {
    li.style.textDecoration = "line-through";
  });
  newbttn.addEventListener("click", function () {
    this.parentElement.remove();
  });
}

function addListAfterClick() {
  if (inputLenght() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(event) {
  if (inputLenght() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
