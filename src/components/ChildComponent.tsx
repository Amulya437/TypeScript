import React from 'react'

export const ChildComponent = (props:any) => {
  return (
    <div>
        <button onClick={()=>props.greetParent("Hello from child")}>clickMe</button>
    </div>
  )
}
