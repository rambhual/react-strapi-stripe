import React, { useContext } from "react";
import { ProductContext } from "../../context/product.context";
export const Home = () => {
  const product = useContext(ProductContext);
  console.log(product);
  return <div>This is home page! {product.name}</div>;
};
