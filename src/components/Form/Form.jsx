import React from "react";
import "./Form.css";

export const Form = ({ handleInputChange, handleFormSubmit, todo, todos, deleteTodos }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="container d-flex">
            <form id="form" onSubmit={handleFormSubmit}>
              <fieldset>
                <div className="form-group">
                  <label htmlFor="todo" className="form-label mt-4">
                    Todo
                  </label>
                  <input
                    // value={todo.title}
                    type="text"
                    name="title"
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
                    // value={todo.description}
                    onChange={handleInputChange}
                    type="text"
                    name="description"
                    className="form-control"
                    id="Description"
                    placeholder="Description"
                  />
                </div>
                <button type="submit" className="btn btn-primary my-3">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="col">
          <div className="container my-3">
            <div className="todo-items">
              {todos.map((todo, key) => {
                return (
                  <div
                    className="toast show my-2"
                    role="alert"
                    aria-live="assertive"
                    aria-atomic="true"
                  >
                    <div className="toast-header">
                      <strong className="me-auto" key={todo.title}>
                        {todo.title}
                      </strong>
                      <small>11 mins ago</small>
                      <i
                        style={{ cursor: "pointer" }}
                        className="bi bi-trash mx-2"
                        onClick={deleteTodos}
                      ></i>
                    </div>
                    <div className="toast-body" key={todo.description}>
                      {todo.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
