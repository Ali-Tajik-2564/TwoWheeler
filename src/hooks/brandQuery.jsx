import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function brandQuery() {
  return useQuery({
    queryKey: ['brand'],
    queryFn: () => {
      return fetch('https://twowheeler-backend.liara.run/brand')
        .then((res) => res.json())
        .then((result) => result);
    },
    refetchInterval: 2000,
  });
}
