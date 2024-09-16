import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'

const Add = () => {

    const [name, setName] = useState('')
    const [dis, setDis] = useState('')
    const [cat, setCat] = useState('')
    const [record, setRecord] = useState([])
    const id = Math.floor(Math.random() * 10000)
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const obj = {
            id, name, dis, cat
        }

        let allData = [...record, obj]

        setRecord(allData)

        localStorage.setItem('user', JSON.stringify(allData))

        setName("")
        setDis("")
        setCat("")

        console.log(allData);

    }

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)
    }, [])

    return (
        <>
            <Header/>

            <div className="container">
                <h1> Create Task </h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-control">
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='task name'/>
                    </div>
                    <div className="form-control">
                        <input type="text" onChange={(e) => setDis(e.target.value)} value={dis} placeholder='discription'/>
                    </div>
                    <div className="form-control">
                        <input type="password" onChange={(e) => setCat(e.target.value)} value={cat} placeholder='Task Catagory'/>
                    </div>
                    <button className="btn" type='submit'>save</button>
                </form>
            </div>

            <div className="viewPage">
                <Link to={'/view'}>View Task <i className="fa-solid fa-right-from-bracket"></i></Link>
            </div>

        </>
    )
}

export default Add