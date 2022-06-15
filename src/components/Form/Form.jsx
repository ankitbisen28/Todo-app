import React from "react";
import './Form.css';
import { useState, useEffect } from 'react';

export const Form = () => {

  const [Todo, setTodo] = useState({Title: "", Description: ""});

    // function to get the value of the input and set the new state
    function handleInputChange(e) {
      // set the new state value to what's currently in the input box
      setTodo({...Todo, [e.target.name] : e.target.value});
    }

    useEffect(() => {
      let Todos = [];
      localStorage.setItem('todos', JSON.stringify(Todos));
    }, [Todo])
    
  

    const saveTodos = (e)=> {
      e.preventDefault();
      // Test if Todos are null 
      if(localStorage.getItem('todos') === null)
      {
        // init array 
        const Todos = [];

        // add to array
        Todos.push(Todo);

        // set To localStorage 
        localStorage.setItem('todos', JSON.stringify(Todos));
      }    
      else
      {
        // get bookmarks from localStorage 
        const Todos = JSON.parse(localStorage.getItem('todos'));
        
        // add Todos to localstorage 
        Todos.push(Todo);

        // Re-set back to localstorage 
        localStorage.setItem('todos', JSON.stringify(Todos));        
      }
      clearForm();
    }

    const clearForm = () => {
      document.getElementById('form').clear()
    }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container d-flex">
            <form id="form">
              <fieldset>
                <div className="form-group">
                  <label htmlFor="todo" className="form-label mt-4">
                    Todo
                  </label>
                  <input
                    type="text"
                    name="Title"
                    onChange={handleInputChange}
                    className="form-control"
                    id="todo"
                    aria-describedby="todo"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputDescription1"
                    className="form-label mt-4"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    name="Description"
                    onChange={handleInputChange}
                    className="form-control"
                    id="Description"
                    placeholder="Description"
                  />
                </div>
                <button onClick={saveTodos} type="submit" className="btn btn-primary my-3">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="container my-3">
            <div className="todo-items">
              <div
                className="toast show my-2"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
              >
                <div className="toast-header">
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                  <i style={{cursor:"pointer"}} className="bi bi-trash mx-2"></i>
                </div>
                <div className="toast-body">
                  Hello, world! This is a toast message.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
