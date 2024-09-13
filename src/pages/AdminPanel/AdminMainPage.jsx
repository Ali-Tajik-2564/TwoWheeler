import React from 'react';
import { Link } from 'react-router-dom';
import { usersQuery } from '../../hooks/usersQuery';
import productQuery from '../../hooks/productQuery';
export default function AdminMainPage() {
  const { data: usersData } = usersQuery();
  let newUsers = usersData?.slice(0, 3);
  const { data: productData } = productQuery();
  let offProducts = productData?.slice(0, 3);
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
            {newUsers?.map((user) => (
              <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.roll}</td>
                <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                  <Link to="/admin-panel/users/1">
                    <button>ادیت</button>
                  </Link>
                </td>
              </tr>
            ))}
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
            {offProducts?.map((product) => (
              <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
                <td>
                  {product.name} {product.brand}
                </td>
                <td>{product.price}</td>
                <td>0</td>
                <td className=" bg-bgPrimary hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                  <Link to="/admin-panel/products/1">
                    <button>ادیت</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
