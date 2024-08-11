import React, { useState } from 'react';

import { Link } from 'react-router-dom';
export default function AdminProduct() {
  const [productCover, setProductCover] = useState({});
  const [ProductCategory, setProductCategory] = useState('');
  const [ProductGarranty, setProductGarranty] = useState('');
  const [categories, setCategories] = useState([]);
  console.log(productCover);

  const selectCategory = (event) => {
    setProductCategory(event.target.value);
  };
  const selectGarranty = (event) => {
    setProductGarranty(event.target.value);
  };
  return (
    <div className="w-[95%] mx-auto p-1 text-right">
      <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3">
        اضافه کردن محصول جدید
      </h1>

      <div className="my-5 flex flex-row-reverse flex-wrap justify-between items-center gap-y-5">
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-mainPrimaryLight">
            {' '}
            نام تجاری محصول
          </label>
          <input
            type="password"
            dir="rtl"
            name="password"
            id="name"
            className="max-w-[20rem] p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-lg font-thin text-mainPrimaryLight">
            {' '}
            عکس محصول
          </label>
          <input
            type="file"
            dir="rtl"
            name="password"
            className="max-w-[20rem] p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            onChange={(event) => {
              setProductCover(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-mainPrimaryLight">
            {' '}
            قیمت محصول
          </label>
          <input
            type="password"
            dir="rtl"
            name="password"
            id="price"
            className="max-w-[20rem] p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-mainPrimaryLight">
            {' '}
            موجودی محصول
          </label>
          <input
            type="password"
            dir="rtl"
            name="password"
            id="count"
            className="max-w-[20rem] p-1 px-2 bg-primaryText text-mainPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
          />
        </div>
        <div className="flex flex-row-reverse gap-x-2">
          <label
            htmlFor="password"
            className="text-lg font-thin text-mainPrimaryLight">
            {' '}
            : دسته بندی محصول{' '}
          </label>
          <select onChange={selectCategory}>
            {categories.map((category) => (
              <option value={category._id}>{category.title}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-mainPrimaryLight">
            توضیحات محصول
          </label>

          <input
            type="password"
            dir="rtl"
            name="password"
            id="count"
            className="w-64 h-44 p-1 px-2 bg-primaryText text-mainPrimary font-medium text-sm border rounded-md shadow-md focus:outline-none  m-1 text-right"
          />
        </div>
        <div className="flex flex-row-reverse gap-x-2">
          <label
            htmlFor="password"
            className="text-lg font-thin text-mainPrimaryLight">
            {' '}
            : گارانتی محصول
          </label>
          <select onChange={selectGarranty}>
            <option value="3"> 3 ماهه</option>
            <option value="6">6 ماهه</option>
            <option value="12">1 ساله</option>
          </select>
        </div>
        <div>
          <button
            className="text-lg font-medium mt-4 py-2 px-5 rounded-md "
            type="submit"
            //   onClick={useLogin}
          >
            <span>ثبت محصول</span>
          </button>
        </div>
      </div>
      <h1 className="text-xl font-semibold text-mainPrimary w-full border-b border-mainPrimaryLight pb-3 my-4">
        کل محصولات
      </h1>
      <table className="w-full my-4 ">
        <thead>
          <tr className="p-3 md:text-lg text-base font-medium text-mainPrimary flex justify-between items-center flex-row-reverse border-b-2 mb-3">
            <td>نام محصول</td>
            <td>قیمت اصلی</td>
            <td>تعداد موجودی</td>
            <td>توضیحات</td>
            <td>حذف</td>
          </tr>
        </thead>
        <tbody>
          <tr className="p-2 text-sm md:text-base font-light  flex justify-between items-center flex-row-reverse">
            <td>گوشی A71 سامسونگ</td>
            <td>6.000.000</td>
            <td>60</td>
            <td className=" bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText text-sm md:text-base p-1 px-2 rounded-sm">
              <button>دیدن توضیحات</button>
            </td>
            <td className=" bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText text-sm md:text-base p-1 px-2 rounded-sm">
              <button>حذف</button>
            </td>
          </tr>
          <tr className="p-2 text-sm md:text-base font-light  flex justify-between items-center flex-row-reverse">
            <td>گوشی A71 سامسونگ</td>
            <td>6.000.000</td>
            <td>60</td>
            <td className=" bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText text-sm md:text-base p-1 px-2 rounded-sm">
              <button>دیدن توضیحات</button>
            </td>
            <td className=" bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText text-sm md:text-base p-1 px-2 rounded-sm">
              <button>حذف</button>
            </td>
          </tr>
          <tr className="p-2 text-sm md:text-base font-light  flex justify-between items-center flex-row-reverse">
            <td>گوشی A71 سامسونگ</td>
            <td>6.000.000</td>
            <td>60</td>
            <td className=" bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText text-sm md:text-base p-1 px-2 rounded-sm">
              <button>دیدن توضیحات</button>
            </td>
            <td className=" bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText text-sm md:text-base p-1 px-2 rounded-sm">
              <button>حذف</button>
            </td>
          </tr>
          <tr className="p-2 text-sm md:text-base font-light  flex justify-between items-center flex-row-reverse">
            <td>گوشی A71 سامسونگ</td>
            <td>6.000.000</td>
            <td>60</td>
            <td className=" bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText text-sm md:text-base p-1 px-2 rounded-sm">
              <button>دیدن توضیحات</button>
            </td>
            <td className=" bg-mainPrimaryLight hover:bg-mainPrimary text-primaryText text-sm md:text-base p-1 px-2 rounded-sm">
              <button>حذف</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
