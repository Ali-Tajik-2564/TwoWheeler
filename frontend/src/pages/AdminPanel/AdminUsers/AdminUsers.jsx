import React, { useContext, useState } from 'react';
import AuthContext from '../../../Contexts/AuthContext';
import Pagination from '../../../components/Pagination/Pagination';
import {
  deleteUserQuery,
  editInfoQuery,
  newUserQuery,
  usersQuery,
} from '../../../hooks/usersQuery';
import Swal from 'sweetalert2';
import { useQueryClient } from '@tanstack/react-query';
export default function AdminUsers() {
  const queryClient = useQueryClient();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [profile, setProfile] = useState({});
  const { data: usersData, isSuccess } = usersQuery();
  const [shownUsers, setShownUsers] = useState();
  const [userRole, setUserRole] = useState('user');
  const { mutate: infoMutate } = editInfoQuery();
  const { mutate: userMutate } = newUserQuery();
  const { mutate: deleteMutate } = deleteUserQuery();

  const userEdit = (userID) => {
    let userInfo = usersData?.filter((user) => user.id === userID);
    Swal.fire({
      title: 'User information',
      showCancelButton: true,
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Full Name" value=${userInfo[0]?.fullName}>
        <input id="swal-input2" class="swal2-input" placeholder="Email" value=${userInfo[0]?.email}>
        <input id="swal-input3" class="swal2-input" placeholder="Roll" value=${userInfo[0]?.roll}>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
          document.getElementById('swal-input3').value,
        ];
      },
    }).then((res) => {
      if (res.value) {
        infoMutate(
          {
            user: userInfo,
            id: userID,
            fullName: res.value[0],
            email: res.value[1],
            roll: res.value[2],
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

  const selectRole = (event) => {
    setUserRole(event.target.value);
  };
  const userRegister = () => {
    let newUser = {
      fullName: username,
      email,
      password,
      profile,
      orderHistory: [],
      roll: userRole,
    };
    userMutate(newUser, {
      onSuccess: () => {
        Swal.fire({
          title: 'new user added successfully ',
          icon: 'success',
          confirmButtonText: 'Great !!',
        }).then(() => {
          queryClient.invalidateQueries('users');
        });
      },
    });
  };
  const deleteUser = (userID) => {
    deleteMutate(userID, {
      onSuccess: () => {
        Swal.fire({
          title: 'user deleted successfully ',
          icon: 'success',
        }).then(() => {
          queryClient.invalidateQueries('users');
        });
      },
    });
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="name"
              className="text-lg font-thin text-textPrimary/75">
              {' '}
              : رمز عبور
            </label>

            <input
              type="text"
              name="password"
              id="password"
              className="w-full p-1 px-2 bg-bgPrimary/20 text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-lg font-thin text-textPrimary/75">
              {' '}
              : پروفایل کاربر{' '}
            </label>

            <input
              type="file"
              name="profile"
              id="profile"
              className="w-full p-1 px-2 bg-bgPrimary/20 text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
              onChange={(e) => setProfile(e.target.files[0])}
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
              <option value="user">user roll</option>
              <option value="admin">ادمین</option>
              <option value="user">کاربر</option>
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
              <td>حذف</td>
              <td>ادیت</td>
            </tr>
          </thead>
          <tbody>
            {shownUsers?.map((user) => (
              <tr className="p-2 text-base font-light  flex justify-between text-textPrimary items-center flex-row-reverse">
                <td>{user.fullName}</td>
                <td>{user.email}</td>
                <td>{user.roll}</td>
                <td className="bg-bgPrimary border-bgPrimary/70 hover:bg-bgPrimary/70  p-1 px-2 rounded-sm">
                  <button onClick={(e) => deleteUser(user.id)}>حذف</button>
                </td>
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
