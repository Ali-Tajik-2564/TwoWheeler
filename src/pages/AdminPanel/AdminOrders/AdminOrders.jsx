import React, { useState } from 'react';
import Swal from 'sweetalert2';
export default function AdminOrders() {
  const [showOrdersID, setShowOrderID] = useState('');
  const showAddress = () => {
    Swal.fire({
      title: 'ادرس مشتری :',
      text: 'شهریار و بلوار نواب وکوچه شهید عباسی',
      confirmButtonText: ' حله',
    });
  };
  const gettingFactorCode = () => {
    Swal.fire({
      title: 'لطفا برای تغییر وضعیت سفارش کد فاکتور را وارد کنید',
      input: 'text',
      confirmButtonText: 'دریافت کد',
      showCancelButton: 'true',
      cancelButtonText: 'بیخیال',
      inputPlaceholder: 'کد فاکتور',
    }).then((res) => {
      if (res.isConfirmed) {
        console.log(res.value);
      }
    });
  };
  const showOrders = () => {
    setShowOrderID(25);
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
              <td>نام </td>
              <td> کد پستی </td>
              <td>وضعیت </td>
              <td>محصولات </td>
              <td>ادرس </td>
              <td>ادیت</td>
            </tr>
          </thead>
          <tbody>
            <tr className="p-2 text-xs md:text-sm font-light text-textPrimary  flex justify-between items-center flex-row-reverse gap-x-4">
              <td>علی تاجیک</td>
              <td>65656544665456</td>
              <td>درحال انجام</td>

              <td className=" bg-bgPrimary hover:bg-bgPrimary/70 text-textPrimary p-1 px-1 rounded-sm text-xs md:text-sm">
                <button onClick={showOrders}>مشاهده سفارشات</button>
              </td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70 text-textPrimary p-1 px-1 rounded-sm text-xs md:text-sm">
                <button onClick={showAddress}>مشاهده ادرس</button>
              </td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70 text-textPrimary p-1 px-1 rounded-sm text-xs md:text-sm">
                <button onClick={gettingFactorCode}>سفارش انجام شد</button>
              </td>
            </tr>
            {showOrdersID === 25 ? (
              <div className="w-[95%] mx-auto p-1 text-right ">
                <ol className="w-full md:text-base text-sm flex gap-x-5 flex-col justify-end text-textPrimary Light ">
                  <li>سامسونگ A21</li>
                  <li>سامسونگ A21</li>
                  <li>سامسونگ A21</li>
                </ol>
              </div>
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-textPrimary  w-full border-b border-bgPrimary/70 pb-3">
          سفارشات ارسال شده
        </h1>
        <table className="w-full my-4 ">
          <thead>
            <tr className="p-3 md:text-base text-sm font-medium text-textPrimary  flex justify-between items-center flex-row-reverse border-b-2 mb-3">
              <td>نام </td>
              <td> کد پستی </td>
              <td>وضعیت </td>
              <td>کد فاکتور</td>
              <td>محصولات </td>
              <td>ادرس </td>
            </tr>
          </thead>
          <tbody>
            <tr className="p-2 text-xs md:text-sm font-light text-textPrimary  flex justify-between items-center flex-row-reverse gap-x-4">
              <td>علی تاجیک</td>
              <td>65656544665456</td>
              <td>ارسال شده</td>

              <td>2652165</td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70 text-textPrimary p-1 px-1 rounded-sm text-xs md:text-sm">
                <button onClick={showOrders}>مشاهده سفارشات</button>
              </td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70 text-textPrimary p-1 px-1 rounded-sm text-xs md:text-sm">
                <button onClick={showAddress}>مشاهده ادرس</button>
              </td>
            </tr>
            {showOrdersID === 25 ? (
              <div className="w-[95%] mx-auto p-1 text-right ">
                <ol className="w-full md:text-base text-sm flex gap-x-5 flex-col justify-end text-textPrimary Light ">
                  <li>سامسونگ A21</li>
                  <li>سامسونگ A21</li>
                  <li>سامسونگ A21</li>
                </ol>
              </div>
            ) : (
              <div></div>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
