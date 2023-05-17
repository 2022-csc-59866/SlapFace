import React, { useEffect, useState } from "react";
import * as NewsAPI from "../../API/NewsAPI.js";
import { NewsRow } from "./NewsRow.jsx";
import "./News.css";
import { Pagination } from "antd";

const News = () => {
  const [articles, setArticles] = useState([]);

  const fetchNews = async () => {
    try {
      const res = await NewsAPI.getNews();
      setArticles(res.data.articles);
    } catch (error) {
      setArticles(null);
      console.log(error);
    }
  };
  // pagination
  const numEachPage = 4;
  const [pageSlice, setPageSlice] = useState({
    minValue: 0,
    maxValue: 4,
  });

  const handlePageChange = (value) => {
    setPageSlice({
      minValue: (value - 1) * numEachPage,
      maxValue: value * numEachPage,
    });
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="NewsContainer">
      <h1 data-testid='news-header-heading'>Trending News</h1>
      <Pagination
        defaultCurrent={1}
        total={articles && articles.length}
        pageSize={numEachPage}
        onChange={handlePageChange}
      />
      {articles &&
        articles.length > 0 &&
        articles
          .slice(pageSlice.minValue, pageSlice.maxValue)
          .map((item, index) => (
            <div id={index} key={index} className="NewsRows">
              <NewsRow article={item} />
            </div>
          ))}
    </div>
  );
};

export default News;
