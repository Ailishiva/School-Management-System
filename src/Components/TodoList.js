 import React, { useState } from 'react';
// import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

import './todolist.css'
const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      if (editingTodoId) {
        // If editing a todo, update the existing todo
        setTodos(
          todos.map((todo) => {
            if (todo.id === editingTodoId) {
              return {
                ...todo,
                text: inputValue
              };
            }
            return todo;
          })
        );
        setEditingTodoId(null);
      } else {
        // If not editing, add a new todo
        const newTodo = {
          id: new Date().getTime(),
          text: inputValue,
          completed: false
        };
        setTodos([...todos, newTodo]);
      }
      setInputValue('');
    }
  };

  const handleTodoDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleTodoToggle = (todoId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  };

  const handleTodoEdit = (todoId) => {
    const todoToEdit = todos.find((todo) => todo.id === todoId);
    setInputValue(todoToEdit.text);
    setEditingTodoId(todoId);
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <form className="todo-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a todo"
          style={{width: 40}}
        />
        <button type="submit">{editingTodoId ? 'Update' : 'Add'} <i class="fa fa-plus-circle" style={{fontSize:36}}></i></button>
      </form>
      <ul className="todos">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={todo.completed ? 'completed' : ''}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoToggle(todo.id)}
            />
            <span className="todo-text">{todo.text}</span>
            <span
              className="edit-icon"
              onClick={() => handleTodoEdit(todo.id)}
            ><i class="fa fa-edit" style={{fontSize:36}}></i></span>
            <span
              className="delete-icon"
              onClick={() => handleTodoDelete(todo.id)}
            ><i class="fa fa-trash-o" style={{fontSize:36}}></i></span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
