import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'

const View = () => {

    const [record, setRecord] = useState([])

    useEffect(() => {
        let oldRecord = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : []

        setRecord(oldRecord)
    }, [])

    const deleteData = (id) => {
        let deleteData = record.filter((val) => {
            return val.id != id
        })

        setRecord(deleteData)

        localStorage.setItem('user', JSON.stringify(deleteData))

        console.log(deleteData);
    }

    console.log(record);



    return (
        <>
            <Header />

            <div className="container">
                <h1> View Task </h1>

                <div className="card m-2 border-0 d-flex">
                    {
                        record.map((val) => {
                            return (
                                <div className="card-body border border-warning m-2 " style={{ width: '18rem' }}>
                                    <h5 className="card-title">{val.name}</h5>
                                    <p className="card-text">{val.dis}</p>
                                    <p className="card-text">{val.cat}</p>
                                    <button className='deleteData bg-danger text-light border-0 mx-2' onClick={() => deleteData(val.id)}>Delete</button>
                                    <button className='editData bg-success  border-0'>
                                        <Link className='text-light' to={`/edit/${val.id}`}>Edit</Link>
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>


            </div>


            <button type="button" class="btn btn-warning">
                <Link className='text-decoration-none' to={'/task'}>Add task<i className="fa-solid fa-angles-left"></i></Link>
            </button>


        </>
    )
}

export default View