import React from 'react';
import { usersQuery } from '../../hooks/usersQuery';

export default function OrderHistory() {
  const userID = JSON.parse(localStorage.getItem('user'));
  const { data: userData, isSuccess } = usersQuery(userID);
  return (
    <div className="w-full h-screen p-4 flex justify-center items-center  rounded-md overflow-hidden">
      <table className="w-8/12 h-auto m-2  rounded-md ">
        <thead className="bg-slate-500 text-bgPrimary text-xl font-medium border-b border-slate-600 w-auto h-auto overflow-hidden p-2">
          <tr className="w-full h-auto   p-4">
            <th className="m-2">Id</th>
            <th>Date</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {isSuccess && (
            <>
              {userData[0]?.orderHistory.map((order) => (
                <tr className="w-full h-auto border-b-2 border-bgPrimary text-lg ">
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.price}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}