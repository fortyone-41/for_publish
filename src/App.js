import React from 'react'
import TodoList from './Todo/TodoList'
import Context from './context'



function App() {
  const [todos, setTodos] = React.useState([
  {id:1,completed: false, title:'Купить хлеб'},
  {id:2,completed: false, title:'Купить масло'},
  {id:3,completed: true, title:'Купить молоко'}
])


function toggleTodo(id) {
  setTodos(
    todos.map(todo => {
    if(todo.id === id){
      todo.completed = !todo.completed;
    }
    return todo;
  })
  )
}

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function addTodo() {
    const title=[{id: (todos.length+1).toString(),completed : false,title: document.getElementById('inputTitle').value}];
    todos.push({id: (todos.length+1).toString(),completed : false,title: document.getElementById('inputTitle').value})
    setTodos(todos.filter(todo => todo.id))
  }


  return  (
    <Context.Provider value={{removeTodo,addTodo}}>
     <div className='wrapper' >
       <h1>React tutorial</h1>         
      {todos.length ? <TodoList todos={todos} onToggle={toggleTodo} /> : <p>No ToDo's</p>} 
     </div> 
     </Context.Provider>
  )
}

export default App;
