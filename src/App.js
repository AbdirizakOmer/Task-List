import Form from './components/form'
import Header from './components/header'
import List from './components/list';
import React, {useState} from 'react';
function App() {
  
  const [todos, setTodos] = useState([{id:0,todo:"this is a simple task"}])


  return (
    <div className="App">
    
      <Header/>

      {/* Now let's start creating the form */}
      <Form setTodo={setTodos} len={todos.length}/>

      {/* Now let's create our list component */}
      <List todoList={todos} setTodo={setTodos}/>
      {/* Okey now that we've styled everything let's create
          the todo function
          first let's make a function that allow us to add items
          into our list

          Now let's add a function that remove items form 
          the list
      */}
    </div>
  );
}

export default App;
