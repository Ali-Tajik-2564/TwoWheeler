import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../../Contexts/AuthContext';
import Swal from 'sweetalert2';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxCross2 } from 'react-icons/rx';
export default function AdminSideBar({ onSlideShow, setOnSlideShow }) {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();
  const handleClose = () => setOnSlideShow(false);
  const handleShow = () => setOnSlideShow(true);
  const useLogOut = (event) => {
    event.preventDefault();
    Swal.fire({
      title: 'خروج شما با موفقیت انجام شد',
      icon: 'success',
      confirmButtonText: 'حله',
    }).then(() => {
      authContext.logout();
      navigate('/');
    });
  };
  return (
    <div>
      <div className=" w-full hidden lg:block  h-screen sticky top-0 right-0  bg-bgPrimary/60  text-right rounded-l-md">
        <div className="w-[97%] mx-auto border-b-2 border-bgPrimary  h-auto p-3 pb-2 flex items-center justify-between flex-row-reverse">
          <span className="text-xl font-semibold text-textPrimary">
            TwoWheeler
          </span>
        </div>
        <ul className="flex flex-col items-end justify-start  mt-3 text-right gap-y-4 w-full">
          <Link to="/admin-panel" className="w-full ">
            <li className="text-textPrimary w-full   border-bgPrimary text-lg font-medium py-2 px-3   hover:text-textPrimary/65">
              پنل مدیریت
            </li>
          </Link>
          <Link to="users/1">
            <li className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65">
              کاربران
            </li>
          </Link>
          <Link to="products/1">
            <li className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65">
              محصولات
            </li>
          </Link>
          <Link to="articles/1">
            <li className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65">
              مقاله ها
            </li>
          </Link>
          <Link to="orders/1">
            <li className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65">
              سفارشات
            </li>
          </Link>

          <li
            className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65 cursor-pointer"
            onClick={useLogOut}>
            خروج
          </li>
        </ul>
      </div>
      <div className=" w-full block lg:hidden  h-screen sticky top-0 right-0    text-right rounded-l-md">
        {onSlideShow && (
          <Offcanvas
            show={onSlideShow}
            onHide={handleClose}
            placement="end"
            dir="rtl">
            <Offcanvas.Header
              closeButton
              className="bg-bgborder-bgPrimaryLight">
              <Offcanvas.Title className="  w-full  flex flex-row-reverse justify-between items-center ">
                <RxCross2
                  onClick={() => handleClose()}
                  className="hover:text-gray-700 text-textPrimary p-1 cursor-pointer rounded-md border border-bgPrimary  shadow-sm w-8 h-8"
                />
                <img src=".././logo-1.png" className="w-24" alt="" />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body dir="rtl" className="primary-gradient">
              <ul className=" flex flex-col items-start justify-start  mt-3 text-right gap-y-4 w-full">
                <Link
                  to="/admin-panel"
                  className="w-full "
                  onClick={() => handleClose()}>
                  <li className="text-textPrimary w-full  bg-bgborder-bgPrimary text-lg font-medium py-2 px-3   hover:text-textPrimary/65">
                    پنل مدیریت
                  </li>
                </Link>
                <Link to="users" onClick={() => handleClose()}>
                  <li className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65">
                    کاربران
                  </li>
                </Link>
                <Link to="products" onClick={() => handleClose()}>
                  <li className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65">
                    محصولات
                  </li>
                </Link>
                <Link to="articles/1" onClick={() => handleClose()}>
                  <li className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65">
                    مقاله ها
                  </li>
                </Link>
                <Link to="orders/1" onClick={() => handleClose()}>
                  <li className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65">
                    سفارشات
                  </li>
                </Link>

                <li
                  className="text-textPrimary text-lg font-medium p-1 mr-3 hover:text-textPrimary/65 cursor-pointer"
                  onClick={useLogOut}>
                  خروج
                </li>
              </ul>
            </Offcanvas.Body>
          </Offcanvas>
        )}
      </div>
    </div>
  );
}
