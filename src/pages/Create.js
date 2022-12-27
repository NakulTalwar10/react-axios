import React from 'react'
import { useState } from 'react'

import axios from "axios"
import { useNavigate } from 'react-router-dom'


const Create = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");

    const history=useNavigate()


    function handleSubmit(e){
        e.preventDefault()
        
        axios.post('https://637f987c2f8f56e28e914c03.mockapi.io/nakul-user',{
            name:Name,
            email:Email,
        
        })
        .then(() => {
            history("/");
          });
    }
    return (

        <div>
   

            <form>
                <div className="container-fluid">
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} />

                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Name</label>
                    <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)}/>
                </div>

                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </div>
            </form>
            
        </div>


    )
}

export default Create