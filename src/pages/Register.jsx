import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './component/Header'

const Register = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password || !phone || !city) {
            alert("All filed is required");
            return false
        }

        try {
            let { data } = await axios.post(`http://localhost:8000/users`, {
                name: name,
                email: email,
                password: password,
                phone: phone,
                city: city
            })
            alert("User successfully register")
            setName("")
            setEmail("")
            setPassword("")
            setPhone("")
            setCity("")

        } catch (err) {
            console.log(err);
            return false
        }






    }

    return (
        <>
            <Header />
            <div align="center">
                <h1>Register User</h1>
                <form onSubmit={handleSubmit}>
                    Name    :- <input type="text" onChange={(e) => setName(e.target.value)} value={name} /><br></br>
                    Email    :- <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} /><br></br>
                    Password :- <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} /><br></br>
                    Phone :- <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} /><br></br>
                    City :- <input type="text" onChange={(e) => setCity(e.target.value)} value={city} /><br></br>
                    <input type='submit' value="submit" />
                </form>
                <Link to={`/`}>Login</Link>
            </div>
        </>
    )
}

export default Register