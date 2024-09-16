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

                {/* <table className="rwd-table">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>Password</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            record.map((val) => {
                                return (
                                    <tr key={val.id}>
                                        <td>{val.id}</td>
                                        <td>{val.name}</td>
                                        <td>{val.email}</td>
                                        <td>{val.password}</td>
                                        <td>
                                            
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
                <div className="card" style={{ width: '18rem' }}>
                    {
                        record.map((val) => {
                            return (
                                <div className="card-body">
                                    <h5 className="card-title">{val.name}</h5>
                                    <p className="card-text">{val.dis}</p>
                                    <button type="button" class="btn btn-primary">mark task as completed </button>
                                    <button className='deleteData' onClick={() => deleteData(val.id)}>Delete</button>
                                    <button className='editData'>
                                        <Link to={`/edit/${val.id}`}>Edit</Link>
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