import React, { useState,useEffect } from 'react'
import './watch.scss'
import { ArrowBackOutlined } from "@material-ui/icons"
import { useLocation, Link } from 'react-router-dom'

export default function Watch() {
  const[movies,setMovies] = useState(null) 
  const location = useLocation()
  const { movie } = location.state;
  useEffect(()=>{
    setMovies(movie);
  },[])

  
  return (
    <div className='watch'>
      <Link to="/" >
     <div className="back">
      <ArrowBackOutlined/>
      Home
     </div>
     </Link>
     <iframe width="100%" height="100%" src={movies} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen = "true"></iframe>
    </div>
  )
}
