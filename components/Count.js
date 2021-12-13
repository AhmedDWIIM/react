import react, { useState } from 'react';

export default function Count() {
  const [input, setInput] = useState("");
  const [todolist, setTodolist] = useState([
    "Toto",
    "faire la vaiselle",
  ]);

  function addTodo() {
    setTodolist([...todolist, input]);
  }

  function deleteTodo(removeIndex) {
    setTodolist(todolist.filter(function(item, index) { 
      if (index !== removeIndex) {
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
            <p>{index} {item} <span onClick={() => deleteTodo(index)}>Supprimer</span></p>
          </div>
        )
      })}
    </div>
  );
}