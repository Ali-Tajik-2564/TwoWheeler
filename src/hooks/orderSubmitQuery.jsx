import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';

const ordersQuery = (email) => {
  return useQuery({
    queryKey: ['orders', email],
    queryFn: () => {
      return fetch('https://twowheeler-backend.liara.run/payment')
        .then((res) => res.json())
        .then((result) => result);
    },

    select: (data) => {
      if (email) {
        return data.filter((order) => order.email === email);
      } else {
        return data;
      }
    },
    refetchInterval: 2000,
  });
};
const orderStatusQuery = () => {
  return useMutation({
    mutationFn: (data) => {
      fetch(`https://twowheeler-backend.liara.run/payment/${data.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: data.id,
          fullName: data.order.fullName,
          price: data.order.price,
          productID: data.order.productID,
          status: 'send',
          date: data.order.date,
          email: data.order.email,
        }),
      }).then((res) => res.json());
    },
  });
};
const orderSubmitQuery = () => {
  return useMutation({
    mutationFn: (product) => {
      fetch('https://twowheeler-backend.liara.run/payment', {
        method: 'POST',
        headers: {
          'COntent-Type': 'application/json',
        },
        body: JSON.stringify({ ...product }),
      }).then((res) => res.json());
    },
  });
};
export { orderSubmitQuery, ordersQuery, orderStatusQuery };
