import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './component/Header'
import { useAuth } from '../context/Auth'

const Login = () => {
    const [auth, setAuth] = useAuth()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("All filed is required")
            return false;
        }
        try {
            const { data } = await axios.get(`http://localhost:8000/users?email=${email}&password=${password}`);
            if (data.length != 0) {
                localStorage.setItem('userlogin', JSON.stringify(data[0]))
                setAuth({
                    ...auth,
                    user: data[0]
                })

                setEmail('')
                setPassword('')
                alert("Login successfully")
            } else {
                alert("Email and Password not valid")
            }
        } catch (err) {
            console.log(err);
            return false;
        }
    }

    return (
        <>
            <Header />
            <div align="center">
                <h1>Login User</h1>
                <form onSubmit={handleSubmit}>
                    Email    :- <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /><br></br>
                    Password :- <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} /><br></br>
                    <input type='submit' value="submit" />
                </form>
                <Link to={`/register`}>Register</Link>
            </div>
        </>
    )
}

export default Login