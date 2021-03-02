import React from 'react';
//Import Components

import Todo from './Todos';

const Todolist = ({ todos, setTodos, filteredTodos}) => {

    return (
    <div className="todo-container">
        <ul className="todo-list">
            {todos.map((todo) => (
                <Todo 
                setTodos={setTodos}
                todos={todos}
                key={todo.id} 
                todo={todo}
                text={todo.text} />
            ))}
        </ul>
     
    </div>
    );
};

export default Todolist;