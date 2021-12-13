import react, { useState, useEffect } from 'react';

export default function Count() {
  const [tailleHooks, setTaille] = useState(null);
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([
    "Toto",
    "faire la vaiselle",
  ]);
    useEffect( () => {
        localStorage.setItem("todos", todolist)
        setTaille(todolist.length-1);
    }, [todolist])
    
    function addTodo() {
    setTodolist([...todolist, input]);
  }

  function deleteTodo(removeIndex) {
    setTodolist(todolist.filter(function(item, index) { 
      if (index != removeIndex) {
        return item;
      }
    }));
  }

  return (
    <div>
      <input value={input} onInput={e => setInput(e.target.value)}/>
      <button onClick={() => addTodo()}>Add</button>
      <h1>Todo :</h1>
      { todolist.map((item, index) => {
        return (
          <div key={index}>
            <p style={{color: index === tailleHooks ? "red" : ""}} >{index}. {item} <span onClick={() => deleteTodo(index)}>Supprimer</span></p>
          </div>
        )
      })}
    
    </div>
  );
}