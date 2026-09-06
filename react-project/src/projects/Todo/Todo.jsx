import React, { useEffect, useState } from 'react'
// import { MdCheck, MdDeleteForever } from "react-icons/md";

import "./Todo.css";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';

export const Todo = ({onAddTodo}) => {
    const [task, setTask] = useState([]);
    // const [dateTime, setDateTime] = useState("");

    

    const handleFormSubmit = (inputValue) => {
        // event.preventDefault();

        if (!inputValue) return;

        if (task.includes(inputValue)) return;
            // setInputValue("");
        // };

        setTask((prevTask) => [...prevTask, inputValue]);


        // setInputValue("");
    };

    // //todo date and time
    // useEffect(() => {
    // const interval = setInterval(() => {
    // const now = new Date();
    // const formattedDate = now.toLocaleDateString();
    // const formattedTime = now.toLocaleTimeString();

    // setDateTime(`${formattedDate} - ${formattedTime}`);
    // }, 1000);
    // return () => clearInterval(interval);
    // }, []);

    // Todo handleDeleteTodo function

    const handleDeleteTodo = (value) => {
        console.log(task);
        console.log(value);
        const updatedTask = task.filter((curTask) => curTask !== value);
        setTask(updatedTask);
    };

    //todo handleClearTodoData functionality
    const handleClearTodoData = () => {
        setTask([]);
    };


  return (
    <section className='todo-container'>
        
        <header className="header">
    <h1>Todo List</h1>
    <TodoDate/>
    {/* <h2 className='date-time'>{dateTime}</h2> */}
</header>
<TodoForm onAddTodo={handleFormSubmit}/>
        
        <section className='myUnOrdList'>
            <ul>
                {
                    task.map((curTask, index) => {
                        return (
                        <TodoList 
                        key={index} 
                        data={curTask} 
                        onHandleDeleteTodo = {handleDeleteTodo}/>
                        // <li key={index} className='todo-item'>
                        //     <span>{curTask}</span>
                        //     <button className='check-btn'>
                        //         <MdCheck/>
                        //     </button>
                        //     <button className='delete-btn' onClick={() => handleDeleteTodo(curTask)}>
                        //         <MdDeleteForever/>
                        //     </button>
                        // </li>
                        );
                    })}
            </ul>
        </section>
        <section>
            <button className='clear-btn' onClick={handleClearTodoData}>Clear all</button>
        </section>
    </section>
  );
};
