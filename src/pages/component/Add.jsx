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
            <Header />

            <div className="d-flex justify-content-center pt-5">
                <div class="card text-center col-6">
                    <div class="card-header">
                        ADD TASK
                    </div>
                    <div class="card-body">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='task name' />
                            <input type="text" className='ms-2 me-2' onChange={(e) => setDis(e.target.value)} value={dis} placeholder='discription' />
                            <input type="text" onChange={(e) => setCat(e.target.value)} value={cat} placeholder='Task Catagory' />
                            <button className="btn btn-primary mt-4" type='submit'>mark tasks as completed</button>
                        </form>
                    </div>
                    <button type="button" class="btn btn-warning">
                        <Link className='text-decoration-none text-black' to={'/view'}>View Task <i className="fa-solid fa-right-from-bracket"></i></Link>
                    </button>
                </div>
            </div>

        </>
    )
}

export default Add