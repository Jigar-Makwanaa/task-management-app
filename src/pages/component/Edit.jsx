import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from './Header'

const Edit = () => {

    const { id } = useParams()
    const [name, setName] = useState('')
    const [dis, setDis] = useState('')
    const [cat, setCat] = useState('')
    const [record, setRecord] = useState('')
    const navigate = useNavigate()

    // edit record start 

    useEffect(() => {

        let oldData = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldData)

        let editData = oldData.find((val) => {
            return val.id == id

        })

        setName(editData.name)
        setDis(editData.dis)
        setCat(editData.Cat)

        console.log(editData);

    }, [id])

    // edit record end

    // update edit record start 

    const handleSubmit = (e) => {
        e.preventDefault()

        let updateEdit = record.map((val) => {
            if (val.id == id) {
                return {
                    ...val,
                    name : name,
                    dis : dis,
                    cat : cat
                }
            }
            return val
        })

        setRecord(updateEdit)

        localStorage.setItem('user',JSON.stringify(updateEdit))

        navigate('/viewData')

    }

    // update edit record end

    // console.log(record);

    return (
        <>
        <Header/>

            <div className="container">
                <h1>Edit Task </h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-control">
                        {/* <input type="text" required /> */}
                        <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='Name' />
                    </div>
                    <div className="form-control">
                        {/* <input type="text" required /> */}
                        <input type="text" onChange={(e) => setDis(e.target.value)} value={dis} placeholder='Email' />
                    </div>
                    <div className="form-control">
                        {/* <input type="password" required /> */}
                        <input type="text" onChange={(e) => setDis(e.target.value)} value={dis} placeholder='discription' />
                    </div>
                    <button className="btn" type='submit'>Edit</button>
                </form>
            </div>

            <div className="viewPage">
                <Link to={'/view'}>View Page <i className="fa-solid fa-right-from-bracket"></i></Link>
            </div>

        </>
    )
}

export default Edit