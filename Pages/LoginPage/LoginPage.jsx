import React from "react";
import  { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [pass, SetPass] = useState('');

    const handleSubmit = (e) => {
        e.preventdefault();
        console.log(email);
    }


    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="your email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => SetPass(e.target.value)} type="password" placeholder="your password" />
                <button type="submit">save</button>
            </form>
        </div>
    )
}