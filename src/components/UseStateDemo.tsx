import React,{useState,useEffect} from 'react'

export const UseStateDemo = () => {
    const [count, setCount] = useState(0);
    const increment=()=> setCount(count+2);
    const decrement=()=>setCount(count-2);
    const [person,setPerson]=useState({name:'Souji',address:'Badsi',age:'22'});
    useEffect(() => {
      document.title = `you clicked ${count} times`
    },[count]) 
    
  return (
    <div>
        The Count value is {count}
        <button onClick={increment}>Increment By 2</button>
        <br></br>
        <button onClick={decrement}>Decrement By 2</button>
        <div>
    <h2>Person Details:</h2>
    <p>Name: {person.name}</p>
    <p>Address: {person.address}</p>
    <p>Age: {person.age}</p>
</div>

    </div>
    
  )
}
