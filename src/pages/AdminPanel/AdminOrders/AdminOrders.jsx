import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ordersQuery, orderStatusQuery } from '../../../hooks/orderSubmitQuery';
import Pagination from '../../../components/Pagination/Pagination';
export default function AdminOrders() {
  const [showOrdersID, setShowOrderID] = useState('');
  const [shownSendOrders, setShownSendOrders] = useState();
  const { data: ordersData, isSuccess } = ordersQuery();
  const { mutate: orderStatusMutate } = orderStatusQuery();
  const SendOrders = ordersData?.filter((order) => order.status === 'send');
  const PendingOrders = ordersData?.filter(
    (order) => order.status === 'pending'
  );
  const editOrderStatus = (order) => {
    console.log(order);

    Swal.fire({
      title: 'are you sure about changing this order status?',
      icon: 'warning',
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        orderStatusMutate(
          {
            order,
            id: order.id,
          },

          {
            onSuccess: () => {
              Swal.fire({
                title:
                  'your change has been submitted , you can check it from your Panel ',
                icon: 'success',
                confirmButtonText: 'Ok',
                confirmButtonColor: '#083344',
              });
            },
          }
        );
      }
    });
  };

  const showEmail = (orderEmail) => {
    Swal.fire({
      title: 'order Email ',
      html: `${orderEmail}`,
    });
  };
  return (
    <div className="w-[95%] mx-auto p-1 text-right">
      <div>
        <h1 className="text-xl font-semibold text-textPrimary  w-full border-b border-bgPrimary/70 pb-3">
          سفارشات درحال ارسال
        </h1>
        <table className="w-full my-4 ">
          <thead>
            <tr className="p-3 md:text-base text-sm font-medium text-textPrimary  flex justify-between items-center flex-row-reverse border-b-2 mb-3 gap-x-1">
              <td>fullName </td>
              <td> price</td>
              <td>status </td>
              <td>productID </td>
              <td>date </td>
              <td>email </td>
              <td>Edit</td>
            </tr>
          </thead>
          <tbody>
            {PendingOrders?.map((order) => (
              <tr className="p-2 text-xs md:text-sm font-light text-textPrimary  flex justify-between items-center flex-row-reverse gap-x-4">
                <td>{order.fullName} </td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>{order.productID}</td>
                <td>{order.date}</td>

                <td className=" bg-bgPrimary hover:bg-bgPrimary/70 text-textPrimary p-1 px-1 rounded-sm text-xs md:text-sm">
                  <button onClick={() => showEmail(order.email)}>
                    show Email
                  </button>
                </td>

                <td className=" bg-bgPrimary hover:bg-bgPrimary/70 text-textPrimary p-1 px-1 rounded-sm text-xs md:text-sm">
                  <button onClick={() => editOrderStatus(order)}>
                    Edit Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-textPrimary  w-full border-b border-bgPrimary/70 pb-3">
          سفارشات ارسال شده
        </h1>
        <table className="w-full my-4 ">
          <thead>
            <tr className="p-3 md:text-base text-sm font-medium text-textPrimary  flex justify-between items-center flex-row-reverse border-b-2 mb-3 gap-x-1">
              <td>fullName </td>
              <td> price</td>
              <td>status </td>
              <td>productID </td>
              <td>date </td>
              <td>email </td>
            </tr>
          </thead>
          <tbody>
            {SendOrders?.map((order) => (
              <tr className="p-2 text-xs md:text-sm font-light text-textPrimary  flex justify-between items-center flex-row-reverse gap-x-4">
                <td>{order.fullName} </td>
                <td>{order.price}</td>
                <td>{order.status}</td>
                <td>{order.productID}</td>
                <td>{order.date}</td>

                <td className=" bg-bgPrimary hover:bg-bgPrimary/70 text-textPrimary p-1 px-1 rounded-sm text-xs md:text-sm">
                  <button onClick={() => showEmail(order.email)}>
                    show Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {isSuccess && (
          <Pagination
            itemCount={5}
            setShownItems={setShownSendOrders}
            items={SendOrders}
            pathname="/admin-panel/orders"
          />
        )} */}
      </div>
    </div>
  );
}
