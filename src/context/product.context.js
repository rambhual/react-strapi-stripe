import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { url } from "../utils/url";
export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [products, setProducts] = useState([]);
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios.get(`${url}`).then(res => setNews(res.data.articles));
    setLoading(false);
    return () => {};
  }, []);
  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        news,
        featured
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
