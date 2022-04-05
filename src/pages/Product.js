import { Add, Remove } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../Requestmethod'
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/CartRedux";
import './Product.css'

function Product() {
    const location= useLocation();
    const id=(location.pathname.split("/")[2]);
    const [product, setproduct] = useState({});
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [count, setcount] = useState(1);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getproduct = async ()=>{
            try {
                const res=await publicRequest.get(`/product/find/`+id);
                setproduct(res.data);
            } catch (error) {
                
            }
        }
        getproduct();
    })

    const addfun = () => {
        setcount(count + 1);
    }
    const remfun = () => {
        if (count > 1) {
            setcount(count - 1);
        }
        else {
            setcount(1);
        }
    }

    const handleclick=()=>{
        dispatch(
            addProduct({ ...product, count, color, size })
          );
    }

    const Color=[product.color];
    const Size=[product.size];
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className="d-flex wrapper">
                <div className="imgcontain">
                    {/* <img className='img6' src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=formatfit=cropw=600q=80" alt="" /> */}
                    <img src={product.img} alt="" className="img6" />
                </div>
                <div className="infocontain">
                    <div className="titled"><h1 className='h10'>{product.title}</h1></div>
                    <div className="pdesc">{product.desc}</div>
                    <div className="price">Price : <span>&#8377; {product.price}</span></div>
                    <div className="filtertext d-flex">
                        <div className="color d-flex">
                            <div className="i" style={{ fontSize: "18px", paddingRight: "5px" }}>Color </div>
                            {Color?.map(c=>(
                                // console.log(c);
                            <div className="col1" style={{ backgroundColor: `${c}` }} key={c} onClick={() => setColor(c)}></div>
                            ))}
                        </div>
                        <div className="d-flex size">
                            <div style={{ fontSize: "18px", paddingRight: "5px" }}>Size</div>
                            <select name="" id="" onChange={(e) => setSize(e.target.value)}>
                                {Size.map(s=>(
                                    <option value="" key={s}>{s}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="addcont">
                        <div className="ammountcont d-flex">
                            <Remove onClick={remfun} className='addrem' />
                            <span className='span d-flex'>{count}</span>
                            <Add onClick={addfun} className='addrem' />
                        </div>
                        <button className='button9' onClick={handleclick}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Product
