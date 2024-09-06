import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';

export default function usersActionQUery() {
  const queryCLient = useQueryClient();
  return useMutation({
    mutationFn: (data) => {
      console.log(data);

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
}
