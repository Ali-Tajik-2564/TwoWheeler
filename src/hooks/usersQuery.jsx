import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function usersQuery(id) {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return fetch('http://localhost:3000/users')
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
