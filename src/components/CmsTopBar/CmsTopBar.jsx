import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import { usersQuery } from '../../hooks/usersQuery';

export default function CmsTopBar({ setOnSlideShow }) {
  const windowWidth = window.innerWidth;
  const userID = JSON.parse(localStorage.getItem('user'));
  const { data: adminData, isSuccess } = usersQuery(userID);

  useEffect(() => {
    if (windowWidth <= 1024) {
      Swal.fire({
        title:
          'به پنل مدیریت خوش امدید برای دسترسی به تمام صفحات روی پروفایل خود کلیک کنید',
        icon: 'success',
        confirmButtonText: 'مرسی',
      });
    }
  }, []);
  return (
    <div className="w-full h-auto  sticky top-0 flex flex-row-reverse items-center justify-between px-4 p-3 mb-4">
      {isSuccess && (
        <>
          <div className="flex flex-row-reverse items-center justify-center gap-3">
            <img
              src={`../.././${adminData[0]?.profile}`}
              className="w-14 h-14 rounded-full shadow-sm cursor-pointer"
              alt=""
              onClick={() => setOnSlideShow(true)}
            />
            <span className="flex flex-col items-center ">
              <h2 className="text-lg font-semibold text-textPrimary">
                {adminData[0]?.fullName}
              </h2>
              <p className="text-base font-medium text-textPrimary/90">مدیر</p>
            </span>
          </div>
        </>
      )}
    </div>
  );
}
