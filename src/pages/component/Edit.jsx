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
                    name: name,
                    dis: dis,
                    cat: cat
                }
            }
            return val
        })

        setRecord(updateEdit)

        localStorage.setItem('user', JSON.stringify(updateEdit))

        navigate('/viewData')

    }

    // update edit record end

    // console.log(record);

    return (
        <>
            <Header />


            <div className="d-flex justify-content-center pt-5">
                <div class="card text-center col-6">
                    <div class="card-header">
                        EDIT TASK
                    </div>
                    <div class="card-body">
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder='task name' />
                            <input type="text" className='ms-2 me-2' onChange={(e) => setDis(e.target.value)} value={dis} placeholder='discription' />
                            <input type="password" onChange={(e) => setCat(e.target.value)} value={cat} placeholder='Task Catagory' />
                            <button className="btn btn-primary mt-4" type='submit'>Edited Task</button>
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

export default Edit