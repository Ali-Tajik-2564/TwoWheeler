import React, { useState } from 'react';
import ArticleBox from '../../components/ArticleBox/ArticleBox';
import Pagination from '../../components/Pagination/Pagination';

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
    <div className="bg-article-page  bg-cover w-full h-auto flex item-center justify-center py-5">
      <div className="w-4/5 h-auto bg-white  px-4 py-7">
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />
        <ArticleBox />

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
