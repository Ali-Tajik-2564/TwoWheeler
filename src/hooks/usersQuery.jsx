import { useMutation, useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import AuthContext from '../Contexts/AuthContext';

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
        return data.filter((user) => user.id === id);
      } else {
        return data;
      }
    },
    refetchInterval: 2000,
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
          roll: data.user[0].roll,
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
          roll: data.user[0].roll,
        }),
      }).then((res) => res.json());
    },
  });
};
const editProfileImg = () => {
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
          password: data.user[0].password,
          profile: data.profile,
          orderHistory: data.user[0].orderHistory,
          roll: data.user[0].roll,
        }),
      }).then((res) => res.json());
    },
  });
};
const NewUserQuery = () => {
  const authContext = useContext(AuthContext);
  return useMutation({
    mutationFn: (user) => {
      fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((result) => {
          authContext.login({}, result.id);
          navigate;
        });
    },
  });
};
export {
  editPasswordQuery,
  usersQuery,
  editInfoQuery,
  editProfileImg,
  NewUserQuery,
};
