import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';
const articlesSubmitQuery = () => {
  return useMutation({
    mutationFn: (article) => {
      fetch('https://twowheeler-backend.liara.run/article', {
        method: 'POST',
        headers: {
          'COntent-Type': 'application/json',
        },
        body: JSON.stringify({ ...article }),
      }).then((res) => res.json());
    },
  });
};
const articlesQuery = (id) => {
  return useQuery({
    queryKey: ['articles', id],
    queryFn: () => {
      return fetch('https://twowheeler-backend.liara.run/article')
        .then((res) => res.json())
        .then((result) => result);
    },

    select: (data) => {
      if (id) {
        return data.filter((article) => article.id === id);
      } else {
        return data;
      }
    },
    refetchInterval: 2000,
  });
};
const editPublishQuery = () => {
  return useMutation({
    mutationFn: (data) => {
      fetch(`https://twowheeler-backend.liara.run/article/${data.id}`, {
        method: 'PUT',
        headers: {
          'COntent-Type': 'application/json',
        },
        body: JSON.stringify({
          id: data.id,
          title: data.article[0].title,
          desc: data.article[0].desc,
          completed: data.article[0].completed,
          published: !data.article[0].published,
          pic: data.article[0].pic,
          body: data.article[0].body,
        }),
      }).then((res) => res.json());
    },
  });
};
const deleteArticleQuery = () => {
  return useMutation({
    mutationFn: (articleID) => {
      fetch(`https://twowheeler-backend.liara.run/article/${articleID}`, {
        method: 'DELETE',
        headers: {
          'COntent-Type': 'application/json',
        },
      }).then((res) => res.json());
    },
  });
};
export {
  articlesQuery,
  articlesSubmitQuery,
  editPublishQuery,
  deleteArticleQuery,
};
