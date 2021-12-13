import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(0)
    return  (
        <div>
            <p>Vous avez clique { count } fois</p> 
            <br />
            <button onClick={() => setCount (count+1)}> add 1</button>
        </div>
    )
}