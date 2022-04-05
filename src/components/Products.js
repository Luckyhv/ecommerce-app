import React, { useState, useEffect } from 'react'
import Productitem from './Productitem'
// import {popularProducts} from '../data'
import axios from 'axios'


function Products({ category, filters, sort }) {
  const [products, setproducts] = useState([]);
  const [filterproducts, setfilterproducts] = useState([]);

  useEffect(() => {
    const getproducts = async () => {
      try {
        const res = await axios.get(category
          ? `http://localhost:7000/api/product/?category=${category}`
          : `http://localhost:7000/api/product/`
        );
        // console.log(res);
        setproducts(res.data);
      } catch (error) {

      }
    }
    getproducts();
  }, [category]);

  useEffect(() => {
    category && setfilterproducts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value))
      ));
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setfilterproducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilterproducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setfilterproducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className='procon d-flex' style={{ flexWrap: "wrap", justifyContent: "space-between" }}>
      {category ? filterproducts.map((item) => (
        <Productitem item={item} key={item.id} />
      )) : products.slice(0, 10).map((item) => (
        <Productitem item={item} key={item.id} />
      ))}
    </div>
  )
}

export default Products