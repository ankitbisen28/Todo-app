import './App.css';
import { useState, useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { NavBar } from './components/NavBar/NavBar';


function App() {

  // need a state to keep track of todos
  const [todos, setTodos] = useState(() => {
    // get the todos from localstorage
    const savedTodos = localStorage.getItem("todos");
    // if there are todos stored
    if (savedTodos) {
      // return the parsed JSON object back to a javascript object
      return JSON.parse(savedTodos);
      // otherwise
    } else {
      // return an empty array
      return [];
    }
  });
  // need state to keep track of the value in the input
  const [todo, setTodo] = useState({id: "", title: "", description: ""});

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // function to get the value of the input and set the new state
  function handleInputChange(e) {
    // set the new state value to what's currently in the input box
    setTodo({...todo, [e.target.name] : e.target.value});
  }

  // function to create a new object on form submit
  function handleFormSubmit(e) {
    // prevent the browser default behavior or refreshing the page on submit
    e.preventDefault();

    // don't submit if the input is an empty string
    if (todo !== "") {
      // set the new todos state (the array)
      setTodos([
        // copy the current values in state
        ...todos,
        {
          id: todos.length + 1,
          title: todo.title,
          description: todo.description,
        }
      ]);
    }

    // clear all input values in the form
    e.target.reset();
  }
  

  const deleteTodos = (id) => {
    setTodos(current =>
      current.filter(todo => {
        // 👇️ remove object that has id equal to 2
        return todo.id !== id;
      }),
    );
  }

  return (
    <>
    <NavBar />
    <Form handleInputChange={handleInputChange} deleteTodos={deleteTodos} handleFormSubmit={handleFormSubmit} todos={todos}/>
    <Footer />
    </>
  );
}

export default App;
