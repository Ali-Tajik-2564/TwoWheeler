import { useMutation } from '@tanstack/react-query';
import React from 'react';

export default function orderSubmitQuery() {
  return useMutation({
    mutationFn: (course) => {
      fetch('http://localhost:3000/payment', {
        method: 'POST',
        headers: {
          'COntent-Type': 'application/json',
        },
        body: JSON.stringify({ ...course }),
      }).then((res) => res.json());
    },
  });
}