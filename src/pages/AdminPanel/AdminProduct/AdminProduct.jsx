import React, { useState } from 'react';
import Swal from 'sweetalert2';
import categoryQuery from '../../../hooks/CategoryQuery';
import {
  deleteProductQuery,
  newProductQuery,
  productQuery,
} from '../../../hooks/productQuery';
import { useQueryClient } from '@tanstack/react-query';
import Pagination from '../../../components/Pagination/Pagination';
export default function AdminProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProductMutate } = deleteProductQuery();
  const { mutate: newProductMutate } = newProductQuery();

  const [productName, setProductName] = useState('');
  const [code, setCode] = useState('');
  const [price, setPrice] = useState('');
  const [stock, setStock] = useState('');
  const [color, setColor] = useState('');
  const [brand, setBrand] = useState('');
  const [status, setStatus] = useState('');
  const [DateOfProduction, setDateOfProduction] = useState('');
  const [ProductCategory, setProductCategory] = useState('-1');
  const [productCover, setProductCover] = useState({});
  const { data: productCategories } = categoryQuery();
  const { data: productData, isSuccess } = productQuery();
  const [shownProduct, setShownProduct] = useState();
  const selectCategory = (event) => {
    setProductCategory(event.target.value);
  };

  const addingNewProduct = () => {
    if (ProductCategory === '-1') {
      Swal.fire({
        title: 'please select one category ',
        icon: 'warning',
      });
    } else {
      newProductMutate(
        {
          name: productName,
          status,
          price,
          stock,
          color,
          brand,
          category: ProductCategory,
          dateOfProduction: DateOfProduction,
          pics: productCover.name,
          code,
        },
        {
          onSuccess: () => {
            Swal.fire({
              title: 'product added successfully',
              icon: 'success',
            }).then(() => {
              queryClient.invalidateQueries('products');
            });
          },
        }
      );
    }
  };

  const showDetail = (productID) => {
    const productInfo = productData?.filter(
      (product) => product.id === productID
    );
    Swal.fire({
      title: 'Product information',
      html: `
      <label >Color</label>
      <input id="swal-input1" class="swal2-input" placeholder="Color" value=${productInfo[0]?.color} disabled>
      <label>Status</label>
      <input id="swal-input2" class="swal2-input" placeholder="Status" value=${productInfo[0]?.status} disabled>
      <label>Date of Production</label>
      <input id="swal-input3" class="swal2-input" placeholder="Date of Production" value=${productInfo[0]?.dateOfProduction} disabled>
      <label>Categories</label>
        <input id="swal-input3" class="swal2-input" placeholder="Categories" value=${productInfo[0]?.category} disabled>
      `,
      focusConfirm: false,
    });
  };
  const deleteProduct = (productID) => {
    deleteProductMutate(productID, {
      onSuccess: () => {
        Swal.fire({
          title: 'product deleted successfully ',
          icon: 'success',
        }).then(() => {
          queryClient.invalidateQueries('products');
        });
      },
    });
  };
  return (
    <div className="w-[95%] mx-auto p-1 text-right">
      <h1 className="text-xl font-semibold text-textPrimary w-full border-b border-bgPrimary/70 pb-3">
        اضافه کردن محصول جدید
      </h1>

      <div className="my-5 flex flex-row-reverse flex-wrap justify-between items-center gap-y-5">
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            {' '}
            نام تجاری محصول
          </label>
          <input
            type="text"
            name="password"
            id="name"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            {' '}
            عکس های محصول
          </label>
          <input
            type="file"
            name="password"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            onChange={(event) => {
              setProductCover(event.target.files[0]);
            }}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            {' '}
            قیمت محصول
          </label>
          <input
            type="text"
            name="password"
            id="price"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            {' '}
            موجودی محصول
          </label>
          <input
            type="number"
            name="password"
            id="count"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            {' '}
            وضعیت محصول
          </label>
          <input
            type="text"
            name="password"
            id="count"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            {' '}
            رنگ محصول
          </label>
          <input
            type="text"
            name="password"
            id="count"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            {' '}
            برند محصول
          </label>
          <input
            type="text"
            name="password"
            id="count"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
        </div>
        <div className="flex flex-row-reverse gap-x-2">
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            {' '}
            : دسته بندی محصول{' '}
          </label>
          <select onChange={selectCategory}>
            <option value="-1">categories</option>
            {productCategories?.map((category) => (
              <option value={category.name}>{category.name}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            کد محصول
          </label>

          <input
            type="text"
            name="code"
            id="code"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="text-lg font-thin text-textPrimary/70">
            سال تولید
          </label>

          <input
            type="text"
            name="code"
            id="code"
            className="max-w-[20rem] p-1 px-2 bg-bgPrimary text-textPrimary font-medium text-lg border rounded-md shadow-md focus:outline-none  m-1"
            value={DateOfProduction}
            onChange={(e) => setDateOfProduction(e.target.value)}
          />
        </div>

        <div>
          <button
            className=" mt-4 py-2 px-5 rounded-md   bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-semibold text-base "
            type="submit"
            onClick={addingNewProduct}>
            <span>ثبت محصول</span>
          </button>
        </div>
      </div>
      <h1 className="text-xl font-semibold text-textPrimary w-full border-b border-bgPrimary/70 pb-3 my-4">
        کل محصولات
      </h1>
      <table className="w-full my-4 ">
        <thead>
          <tr className="p-3 md:text-lg text-base font-medium text-textPrimary flex justify-between items-center flex-row-reverse border-b-2 border-bgPrimary/70 mb-3">
            <td>نام محصول</td>
            <td>قیمت اصلی</td>
            <td>تعداد موجودی</td>
            <td>توضیحات</td>
            <td>حذف</td>
          </tr>
        </thead>
        <tbody>
          {shownProduct?.map((product) => (
            <tr className="p-2 text-sm md:text-base font-light text-textPrimary  flex justify-between items-center flex-row-reverse">
              <td>
                {product.name} {product.brand}
              </td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70  text-sm md:text-base p-1 px-2 rounded-sm">
                <button onClick={() => showDetail(product.id)}>
                  دیدن توضیحات
                </button>
              </td>
              <td className=" bg-bgPrimary hover:bg-bgPrimary/70  text-sm md:text-base p-1 px-2 rounded-sm">
                <button onClick={() => deleteProduct(product.id)}>حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isSuccess && (
        <Pagination
          itemCount={5}
          setShownItems={setShownProduct}
          items={productData}
          pathname="/admin-panel/products"
        />
      )}
    </div>
  );
}
