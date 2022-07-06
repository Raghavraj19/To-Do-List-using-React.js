import './App.css';
import Header from "./MyComponents/Header";
import { Addtodo } from "./MyComponents/Addtodo";
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer';
import React, { useState } from 'react';



function App() {
  
  const onDelete = (todo) => {
    console.log("i am on delete of todo", todo);

    setTodos(todos.filter((e) => {
      return e !== todo;

    }))
    
  }

  const addtodo = (title, desc)=>{
    console.log("i am adding this todo ", title, desc)
    let sno;
    if(todos.length===0){
      sno = 0;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
  
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, mytodo]); 
    console.log(mytodo);

   
  }
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to market",
      desc: "you need to go to market to get some fruits"

    },
    {
      sno: 2,
      title: "Go to mall",
      desc: "you need to go to mall to get some products"

    },
    {
      sno: 3,
      title: "Go to collage",
      desc: "you need to go to collage for study"

    },
  ]);
  return (
    <>
      <Header title="TO DO LIST" />
      <Addtodo addtodo={addtodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>

  );

}


export default App;
