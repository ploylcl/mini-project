import React from "react";
import  { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../../component/Navbar/Navbar";
export default function LoginPage() {
    const [username, setusername] = useState('');
    const [pass, SetPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username);

        if(validate()){
            console.log('proceed')
        }
    }

    const validate=() =>{
        let result = true;
        if(username ==='' || username === null){
            result=false;
            toast.warning('please enter UserName')
        }
        if(pass ==='' || pass === null){
            result=false;
            toast.warning('please enter password')
        }
        return result;
    } 
    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setusername(e.target.value)} type="username"  />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => SetPass(e.target.value)} type="password"  />
                <button type="submit">save</button>
            </form>
        </div>
    )
}