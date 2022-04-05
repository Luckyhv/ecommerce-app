import React from 'react'
import './Productitem.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from "react-router-dom";

function Productitem({item}) {
  return (
    <div className='cont'>
        <div className="imgcon">
      <img src={item.img} alt=""/>
        </div>
      <din className="info">
          <div className="icon">
              <ShoppingCartOutlinedIcon/>
          </div>
          <div className="icon">
            <Link to={`/product/${item._id}`}>
              <SearchOutlinedIcon/>
              </Link>
          </div>
          <div className="icon">
              <FavoriteBorderOutlinedIcon/>
          </div>
      </din>
    </div>
  )
}

export default Productitem
