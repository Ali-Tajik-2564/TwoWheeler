import React from 'react';
import { Link } from 'react-router-dom';
export default function AdminMainPage() {
  return (
    <div>
      <div className="w-[95%] mx-auto p-1 text-right">
        <h1 className="text-xl font-semibold text-textPrimary w-full border-b border-bgPrimary/70 pb-3">
          جدید ترین کاربران
        </h1>

        <table className="w-full my-4 ">
          <thead>
            <tr className="p-3 text-lg font-medium text-textPrimary flex justify-between items-center flex-row-reverse border-b-2 border-bgPrimary/70 mb-3 ">
              <td>نام نام خانوادگی</td>
              <td>پست الکترونیک</td>
              <td>عنوان</td>
              <td>ادیت</td>
            </tr>
          </thead>
          <tbody>
            <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
              <td>علی تاجیک</td>
              <td>ali.1385.tajik@gmail.com</td>
              <td>مدیر</td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                <Link to="/admin-panel/users">
                  <button>ادیت</button>
                </Link>
              </td>
            </tr>
            <tr className="p-2 text-base font-light  flex justify-between text-textPrimary  items-center flex-row-reverse">
              <td>امیر محمد</td>
              <td>ali.1385.tajik@gmail.com</td>
              <td>مدیر</td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70 p-1 px-2 rounded-sm">
                <Link to="/admin-panel/users">
                  <button>ادیت</button>
                </Link>
              </td>
            </tr>
            <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
              <td>محمد</td>
              <td>ali.1385.tajik@gmail.com</td>
              <td>کاربر</td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                <Link to="/admin-panel/users">
                  <button>ادیت</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-[95%] mx-auto p-1 text-right">
        <h1 className="text-xl font-semibold text-textPrimary w-full border-b border-bgPrimary/70 pb-3">
          جدید ترین تخفیف ها
        </h1>
        <table className="w-full my-4 ">
          <thead>
            <tr className="p-3 text-lg font-medium text-textPrimary flex justify-between items-center flex-row-reverse border-b-2 border-bgPrimary/70 mb-3">
              <td>نام محصول</td>
              <td>قیمت اصلی</td>
              <td>درصد تخفیف</td>
              <td>ادیت</td>
            </tr>
          </thead>
          <tbody>
            <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
              <td>گوشی A71 سامسونگ</td>
              <td>6.000.000</td>
              <td>60</td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                <Link to="/admin-panel/offs">
                  <button>ادیت</button>
                </Link>
              </td>
            </tr>
            <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
              <td>iphone 15</td>
              <td>15.000.000</td>
              <td>35</td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                <Link to="/admin-panel/offs">
                  <button>ادیت</button>
                </Link>
              </td>
            </tr>
            <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
              <td>لپتاپ ایسوس</td>
              <td>45.000.000</td>
              <td>15</td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                <Link to="/admin-panel/offs">
                  <button>ادیت</button>
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
