import React from 'react';
import { usersQuery } from '../../hooks/usersQuery';
import { ordersQuery } from '../../hooks/orderSubmitQuery';

export default function OrderHistory() {
  const userID = JSON.parse(localStorage.getItem('user'));
  const { data: userData, isSuccess } = usersQuery(userID);

  let userEmail;
  if (isSuccess) {
    userEmail = userData[0]?.email;
  }
  const { data: ordersData } = ordersQuery(userEmail);
  console.log(ordersData);

  return (
    <div className="w-full min-h-screen p-8 bg-bgPrimary/60">
      <div className="text-xl font-semibold text-textPrimary  w-full border-b border-bgPrimary/70 pb-3">
        <h1 className="text-xl font-semibold text-bgPrimary  w-full border-b border-bgPrimary/70 pb-3">
          Your Orders
        </h1>
        <table className="w-full my-4 ">
          <thead>
            <tr className="p-3 md:text-base text-sm font-medium text-textPrimary  flex justify-between items-center flex-row-reverse border-b-2 border-bgPrimary/70 mb-3 gap-x-1">
              <th> Product Id</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {isSuccess && (
              <>
                {ordersData?.map((order) => (
                  <tr className="p-2 text-sm md:text-sm font-light text-bgPrimary  flex justify-between items-center flex-row-reverse gap-x-4">
                    <td>{order.productID}</td>
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
    </div>
  );
}
