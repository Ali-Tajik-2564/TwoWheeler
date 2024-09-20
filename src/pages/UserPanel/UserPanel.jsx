import React, { useContext } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import {
  usersQuery,
  editPasswordQuery,
  editInfoQuery,
  editProfileImg,
} from '../../hooks/usersQuery';
import Swal from 'sweetalert2';
import AuthContext from '../../Contexts/AuthContext';
export default function UserPanel() {
  const userID = JSON.parse(localStorage.getItem('user'));
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const { data: userData, isSuccess } = usersQuery(userID);
  const { mutate: passwordMutate } = editPasswordQuery();
  const { mutate: infoMutate } = editInfoQuery();
  const { mutate: profileMutate } = editProfileImg();

  const profileEdit = () => {
    Swal.fire({
      title: 'please choose your profile image ',
      input: 'file',
      confirmButtonText: 'Done !',
    }).then((result) => {
      profileMutate(
        {
          user: userData,
          id: userID,
          profile: result.value.name,
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
    });
  };
  const InfoEdit = () => {
    Swal.fire({
      title: 'please enter your new full Name and Email',

      html: `   <input type="text" id="swal-input1" class="swal2-input" placeholder="full name">
    <input type="email" id="swal-input2" class="swal2-input" placeholder=" email">`,
      confirmButtonText: 'Done !',
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value,
        ];
      },
    }).then((result) => {
      infoMutate(
        {
          user: userData,
          id: userID,
          fullName: result.value[0],
          email: result.value[1],
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
    });
  };
  const Logout = () => {
    Swal.fire({
      title: 'you have logged out successfully ',
      icon: 'success',
      confirmButtonText: 'thank you',
    }).then((result) => {
      authContext.logout();
      navigate('/');
    });
  };
  const PasswordEdit = () => {
    Swal.fire({
      title: 'please enter your new password',
      input: 'text',
      inputAutoFocus: true,
      inputPlaceholder: 'Your Password',
      confirmButtonText: 'Done !',
    }).then((result) => {
      passwordMutate(
        {
          user: userData,
          id: userID,
          password: result.value,
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
    });
  };
  return (
    <div className="w-full h-auto flex flex-col item-center justify-normal p-6 space-y-10">
      {isSuccess && (
        <>
          <button
            onClick={InfoEdit}
            className=" md:w-48 w-auto ml-auto px-4 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base  text-center">
            Edit Profile
          </button>
          {/* LG profile */}

          <div className="w-full h-auto lg:flex justify-between item-start py-10 mb-5  hidden">
            <ul className="w-1/4 flex flex-col items-start justify-start space-y-6">
              <Link to="" className="w-full h-auto">
                <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                  <p>My Account</p>
                  <IoIosArrowForward />
                </li>
              </Link>
              <Link onClick={PasswordEdit} className="w-full h-auto">
                <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                  <p>Change Password</p>
                  <IoIosArrowForward />
                </li>
              </Link>
              <Link to="/orderHistory" className="w-full h-auto">
                <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                  <p>Order History</p>
                  <IoIosArrowForward />
                </li>
              </Link>
              <Link to="" className="w-full h-auto" onClick={profileEdit}>
                <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                  <p>Edit Photo</p>
                  <IoIosArrowForward />
                </li>
              </Link>
              <Link to="" className="w-full h-auto" onClick={Logout}>
                <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                  <p>Log out</p>
                  <IoIosArrowForward />
                </li>
              </Link>
            </ul>
            {userData[0]?.profile ? (
              <img
                src={`.././${userData[0]?.profile}`}
                alt=""
                className="rounded-full w-64 h-auto bg-contain "
              />
            ) : (
              <img
                src=".././noProfileIcon.png"
                alt=""
                className="rounded-full w-64 h-auto bg-contain "
              />
            )}

            <div className="flex flex-col items-start justify-between space-y-5 h-auto w-1/3 ">
              <div className="flex items-center w-full justify-between space-x-3">
                <label
                  htmlFor="input"
                  className="text-bgPrimary font-semibold text-sm w-1/3">
                  Full Name{' '}
                </label>

                <input
                  type="text"
                  placeholder="Number "
                  className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                  disabled
                  value={userData[0]?.fullName}
                />
              </div>
              <div className="flex items-center w-full justify-between space-x-3">
                <label
                  htmlFor="input"
                  className="text-bgPrimary font-semibold text-sm w-1/3">
                  Email{' '}
                </label>

                <input
                  type="text"
                  className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                  disabled
                  value={userData[0]?.email}
                />
              </div>
              <div className="flex items-center w-full justify-between space-x-3">
                <label
                  htmlFor="input"
                  className="text-bgPrimary font-semibold text-sm min-w-2/4">
                  Password
                </label>

                <input
                  type="text"
                  placeholder="Number "
                  className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                  disabled
                  value={userData[0]?.password}
                />
              </div>
            </div>
          </div>
          {/* LG profile */}
          {/* MD Profile  */}
          <div className="w-full h-auto max-lg:flex flex-col justify-center item-center py-10 mb-5  hidden space-y-8">
            {userData[0]?.profile ? (
              <img
                src={`.././${userData[0]?.profile}`}
                alt=""
                className="rounded-full w-64 h-auto bg-contain mx-auto"
              />
            ) : (
              <img
                src=".././noProfileIcon.png"
                alt=""
                className="rounded-full w-64 h-auto bg-contain mx-auto"
              />
            )}
            <div className="flex items-center justify-between space-x-4 md:flex-row flex-col space-y-10 md:space-y-0">
              <div className="md:w-1/2 w-full flex flex-col items-start justify-between space-y-5 h-auto  ">
                <div className="flex items-center w-full justify-between space-x-3">
                  <label
                    htmlFor="input"
                    className="text-bgPrimary font-semibold text-sm w-1/3">
                    Full Name{' '}
                  </label>

                  <input
                    type="text"
                    placeholder="Number "
                    className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                    disabled
                    value={userData[0]?.fullName}
                  />
                </div>
                <div className="flex items-center w-full justify-between space-x-3">
                  <label
                    htmlFor="input"
                    className="text-bgPrimary font-semibold text-sm w-1/3">
                    Email{' '}
                  </label>

                  <input
                    type="text"
                    placeholder="Email "
                    className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                    disabled
                    value={userData[0]?.email}
                  />
                </div>
                <div className="flex items-center w-full justify-between space-x-3">
                  <label
                    htmlFor="input"
                    className="text-bgPrimary font-semibold text-sm min-w-2/4">
                    Password
                  </label>

                  <input
                    type="text"
                    placeholder="Number "
                    className="focus:ring-0 focus:outline-none w-full text-bgPrimary/50 rounded-md font-medium text-base border border-bgPrimary/50  p-1  bg-white"
                    disabled
                    value={userData[0]?.password}
                  />
                </div>
              </div>
              <ul className="md:w-1/2 w-full flex flex-col items-start justify-start space-y-6">
                <Link to="" className="w-full h-auto">
                  <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                    <p>My Account</p>
                    <IoIosArrowForward />
                  </li>
                </Link>
                <Link onClick={PasswordEdit} className="w-full h-auto">
                  <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                    <p>Change Password</p>
                    <IoIosArrowForward />
                  </li>
                </Link>
                <Link to="/orderHistory" className="w-full h-auto">
                  <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                    <p>Order History</p>
                    <IoIosArrowForward />
                  </li>
                </Link>
                <Link onClick={profileEdit} className="w-full h-auto">
                  <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                    <p>Edit Photo</p>
                    <IoIosArrowForward />
                  </li>
                </Link>
                <Link onClick={Logout} className="w-full h-auto">
                  <li className="flex items-center justify-between w-full h-auto border-b border-bgPrimary text-bgPrimary font-medium text-lg p-2 hover:text-bgPrimary/50 hover:border-bgPrimary/50">
                    <p>Log Out</p>
                    <IoIosArrowForward />
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* MD Profile  */}
        </>
      )}
    </div>
  );
}
