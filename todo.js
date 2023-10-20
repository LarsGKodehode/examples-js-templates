const template = `
  <h2></h2>
  <div>
    <p class="text-green"></p>
  </div>
  <button>Remove</button>
`

export function createNewTodo(title, description) {
  // Create HTML
  const todo = document.createElement("li")
  todo.className = "card"
  todo.innerHTML = template

  // Sett variable content
  todo.querySelector("h2").textContent = title
  todo.querySelector("p").textContent = description

  // Add functionality
  todo.querySelector("button").addEventListener("click", () => {
    todo.remove()
  })

  // Return finished product
  return todo
}
