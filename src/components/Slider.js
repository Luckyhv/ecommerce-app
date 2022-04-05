import React,{useState} from 'react'
import {sliderItems} from '../data'
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import './Slider.css'

function Slider() {
    const [slideIndex, setSlideIndex] = useState(0);
        const handleClick = (direction) => {
          if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
          }
        }
        // setInterval(handleClick,5000);
  return (
    <div className='d-flex con'>
      <div className="arrow" direction="left" style={{left:"10px"}} onClick={()=>{handleClick("left")}} >
          <ArrowLeftOutlinedIcon/>
      </div>
      <div className="slideitem" style={{transform:`translateX(${slideIndex* -100}vw)`}}>
      {sliderItems.map((item) => (<>
      <div className="slide" style={{backgroundColor:`${item.bg}`}} key={item.id}>
          <div className="imgcont">
              <img src={item.img} class="image" alt="..."></img>
          </div>
          <div className="infocont">
              <div className='title'>{item.title}</div>
              <div className='desc'>{item.desc}</div>
          <button>Shop Now</button>
          </div>
      </div>
      </>
        ))}
      </div>
      <div className="arrow" direction="right" style={{right:"10px"}} onClick={()=>{handleClick("right")}}>
          <ArrowRightOutlinedIcon/>
      </div>
    </div>
  )
}

export default Slider
