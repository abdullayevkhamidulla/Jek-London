import React, { useState, useEffect } from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

// Mock function to simulate fetching data
const fetchBestSellers = () => {
  return Promise.resolve([
    {
      _id: "1011",
      img: bestSellerOne,
      productName: "Polo Shirt",
      price: "125.00",
      color: "Yellow and White",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1012",
      img: bestSellerTwo,
      productName: "Polo Shirt",
      price: "110.00",
      color: "Mixed",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1013",
      img: bestSellerThree,
      productName: "Polo Shirt",
      price: "125.00",
      color: "Cyan",
      badge: true,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
    {
      _id: "1014",
      img: bestSellerFour,
      productName: "Polo Shirt",
      price: "120.00",
      color: "Black and Blue",
      badge: false,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
    },
  ]);
};

const BestSellers = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchBestSellers().then((data) => setProducts(data));
  }, []);

  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        {products.map((product) => (
          <Product
            key={product._id}
            _id={product._id}
            img={product.img}
            productName={product.productName}
            price={product.price}
            color={product.color}
            badge={product.badge}
            des={product.des}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
