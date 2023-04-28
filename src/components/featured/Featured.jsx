import React, { useEffect, useState } from 'react'
import './featured.scss'
import { InfoOutlined, PlayArrow } from '@mui/icons-material'
import axios from 'axios'

export default function Featured({ type }) {
  const [content, setContent] = useState({})

  useEffect(() => {
    const getRandomContent = async () => {
      try {
      
        console.log("type",type);
        const res = await axios.get(`/movies/random?type=${type}`, {
          headers: {
            token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MzkyMmIzY2E2NjVlMDExODZjOGExMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjY5MzA2NCwiZXhwIjoxNjgzMTI1MDY0fQ.o4NqyrZDuN5F5dYtRFEUpZHKNcwM06fcSCBsjyIOr6o',
          },
        })
        setContent(res.data[0])
      } catch (err) {
        console.log(err)
      }
    }

    getRandomContent()
  }, [type])

  return (
    <div className='featured'>
      {type && (
        <div className='category'>
          <span>{type === 'movies' ? 'movies' : 'series'}</span>
          <select name='genre' id='genre'>
            <option>Genre</option>
            <option value='adventure'>Adventure</option>
            <option value='comedy'>Comedy</option>
            <option value='crime'>Crime</option>
            <option value='fantasy'>Fantasy</option>
            <option value='historical'>Historical</option>
            <option value='horror'>Horror</option>
            <option value='romance'>Romance</option>
            <option value='sci-fi'>Sci-fi</option>
            <option value='thriller'>Thriller</option>
            <option value='western'>Western</option>
            <option value='animation'>Animation</option>
            <option value='drama'>Drama</option>
            <option value='documentary'>Documentary</option>
          </select>
        </div>
      )}
      <img width='100%' src={content?.img} alt='MainItem' />
      <div className='info'>
        <img src={content?.imgTitle} alt='ListItem' />
        <span className='desc'>{content?.desc}</span>
        <div className='buttons'>
          <button className='play'>
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className='more'>
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  )
}
