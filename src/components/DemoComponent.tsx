import React from "react";
type maa={
    name:string,
    address:string,
    empId:number,
    department:string,
}

export const DemoComponent=(props:maa)=>{
    //if we dont use props we can use direct properties this is so called destructuring
                
    return(
    <div><h1>Hello From Functional Components</h1>
    {props.name}
    {props.address}
    {props.empId}
    {props.department}


    </div>)
}