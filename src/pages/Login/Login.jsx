import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { MdVisibilityOff } from 'react-icons/md';
import { LoginUserSchema } from '../../Validation/Validation';
import Swal from 'sweetalert2';
import AuthContext from '../../Contexts/AuthContext';
export default function Login() {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const navigate = useNavigate();
  const authContext = useContext(AuthContext);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [error, setErrors] = useState({});
  const InputValidation = async (event) => {
    event.preventDefault();
    let user = {
      email: Email,
      password: Password,
    };
    try {
      const isvalid = await LoginUserSchema.validate(user, {
        abortEarly: false,
      });
      setIsValid(isvalid);
      setErrors('');
    } catch (err) {
      let errors = err.inner.reduce(
        (acc, err) => ({
          ...acc,
          [err.path]: err.message,
        }),
        {}
      );
      setErrors(errors);
    }
  };

  const LoginUser = (event) => {
    event.preventDefault();

    fetch(`http://localhost:3000/users?email=${Email}&password=${Password}`)
      .then((res) => res.json())
      .then((result) => {
        if (result.length !== 0) {
          authContext.login({}, result[0].id);

          Swal.fire({
            title: 'Login was successful',
            icon: 'success',
            confirmButtonText: 'let brows the products',
          }).then(() => {
            navigate('/admin-panel/');
          });
        } else {
          Swal.fire({
            title: "we could'nt find a user with this password and email",
            icon: 'warning',
            confirmButtonText: 'ok lets try again',
          });
        }
      });
  };
  const handlePasswordShow = () => {
    if (visibilityPassword) {
      setVisibilityPassword(false);
    } else {
      setVisibilityPassword(true);
    }
  };
  const forgottenPassword = () => {
    console.log('forgot');
  };

  return (
    <div className="w-auto h-screen flex flex-row-reverse  items-start p-0 m-0 bg-register-page bg-current">
      {/* register form */}
      {/* form header  */}
      <div className="h-full lg:w-6/12 md:w-8/12 sm:w-10/12 w-full flex flex-col items-start justify-evenly lg:p-20  p-8 lg:bg-white   bg-white/85 sm:rounded-l-[80px] ">
        <div className="flex flex-col space-y-1">
          <p className="text-2xl text-bgPrimary font-medium">Login</p>
          <p className="text-base text-bgPrimary font-medium">
            New visitor?
            <Link to={'/register'} className="text-textPrimary">
              {' '}
              Create your account{' '}
            </Link>
            here
          </p>
        </div>
        {/* form header  */}
        {/* inputs */}

        <div className="w-full h-auto flex flex-col items-start justify-between space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none focus:outline-none ring-0 focus:ring-0 border-b border-bgPrimary/50 text-bgPrimary text-lg font-normal p-1 bg-transparent"
            onChange={(event) => {
              setEmail(event.target.value);

              InputValidation(event);
            }}
          />
          <p className="text-base font-normal text-rose-900 text-start">
            {error.email && Email ? error.email : ''}
          </p>
          <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full flex items-center border-b border-bgPrimary/50 p-1">
              <input
                type={visibilityPassword ? 'text' : 'password'}
                placeholder="Password"
                className="w-full outline-none focus:outline-none ring-0 focus:ring-0  text-bgPrimary text-lg font-normal  bg-transparent"
                onChange={(event) => {
                  InputValidation(event);
                  setPassword(event.target.value);
                }}
              />
              {visibilityPassword ? (
                <MdVisibility
                  className="text-bgPrimary/50 w-6 h-6  hover:cursor-pointer"
                  onClick={handlePasswordShow}
                />
              ) : (
                <MdVisibilityOff
                  className="text-bgPrimary/50 w-6 h-6 hover:cursor-pointer"
                  onClick={handlePasswordShow}
                />
              )}
            </div>
            {error.password && Password ? (
              <p className="text-base font-normal text-rose-900 text-start">
                {error.password}
              </p>
            ) : (
              InputValidation
            )}
            <p className="text-sm font-normal ml-auto">
              Click
              <span
                className="text-textPrimary hover:cursor-pointer"
                onClick={forgottenPassword}>
                here{' '}
              </span>
              in case you forget your password
            </p>
          </div>
        </div>
        {/* inputs */}
        {/* terms and button */}

        <button
          className="mx-auto w-72 h-12 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg disabled:bg-textPrimary/70 disabled:hover:bg-textPrimary/70 "
          disabled={!isValid}
          onClick={(e) => LoginUser(e)}>
          Login
        </button>
        {/* terms and button */}
      </div>
      {/* register form */}
    </div>
  );
}
