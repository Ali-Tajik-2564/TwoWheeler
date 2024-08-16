import React, { useEffect, useState } from 'react';
import ArticleBox from '../../components/ArticleBox/ArticleBox';
import Pagination from '../../components/Pagination/Pagination';
import { Link } from 'react-router-dom';
import articlesQuery from '../../hooks/articlesQuery';
import { useQuery } from '@tanstack/react-query';

export default function BlogList() {
  const [ShownArticle, setShownArticle] = useState([]);

  const { data, error } = articlesQuery();
  return (
    <div className="bg-articles-page  bg-cover w-full h-auto flex item-center justify-center py-5 ">
      <div className="md:w-4/5 w-10/12 h-auto bg-white/80  px-4 py-7  ">
        {ShownArticle.map((article) => (
          <Link to={`/blog/${article.id}`}>
            <ArticleBox {...article} />
          </Link>
        ))}
        {data && (
          <Pagination
            pathname="/blogs"
            items={data}
            itemCount={7}
            setShownItems={setShownArticle}
          />
        )}
      </div>
    </div>
  );
}
