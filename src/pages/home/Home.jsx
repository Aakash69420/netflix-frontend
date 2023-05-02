import React, { useEffect, useState } from 'react'
import Navbar from "../../components/navbar/Navbar"
import Featured from "../../components/featured/Featured"
import "./home.scss"
import List from "../../components/list/List"
import axios from "axios"

const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const getRandomLists = async () => {
      try{
        const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,{
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzkyMmIzY2E2NjVlMDExODZjOGExMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjY5MzA2NCwiZXhwIjoxNjgzMTI1MDY0fQ.o4NqyrZDuN5F5dYtRFEUpZHKNcwM06fcSCBsjyIOr6o"
          }
        })
        setLists(res.data)
        console.log(res.data);
      } catch(err){
        console.log(err)
      }
    }
    getRandomLists()
  },[type, genre])

  return (
    <div className='home'>
      <Navbar/>
      <Featured type={type} setGenre ={setGenre} />
      {Array.isArray(lists) && lists.map((list,index) => (
        <List key={index} list={list} />
      ))}
    </div>
  )
}

export default Home