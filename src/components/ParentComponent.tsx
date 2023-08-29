import React from 'react'
import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
    const sayHello=(msg:any)=>{
        alert(msg);
    }
  return (
    <div>
        <ChildComponent greetParent={sayHello}></ChildComponent>
    </div>
  )
}
