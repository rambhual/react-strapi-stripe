import React, { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import { UserContext } from "../../context/user.context";
export const Home = () => {
  const product = useContext(ProductContext);
  const user = useContext(UserContext);
  console.log(product);
  console.log(user);
  return <div>This is home page! {product.name}</div>;
};
