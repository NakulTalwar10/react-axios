import React from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useState, useEffect } from 'react'

const Home = () => {

  const [Data, setData] = useState([])

  function getData() {
    axios.get('https://637f987c2f8f56e28e914c03.mockapi.io/nakul-user')
      .then((res) => {
        console.log(res.data)
        setData(res.data)
      })

  }
  function handleDelete(id) {
    axios.delete(
      `https://637f987c2f8f56e28e914c03.mockapi.io/nakul-user/${id}`
    ).then(() => {
      getData()
    })
  }

  useEffect(() => {
    getData();
  }, []);

  function setLocalStorage(id, name, email) {
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
  }




  return (
    <div>

      <Link to={"/home"}></Link>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {Data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to={"/update"}>
                      <button className='btn-success' onClick={() => setLocalStorage(eachData.id, eachData.name, eachData.email)}>Edit</button>
                    </Link>

                  </td>
                  <td>
                    <button className='btn-danger' onClick={() => handleDelete(eachData.id)}>Delete</button>
                  </td>
                </tr>

              </tbody>
            </>
          );
        })

        }
      </table>

    </div>
  )
}

export default Home