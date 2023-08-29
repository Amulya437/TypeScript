import React from "react";
export const EventDemo = () =>{
    // const handleEvent=()=>{
    //     alert("button click event");
    // }
    return(
        <div>
            {/* <button onClick={handleEvent}>ClickHere</button> */}
            <button onClick={()=>alert("click here")}>ClickHere</button>
        </div>
    )
}