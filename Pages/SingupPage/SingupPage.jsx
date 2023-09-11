import React, { useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
export default function SingupPage() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    const [fullname, setfullname] = useState('');
    const [organization, setorganization] = useState('');
    const handleSubmit = (e) => {
        e.preventdefault();
        console.log(username);
    }

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label htmlFor="Username">Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="please type your username" />
                
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="please type your password" />
                
                <label htmlFor="fullname">fullname</label>
                <input value={fullname} onChange={(e) => setfullname(e.target.value)} type="fullname" placeholder="please type your fullname" />
                                
                <label htmlFor="Organization">Organization</label>
                <input value={organization} onChange={(e) => setorganization(e.target.value)} type="organization" placeholder="please type your Organization" />
                
                <button type="submit">Login</button>
            </form>
        </div>
    )
}