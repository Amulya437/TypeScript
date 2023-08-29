import React from 'react'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { register, handleSubmit, formState:{errors}} = useForm();
    const navigate = useNavigate();
    const handlelogin=(data:any)=>{
        if(data.email==="admin@gmail.com" && data.password === "admin123")
        {
            sessionStorage.setItem("emailId",data.email);//we need to set the item as key value pair
                navigate("/displayProducts");
        }
        else{
            alert("Invalid Credentials");
        }
        console.log(data)
    }
  return (
    <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit(handlelogin)}>
            <label>Email</label>
            <input type="email" id='email' {...register('email',{required:true})}/>
            {errors.email && errors.email.type == "required" && <span>Email is required</span>}
            <br></br>
            <label>Password</label>
            <input type="password" id='password' {...register('password',{required:true,minLength:3})}/>
            {errors.password && errors.password.type == "required" && <span>password is required</span>}
            {errors.password && errors.password.type == "minLength" && <span>minimum 3 characters </span>}
            <br></br>
            <input type="submit" value="Login"></input>

        </form>
    </div>
  )
}
