import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Todolist from './components/Todolist'

import './App.css';

function App() {

  //Run Once when the app start
  useEffect(() => {
    getLocalTodos();
  },[]);


  //USE EFFECT
  useEffect(() => {
    filterhandler();
    saveLocalTodos();
  }, [todos, status]);

  //States 
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus ] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState('all');

  //Functions and events 

  const filterhandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
      break;

      default:
        setFilteredTodos(todos);
      break;
    }
  };

//LOCAL HOSTS LOG'S INPUT VALUES INTO THE DOM WEBPAGE STORAGE 
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  }


    return (
      <div className="App">
        <header>
          <h1> Ralph's todo List </h1>
        </header>

        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
           />
        <Todolist filteredTodos={filteredTodos} setTodos={setTodos} todos={todos}/>
       
      </div>
    );
}

export default App;
