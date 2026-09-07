import React, { useEffect, useState } from 'react'
// import { MdCheck, MdDeleteForever } from "react-icons/md";

import "./Todo.css";
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { TodoDate } from './TodoDate';
import { data } from 'react-router-dom';

import {
    getLocalStorageTodoData,
    setLocalStorageTodoData,
} from"./TodoLocalStorage";

// const todoKey = "reactTodo";

// const getLocalStorageTodoData = () => {
//     const rawTodos = localStorage.getItem(todoKey);
//         if (!rawTodos) return [];
//         return JSON.parse(rawTodos);
//     };

export const Todo = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData());
        // const rawTodos = localStorage.getItem(todoKey);
        // if (!rawTodos) return [];
        // return JSON.parse(rawTodos);
    // });
    // const [dateTime, setDateTime] = useState("");

    

    const handleFormSubmit = (inputValue) => {
        const {id, content, checked} =inputValue;
        // event.preventDefault();
        // to check if the input field is empty or not
        if (!content) return;
        //to check if the data is already existing or not
        // if (task.includes(inputValue)) return;
            // setInputValue("");
        // };

        const ifTodoContentMatched = task.find(
            (curTask) => curTask.content === content
        );
        if (ifTodoContentMatched) return;

        setTask((prevTask) => [...prevTask, { id, content, checked}]);


        // setInputValue("");
    };

    // todo add data to localStorage
    setLocalStorageTodoData(task);
    // localStorage.setItem("todoKey", JSON.stringify(task));


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
        // console.log(task);
        // console.log(value);
        const updatedTask = task.filter((curTask) => curTask.content 
        !== value);
        setTask(updatedTask);
    };

    //todo handleClearTodoData functionality
    const handleClearTodoData = () => {
        setTask([]);
    };

    // todo handleCheckedTodo functionality
    const handleCheckedTodo = (content) => {
      const updatedTask = task.map((curTask) => {
        if(curTask.content === content){
            return { ...curTask, checked: !curTask.checked };
        } else {
            return curTask;
        }
      });
      setTask(updatedTask);
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
                    task.map((curTask) => {
                        return (
                        <TodoList 
                        key={curTask.id} 
                        data={curTask.content}
                        checked= {curTask.checked} 
                        onHandleDeleteTodo = {handleDeleteTodo}
                        onHandleCheckedTodo = {handleCheckedTodo}/>
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
