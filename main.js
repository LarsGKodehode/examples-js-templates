import { createNewTodo } from './todo.js'

/**@type {HTMLFormElement} */
const form = document.querySelector("#addTodo")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  // Get form data
  const data = formDataToObject(new FormData(form))
  console.log(data)

  // Validerer inputen
  if (data.title === "" || data.description === "") {
    form.reportValidity(false)
    return
  }

  // Create new todo
  const newTodo = createNewTodo(data.title, "lorem")

  // Append to DOM
  document.querySelector("#todo-list").append(newTodo)

  // Clear form
  form.reset()
})

function formDataToObject(formData) {
  const obj = {}

  formData.forEach((value, key) => {
    obj[key] = value
  })

  return obj
}