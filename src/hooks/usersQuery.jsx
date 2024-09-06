import { useMutation, useQuery } from '@tanstack/react-query';
import React from 'react';

const usersQuery = (id) => {
  return useQuery({
    queryKey: ['users', id],
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
    refetchInterval: 2000,
  });
};

const usersActionQUery = () => {
  return useMutation({
    mutationFn: (data) => {
      if (data.id && data.password) {
        fetch(`http://localhost:3000/users/${data.id}`, {
          method: 'PUT',
          headers: {
            'COntent-Type': 'application/json',
          },
          body: JSON.stringify({
            id: data.id,
            fullName: data.user[0].fullName,
            email: data.user[0].email,
            password: data.password,
            profile: data.user[0].profile,
            orderHistory: data.user[0].orderHistory,
          }),
        }).then((res) => res.json());
      } else if (data.id && data.editInfo) {
        fetch(`http://localhost:3000/users/${data.id}`, {
          method: 'PUT',
          headers: {
            'COntent-Type': 'application/json',
          },
          body: JSON.stringify({
            fullName: data.editInfo.fullName,
            email: data.editInfo.email,
          }),
        }).then((res) => res.json());
      } else {
        fetch('http://localhost:3000/payment', {
          method: 'POST',
          headers: {
            'COntent-Type': 'application/json',
          },
          body: JSON.stringify({ ...data.user }),
        }).then((res) => res.json());
      }
    },
  });
};
const editPasswordQuery = () => {
  return useMutation({
    mutationFn: (data) => {
      fetch(`http://localhost:3000/users/${data.id}`, {
        method: 'PUT',
        headers: {
          'COntent-Type': 'application/json',
        },
        body: JSON.stringify({
          id: data.id,
          fullName: data.user[0].fullName,
          email: data.user[0].email,
          password: data.password,
          profile: data.user[0].profile,
          orderHistory: data.user[0].orderHistory,
        }),
      }).then((res) => res.json());
    },
  });
};
const editInfoQuery = () => {
  return useMutation({
    mutationFn: (data) => {
      fetch(`http://localhost:3000/users/${data.id}`, {
        method: 'PUT',
        headers: {
          'COntent-Type': 'application/json',
        },
        body: JSON.stringify({
          id: data.id,
          fullName: data.fullName,
          email: data.email,
          password: data.user[0].password,
          profile: data.user[0].profile,
          orderHistory: data.user[0].orderHistory,
        }),
      }).then((res) => res.json());
    },
  });
};
const NewUserQuery = () => {};
export { editPasswordQuery, usersQuery, editInfoQuery };
