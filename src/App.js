import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'
import Loader from './Loader'
import Modal from './Modal/Modal'
import Game from './Game'

const AddTodo = React.lazy(() => new Promise(resolve => {
  setTimeout(() => {
    resolve(import('./Todo/AddTodo'))
  }, 3000)
}))

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  const [gamer, setGame] = React.useState([])


  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
          setLoading(false)
          setTodos(todos)
        }, 2000)         
      })
  }, [])

  function toggleTodo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    )
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo(title) {
    setTodos(todos.concat([{
      title,
      id: Date.now(),
      completed: false
    }]))
  }

  function game(click) {
    setGame(gamer.push(click))
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className='wrapper' >
        <h1>React tutorial</h1>
        <Modal />
        <React.Suspense fallback={<p>Loading....</p>}>
          <AddTodo onCreate={addTodo} />
        </React.Suspense>


        {loading && <Loader />}
        {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : loading ? null : <p>No ToDo's</p>}
        <Game onClicker={game} />
      </div>
    </Context.Provider>
  )
}

export default App;
