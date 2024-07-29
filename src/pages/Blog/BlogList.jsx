import React, { useState } from 'react';
import ArticleBox from '../../components/ArticleBox/ArticleBox';
import Pagination from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';

export default function BlogList() {
  const [article, setArticle] = useState([
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ]);
  const [ShownArticle, setShownArticle] = useState([]);
  return (
    <div className="bg-articles-page  bg-cover w-full h-auto flex item-center justify-center py-5 ">
      <div className="md:w-4/5 w-10/12 h-auto bg-white/80  px-4 py-7  ">
        <Link to="/blog/1">
          <ArticleBox />
        </Link>
        <Link to="/blog/2">
          <ArticleBox />
        </Link>
        <Link to="/blog/3">
          <ArticleBox />
        </Link>
        <Link to="/blog/4">
          <ArticleBox />
        </Link>

        <Pagination
          pathname="/blogs"
          items={article}
          itemCount={7}
          setShownItems={setShownArticle}
        />
      </div>
    </div>
  );
}
