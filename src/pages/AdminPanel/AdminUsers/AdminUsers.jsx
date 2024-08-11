import React, { useContext, useState } from 'react';
import AuthContext from '../../../Contexts/AuthContext';

export default function AdminUsers() {
  const [userRole, setUserRole] = useState('');
  const authContext = useContext(AuthContext);

  const useRegister = (event) => {
    event.preventDefault();
    const newUser = {
      username: formState.inputs.username.value,
      email: formState.inputs.email.value,
      password: formState.inputs.password.value,
      confirmPassword: formState.inputs.password.value,
      name: formState.inputs.name.value,
      phone: formState.inputs.phone.value,
      role: userRole,
    };
    fetch('http://localhost:4000/v1/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 403) {
          swal({
            title: 'این شماره تماس بن شده است',
            icon: 'error',
            button: 'ای بابا',
          });
        }
      })
      .then((result) => {
        console.log(result);
        authContext.login(result.user, result.accessToken);
      });
  };
  const selectRole = (event) => {
    setUserRole(event.target.value);
  };
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
            onClick={useRegister}>
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
            <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
              <td>امیر محمد</td>
              <td>ali.1385.tajik@gmail.com</td>
              <td>مدیر</td>
              <td className="bg-bgPrimary border-bgPrimary/70 hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                <button>ادیت</button>
              </td>
            </tr>
            <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
              <td>محمد</td>
              <td>ali.1385.tajik@gmail.com</td>
              <td>کاربر</td>
              <td className="bg-bgPrimary border-bgPrimary/70 hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                <button>ادیت</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
