import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdVisibility } from 'react-icons/md';
import { MdVisibilityOff } from 'react-icons/md';
import { userSchema } from '../../Validation/Validation';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import { UserRegisterQuery, usersQuery } from '../../hooks/usersQuery';
export default function Register() {
  const [visibilityPassword, setVisibilityPassword] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [agreedTerms, setAgreeTerms] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const [error, setErrors] = useState({});
  const [FullName, setFullName] = useState(null);
  const [Email, setEmail] = useState(null);
  const [Password, setPassword] = useState(null);
  const { usersData, isSuccess } = usersQuery();

  const authContext = useContext(AuthContext);
  const { mutate: userMutate } = UserRegisterQuery();
  let id = crypto.randomUUID().slice(0, 6);
  const InputValidation = async (event) => {
    event.preventDefault();
    let user = {
      fullName: FullName,
      email: Email,
      password: Password,
    };
    try {
      const isvalid = await userSchema.validate(user, {
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

  const submitUser = () => {
    Swal.fire({
      title: 'Registration was successful',
      icon: 'success',
      confirmButtonText: 'let brows the products',
    })
      .then(() => {
        userMutate({
          id,
          fullName: FullName,
          email: Email,
          password: Password,
          profile: '',

          roll: 'user',
        });
        authContext.login(id, {
          id,
          fullName: FullName,
          email: Email,
          password: Password,
          profile: '',

          roll: 'user',
        });
        setIsRegistered(true);
      })
      .then(() => {
        // let userData = usersData?.filter((user) => user.email === Email);
      });
  };

  const handlePasswordShow = () => {
    if (visibilityPassword) {
      setVisibilityPassword(false);
    } else {
      setVisibilityPassword(true);
    }
  };

  const handleAgreeTerms = () => {
    if (agreedTerms) {
      setAgreeTerms(false);
    } else {
      setAgreeTerms(true);
    }
  };

  return (
    <div className="w-auto h-screen flex flex-row-reverse  items-start p-0 m-0 bg-register-page bg-current">
      {!isRegistered ? (
        <div className="h-full lg:w-6/12 md:w-8/12 sm:w-10/12 w-full flex flex-col items-start justify-evenly lg:p-20  p-8 lg:bg-white   bg-white/85 sm:rounded-l-[80px] ">
          {/* register form */}

          {/* form header  */}
          <div className="flex flex-col space-y-1">
            <p className="text-2xl text-bgPrimary font-medium">
              Create an account
            </p>
            <p className="text-base text-bgPrimary font-medium">
              Already have an account?
              <Link to={'/login'} className="text-textPrimary">
                {' '}
                Login{' '}
              </Link>
              here
            </p>
          </div>
          {/* form header  */}
          {/* inputs */}
          <div className="w-full h-auto flex flex-col items-start justify-between space-y-4">
            <input
              type="text"
              value={FullName}
              placeholder="Full Name"
              className="w-full outline-none focus:outline-none ring-0 focus:ring-0 border-b border-bgPrimary/50 text-bgPrimary text-lg font-normal p-1 bg-transparent"
              onChange={(e) => {
                setFullName(e.target.value);

                InputValidation(e);
              }}
            />
            <p className="text-base font-normal text-rose-900 text-start">
              {error.fullName && FullName ? error.fullName : ''}
            </p>

            <input
              type="email"
              value={Email}
              placeholder="Email"
              className="w-full outline-none focus:outline-none ring-0 focus:ring-0 border-b border-bgPrimary/50 text-bgPrimary text-lg font-normal p-1 bg-transparent"
              onChange={(e) => {
                setEmail(e.target.value);

                InputValidation(e);
              }}
            />
            <p className="text-base font-normal text-rose-900 text-start">
              {error.email && Email ? error.email : ''}
            </p>

            <div className="w-full flex items-center border-b border-bgPrimary/50 p-1">
              <input
                type={visibilityPassword ? 'text' : 'password'}
                value={Password}
                placeholder="Password"
                className="w-full outline-none focus:outline-none ring-0 focus:ring-0  text-bgPrimary text-lg font-normal  bg-transparent"
                onChange={(e) => {
                  setPassword(e.target.value);

                  InputValidation(e);
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
            <p className="text-base font-normal text-rose-900 text-start">
              {error.password && Password ? error.password : ''}
            </p>
          </div>
          {/* inputs */}
          {/* terms and button */}
          <div className="flex item space-x-5 text-bgPrimary font-normal text-sm">
            <input
              type="checkbox"
              onClick={handleAgreeTerms}
              className="bg-transparent"
            />
            <p>I agree to store’s Terms and Conditions</p>
          </div>
          <button
            className="mx-auto w-72 h-12 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg disabled:bg-textPrimary/70 disabled:hover:bg-textPrimary/70"
            disabled={!isValid}
            onClick={submitUser}>
            Register Account
          </button>
          {/* terms and button */}
          {/* register form */}
        </div>
      ) : (
        <div className="h-full lg:w-6/12 md:w-8/12 sm:w-10/12 w-full flex flex-col items-center justify-between sm:p-24  p-20 lg:bg-white   bg-white/85 sm:rounded-l-[80px] ">
          {/* Registration message */}
          <p className="text-3xl text-bgPrimary font-semibold">
            Registration success!
          </p>
          <p className="text-bgPrimary font-normal text-lg">
            We sent you an email to verify your account, please check in your
            inbox or spam.
          </p>
          <p className="text-bgPrimary font-normal text-lg">
            You will be automatically directed to login page after completing
            verification.
          </p>
          <button className="mx-auto w-72 h-12 p-2 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-lg ">
            <Link to="/">Done</Link>
          </button>{' '}
          {/* Registration message */}
        </div>
      )}
    </div>
  );
}
