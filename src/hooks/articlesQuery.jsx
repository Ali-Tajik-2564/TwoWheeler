import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function articlesQuery(id) {
  return useQuery({
    queryKey: ['articles', id],
    queryFn: () => {
      return fetch('http://localhost:3000/article')
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
  });
}
