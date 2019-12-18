import React, { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import { NewsList } from "../components/newsList";
const News = () => {
  const { news, loading } = useContext(ProductContext);
  console.log(news);
  if (loading) {
    return <div>Please wait while loading news...</div>;
  }
  return (
    <div className="columns is-multiline">
      {news.map((item, i) => (
        <NewsList key={i} {...item} />
      ))}
    </div>
  );
};
export default News;
