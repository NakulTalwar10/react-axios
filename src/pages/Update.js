import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios"
import {  useNavigate } from 'react-router-dom'

const Update = () => {

    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    
    const navigate =useNavigate();

    useEffect(() => {
  setId(localStorage.getItem("Id"))
    setName(localStorage.getItem("Name"))
  setEmail(localStorage.getItem("Email"))
    }, [])

    function handleUpdate(e){
        e.preventDefault()
        axios.put(`https://637f987c2f8f56e28e914c03.mockapi.io/nakul-user/${id}`,
        {
            name:name,
            email:email,
    }).then(( )=>{
        navigate("/home")
    })
        
    }
    
  return (
    <div>
        <h2>Update</h2>
         <form>
                <div className="container-fluid">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label" value={email} >Email address</label>
                    <input type="email" className="form-control"  onChange={(e)=>setEmail(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label"value={name} >Name</label>
                    <input type="text" className="form-control"  onChange={(e)=>setName(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
                </div>
            </form>
    </div>
  )
}

export default Update