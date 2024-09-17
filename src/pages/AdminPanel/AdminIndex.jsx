import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSideBar from '../../components/AdminPanel/SideBar/AdminSideBar';
import CmsTopBar from '../../components/CmsTopBar/CmsTopBar';
export default function AdminIndex() {
  const [profileClick, setProfileClick] = useState(false);
  console.log(profileClick);
  return (
    <div className=" flex  flex-row-reverse items-start bg-bgPrimary/60 ">
      <span className="lg:block hidden w-1/5  min-w-[15rem] ">
        <AdminSideBar
          onSlideShow={profileClick}
          setOnSlideShow={setProfileClick}
        />
      </span>
      <div className="w-full lg:w-4/5 flex flex-col shadow-md bg-bgPrimary/60 rounded-md m-4">
        <span className="w-full">
          <CmsTopBar setOnSlideShow={setProfileClick} />
        </span>
        <Outlet />
      </div>
    </div>
  );
}
