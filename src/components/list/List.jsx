import React, { useRef, useState } from 'react'
import "./list.scss"
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material'
import ListItem from "../listItem/ListItem"

export default function List({list}) {
 const[isMoved, setIsMoved] = useState(false)
 const[slideNumber, setslideNumber] = useState(0)
 const[clickLimit, setClickLimit] = useState(window.innerWidth / 230)


 const listRef = useRef()
  console.log(list);
 const handleClick = (direction) =>{
  setIsMoved(true)
  let distance = listRef.current.getBoundingClientRect().x - 50
  if(direction === "left" && slideNumber > 0){
   setslideNumber(slideNumber - 1)
   listRef.current.style.transform = `translateX(${230 + distance}px)`
  }
  if(direction === "right" && slideNumber < 10 - clickLimit){
   setslideNumber(slideNumber + 1)
   listRef.current.style.transform = `translateX(${-230 + distance}px)`
  }
 }
  return (
    <div className='list'>
     <span className="listTitle">{list.title}</span>
     <div className="wrapper">
      <ArrowBackIosOutlined className='sliderArrow left' onClick={()=>handleClick("left")} style={{display: !isMoved && "none"}}/>
      <div className="container" ref={listRef}>
        {list.content.map((item, i) =>(
          <ListItem key={i} index = {i} item = {item} />
        ))}
      </div>
      <ArrowForwardIosOutlined className='sliderArrow right' onClick={()=>handleClick("right")}/>
     </div>
    </div>
  )
}
