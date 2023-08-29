import axios from 'axios'
import React,{useEffect} from 'react'

export const APICall = () => {
    useEffect(() => {
        axios.get("https://reqres.in/api/users/2").then(response=>console.log(response.data))
        .catch(error=>console.log("some error" +error))
    }, [])
    
  return (
    <div>APICall </div>
  )
}
