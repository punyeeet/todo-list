
// import './App.css';
import { Header } from "./MyComponents/Header.1";
import { Footer } from './MyComponents/Footer';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from "./MyComponents/AddTodo";

import React, { useState,useEffect  } from 'react';



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const onDelete = ({todo}) => {
    console.log("I am onDelete of todo", todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    console.log("deleted", todos)
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  
  const addTodo = (title,desc)=>{
    console.log("I am adding this todo",title,desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo);
  } 
  return (
<> 
    
    <Header title="My Todos List" searchBar={true} />
    
       
      
          
            <AddTodo addTodo={addTodo} />
            <Todos todo={todos} onDelete={onDelete} /> 
            
          
          
          
            
           
         
      
      
      <Footer />
    
    </>
  );
}

export default App;
