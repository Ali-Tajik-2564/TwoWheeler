import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function categoryQuery() {
  return useQuery({
    queryKey: ['category'],
    queryFn: () => {
      return fetch('http://localhost:3000/category')
        .then((res) => res.json())
        .then((result) => result);
    },
  });
}
