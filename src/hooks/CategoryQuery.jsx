import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function categoryQuery() {
  return useQuery({
    queryKey: ['category'],
    queryFn: () => {
      return fetch('https://twowheeler-backend.liara.run/category')
        .then((res) => res.json())
        .then((result) => result);
    },
    refetchInterval: 2000,
  });
}
