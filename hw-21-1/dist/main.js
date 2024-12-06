"use strict";

$(document).ready(function () {
  var savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
  var serialNumber = +localStorage.getItem("serialNumber") || 0;
  function initializeTodos() {
    savedTodos.forEach(function (todo) {
      addTodoToDOM(todo.id, todo.text, todo.completed);
    });
  }
  $(".js--form").on("submit", function (e) {
    e.preventDefault();
    var taskText = $(".js--form__input").val().trim();
    if (taskText) {
      var id = createId();
      addTodoToDOM(id, taskText, false);
      saveToLocalStorage(id, taskText, false);
      $(".js--form__input").val("");
    }
  });
  var createId = function createId() {
    serialNumber++;
    localStorage.setItem("serialNumber", serialNumber.toString());
    return serialNumber;
  };
  function saveToLocalStorage(id, text, completed) {
    savedTodos.push({
      id: id,
      text: text,
      completed: completed
    });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
    localStorage.setItem("serialNumber", serialNumber.toString());
  }
  function addTodoToDOM(id, text, completed) {
    var $li = $("<li>").addClass("todo-item").attr("data-id", id).attr("data-text", text);
    $li.html("\n            <div class=\"todo-item__content\">\n                <input type=\"checkbox\" class=\"todo-checkbox\" ".concat(completed ? "checked" : "", ">\n                <span class=\"todo-text\">").concat(text, "</span>\n                <div class=\"todo-buttons\">\n                    <button class=\"todo-item__delete\">Delete</button>\n                    <button class=\"btn btn-info btn-sm ms-2 show-details-btn\" data-bs-toggle=\"modal\" data-bs-target=\"#taskModal\">Details</button>\n                </div>\n            </div>\n        "));
    $(".js--todos-wrapper").append($li);
    $li.find(".show-details-btn").on("click", function () {
      var taskText = $li.find(".todo-text").text();
      $("#taskText").text(taskText);
    });
    $li.find(".todo-item__delete").on("click", function () {
      $li.remove();
      saveTodos();
    });
  }
  function saveTodos() {
    savedTodos = [];
    $(".todo-item").each(function () {
      var id = $(this).data("id");
      var text = $(this).data("text");
      var completed = $(this).find(".todo-checkbox").prop("checked");
      savedTodos.push({
        id: id,
        text: text,
        completed: completed
      });
    });
    localStorage.setItem("todos", JSON.stringify(savedTodos));
  }
  initializeTodos();
});