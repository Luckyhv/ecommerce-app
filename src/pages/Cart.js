import { Add, Remove } from '@mui/icons-material'
import React, { useState } from 'react'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import './Cart.css'


function Cart() {
    const [count, setcount] = useState(1);
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
    return (
        <div>
            <Navbar />
            <Announcement />
            <div className="wrapp">
                <h1 className='h1'>Your Bag</h1>
                <div className="top d-flex">
                    <button className='tbtn'>Continue Shopping</button>
                    <div className="toptexts">
                        <span className="toptext">Shopping Bag(2)</span>
                        <span className="toptext">Your Wishlist (0)</span>
                    </div>
                    <button className='tbtn1'>Checkout Now</button>
                </div>
                <div className="bottom">
                    <div className="infos">
                        <div className="product">
                            <div className="productdetails">
                                <img className='cartimg' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt="" />
                                <div className="details">
                                    <span>
                                        <b>Product Name :</b>Winter Shoes</span>
                                    <span><b>Product Id :</b>1200980</span>
                                    <div className="col3" style={{ backgroundColor: "black" }}></div>
                                    <span><b>Product Size :</b>10</span>
                                </div>
                            </div>
                            <div className="pricedetails">
                                <div className="ammountcont2 d-flex">
                                    <Remove onClick={remfun} className='addrem' />
                                    <span className='span d-flex'>{count}</span>
                                    <Add onClick={addfun} className='addrem' />
                                </div>
                                <div className="productprice">&#x20B9;300</div>
                            </div>
                        </div>
                        <hr />
                        <div className="product">
                            <div className="productdetails">
                                <img className='cartimg' src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" alt="" />
                                <div className="details">
                                    <span>
                                        <b>Product Name :</b>BB Shirts</span>
                                    <span><b>Product Id :</b>129076</span>
                                    <div className="col3" style={{ backgroundColor: "gray" }}></div>
                                    <span><b>Product Size :</b>32</span>
                                </div>
                            </div>
                            <div className="pricedetails">
                                <div className="ammountcont2 d-flex">
                                    <Remove onClick={remfun} className='addrem' />
                                    <span className='span d-flex'>{count}</span>
                                    <Add onClick={addfun} className='addrem' />
                                </div>
                                <div className="productprice">&#x20B9;300</div>
                            </div>
                        </div>
                    </div>
                    <div className="summary">
                        <h1>ORDER SUMMARY</h1>
                        <div className="summaryitem">
                            <span> Subtotal</span>
                            <span > &#x20B9;300</span>
                        </div>
                        <div className="summaryitem">
                            <span >Estimated Shipping</span>
                            <span> &#x20B9;60</span>
                        </div>
                        <div className="summaryitem">
                            <span>Shipping Discount</span>
                            <span> &#x20B9;40</span>
                        </div>
                        <div className="summaryitemt" type="total">
                            <span>Total</span>
                            <span >&#x20B9;320</span>
                        </div>
                        <button className='button2'>CheckOut Now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Cart
