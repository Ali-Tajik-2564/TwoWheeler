import React, { useContext, useState } from 'react';
import AuthContext from '../../../Contexts/AuthContext';
import Pagination from '../../../components/Pagination/Pagination';
import { usersQuery } from '../../../hooks/usersQuery';

export default function AdminUsers() {
  const { data: usersData, isSuccess } = usersQuery();
  const [shownUsers, setShownUsers] = useState();
  const [userRole, setUserRole] = useState('');
  const userEdit = (e) => {
    e.preventDefault();
  };
  const selectRole = (event) => {
    setUserRole(event.target.value);
  };
  const userRegister = () => {};

  return (
    <div className="w-[95%] mx-auto p-1 text-right">
      <div>
        <h1 className="text-xl font-semibold text-textPrimary w-full border-b border-bgPrimary pb-3">
          اد کردن کاربر
        </h1>
        <div className="     my-5 flex flex-row-reverse flex-wrap justify-between items-center gap-5">
          <div>
            <label
              htmlFor="name"
              className="text-lg font-thin text-textPrimary/75">
              {' '}
              : نام و نام خانوادگی
            </label>

            <input
              type="text"
              name="name"
              id="username"
              className="w-full p-1 px-2 bg-bgPrimary/20 text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-lg font-thin text-textPrimary/75">
              {' '}
              : شماره تلفن
            </label>

            <input
              type="text"
              name="phone"
              id="phone"
              className="w-full p-1 px-2 bg-bgPrimary/20 text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-lg font-thin text-textPrimary/75">
              {' '}
              : پست الکترونیک{' '}
            </label>

            <input
              type="email"
              name="email"
              id="email"
              className="w-full p-1 px-2 bg-bgPrimary/20 text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-lg font-thin text-textPrimary/75">
              {' '}
              :رمز عبور{' '}
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full p-1 px-2 bg-bgPrimary/20 text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            />
          </div>
          <div className="flex flex-row-reverse gap-x-2">
            <label
              htmlFor="password"
              className="text-lg font-thin text-textPrimary/75">
              {' '}
              : نقش کاربر
            </label>
            <select onChange={selectRole}>
              <option value="ADMIN">ادمین</option>
              <option value="USER">کاربر</option>
            </select>
          </div>

          <button
            className=" mt-4 py-2 px-5 rounded-md   bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base "
            type="submit"
            onClick={userRegister}>
            <span>ثبت نام</span>
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-xl font-semibold text-textPrimary w-full border-b border-bgPrimary/70 pb-3">
          کاربران سایت
        </h1>

        <table className="w-full my-4 ">
          <thead>
            <tr className="p-3 text-lg font-medium text-textPrimary flex justify-between items-center flex-row-reverse border-b-2 border-bgPrimary/70 mb-3">
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
              <td className="bg-bgPrimary border-bgPrimary/70 hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                <button>ادیت</button>
              </td>
            </tr>
            {shownUsers?.map((user) => (
              <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.roll}</td>
                <td className="bg-bgPrimary border-bgPrimary/70 hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                  <button onClick={(e) => userEdit(user.id)}>ادیت</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isSuccess && (
          <Pagination
            itemCount={5}
            setShownItems={setShownUsers}
            items={usersData}
            pathname="/admin-panel/users"
          />
        )}
      </div>
    </div>
  );
}
