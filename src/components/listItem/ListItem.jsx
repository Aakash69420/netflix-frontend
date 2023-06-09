import React, { useEffect } from 'react'
import { useState } from 'react'
import "./listItem.scss"
import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@mui/icons-material'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Lisitem({index, item}) {
  const [isHovered, setIsHovered] = useState(false)
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const getMovie = async () => {
      try{
        const res = await axios.get("/movies/find/" + item  , {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzkyMmIzY2E2NjVlMDExODZjOGExMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjY5MzA2NCwiZXhwIjoxNjgzMTI1MDY0fQ.o4NqyrZDuN5F5dYtRFEUpZHKNcwM06fcSCBsjyIOr6o"
          }
        })
        setMovie(res.data)
      } catch(err){
        console.log(err)
      }
    }
    getMovie()
  }, [item])

  return (
    <Link to="/watch" state={{ movie : movie.video   }}>
    <div className='listItem' style = {{left: isHovered && index * 225 - 50 + index * 2.5}} onMouseEnter={()=>setIsHovered(true)} onMouseLeave={()=>setIsHovered(false)}>
     <img src = {movie.img} />
     {isHovered &&(
       <>
       <iframe
            title={movie.title}
            src={movie.video || movie.trailer ? `${movie.video || movie.trailer}?autoplay=1` : ''}
          ></iframe>
     <div className="itemInfo">
      <div className="icons">
        <PlayArrow className='icon'/>
        <Add className='icon'/>
        <ThumbUpAltOutlined className='icon'/>
        <ThumbDownAltOutlined className='icon'/>
      </div>
      <div className="itemInfoTop">
        <span>{movie.duration}</span>
        <span className='limit'>+{movie.limit}</span>
        <span>{movie.year}</span>
      </div>
      <div className="desc">
        {movie.desc}
      </div>
      <div className="genre">{movie.genre} </div>
     </div></>
    )}
    </div>
  </Link>
  )
}