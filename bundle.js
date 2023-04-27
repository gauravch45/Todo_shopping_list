(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{}]},{},[1]);
