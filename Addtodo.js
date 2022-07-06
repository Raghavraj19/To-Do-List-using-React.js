import React, { useState } from 'react';


export const Addtodo = ({addtodo}) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e)=> {
    e.preventDefault();
    if(!title || !desc){
      alert("Title or Description can not be blank")
    }
    else{
    addtodo(title , desc)
    setTitle("");
    setDesc("");
  }
}


  return (
    <div className ="container my-3">
      <h3>Add a Todo</h3>
      <form onSubmit={submit} className="row g-3">
  <div className="col-md-6">
    <label htmlFor="text" className="form-label">Todo Title</label>
    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="text" />
  </div>
  <div className="col-md-8">
    <label htmlFor="desc" className="form-label">Description of Todo</label>
    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" />
  </div>
 
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Add Todo</button>
  </div>
</form>
    </div>
  )
}

export default Addtodo
