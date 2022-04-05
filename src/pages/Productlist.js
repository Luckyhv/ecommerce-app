import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import './Productlist.css'

function Productlist() {
    const location= useLocation();
    const category=(location.pathname.split("/")[2]);
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest"); 

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
          ...filters,
          [e.target.name]: value,
        });
      };
    return (
        <div>
            <Navbar />
            <Announcement />
            <h1>{category}</h1>
            <div className="contfil d-flex">
                <div className="d-flex filter">
                    <div className="filtext">Filter Products:
                    </div>
                    <select name="color" onChange={handleFilters}>
                        <option value="" disabled >color</option>
                        <option value="">White</option>
                        <option value="">Black</option>
                        <option value="">Red</option>
                        <option value="">Green</option>
                        <option value="">Yellow</option>
                    </select>
                    <select name="size" onChange={handleFilters}>
                        <option value="" disabled >Size</option>
                        <option value="">XL</option>
                        <option value="">L</option>
                        <option value="">M</option>
                        <option value="">S</option>
                        <option value="">XS</option>
                    </select>
                </div>
                <div className="d-flex filter">
                    <div className="filtext">Sort Products:
                    </div>
                    <select name="" id="" onChange={(e) => setSort(e.target.value)}>
                        <option value="newest" >Newest</option>
                        <option value="asc">Price (asc)</option>
                        <option value="desc">Price (desc)</option>
                    </select>
                </div>
            </div>
            <Products category={category} filters={filters} sort={sort}/>
            <Newsletter />
            <Footer/>
        </div>
    )
}

export default Productlist
