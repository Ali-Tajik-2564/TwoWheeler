import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function brandQuery() {
  return useQuery({
    queryKey: ['brand'],
    queryFn: () => {
      return fetch('http://localhost:3000/brand')
        .then((res) => res.json())
        .then((result) => result);
    },
  });
}
