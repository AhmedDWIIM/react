import React, { useState } from 'react'

export default function Count() {
    const [todolist, setTodolist] = useState([
        "toto",
        "café"
    ])
    const [push, setPush] = useState("")
    
    return  (
        <div>
            <h1> To do :</h1>
            <form>
                <label>Ajouter une note</label>
                <input value={push}   name="push" onChange={e => setPush(e.target.value)} />
                <button onClick={() => {
                    setTodolist
                }}> add note</button>
            </form>
            { todolist.map((item, i) => {
                return (
                <p key={i}>{item}</p>
                )
            })}
        </div>
    )
}