import React from 'react'
import {Todoitem} from "../MyComponents/Todoitem";

export const Todos = (props) => {
    let myStyle = {
        minHeight : "100vh",
    }
    return (
        <div className="container my-5" style={myStyle}>
            <h2 className = "my-3">Todos List</h2>

            {props.todos.length===0? "no todos to display":
            props.todos.map((todo)=>{
                return <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}

            {/* {props.todos.length === 0 ? "Todo List is empty" : 

            props.todos.map((todo) => {
                return (
                  
                    <Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/> 
               
                )
            }
            
            )} */}
        
            

        </div>
    )
}

export default Todos
