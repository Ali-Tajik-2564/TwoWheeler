import React, { useState } from 'react';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import ProductBox from '../../components/ProductBox/ProductBox';
import Pagination from '../../components/Pagination/Pagination';
import categoryQuery from '../../hooks/CategoryQuery';
import brandQuery from '../../hooks/brandQuery';
import productQuery from '../../hooks/productQuery';

export default function ShowRoom() {
  const [ShownProduct, setShownProduct] = useState();
  const [StatusFilter, setStatusFilter] = useState();
  const [CategoryFilter, setCategoryFilter] = useState();
  const [BrandFilter, setBrandFilter] = useState();
  const [NameProduct, setNameProduct] = useState(null);
  const { data: CategoryData } = categoryQuery();
  const { data: BrandData } = brandQuery();
  const { data: productData } = productQuery(
    StatusFilter,
    CategoryFilter,
    BrandFilter,
    NameProduct
  );

  const ClearFilter = () => {
    setNameProduct('');
    setStatusFilter('-1');
    setBrandFilter('-1');
    setCategoryFilter('-1');
  };
  return (
    <div className="bg-articles-page  bg-cover w-full h-auto flex item-center justify-center py-5 ">
      <div className="md:w-4/5 w-10/12 h-auto bg-white/80  px-4 py-7   flex flex-col items-center space-y-4">
        {/* filter box */}
        <div className="w-full h-auto flex flex-col items-start justify-start rounded-lg bg-bgPrimary md:p-4 p-2 space-y-5">
          {/* filter header */}
          <p className="w-full p-1 text-textPrimary font-semibold text-xl">
            SEARCH INVENTORY
          </p>
          {/* filter header */}
          <div className="flex lg:flex-row flex-col w-full h-full justify-evenly max-md:space-y-6">
            <div className=" lg:w-2/3 w-full  grid md:grid-cols-2 grid-cols-1 grid-rows-3 md:gap-x-5 md:gap-y-5 gap-x-3 gap-y-3 h-full ">
              <select
                name="status"
                className="outline-none ring-0 focus:outline-none focus:ring-0 rounded-md md:font-medium font-light text-bgPrimary p-1"
                onChange={(e) => setStatusFilter(e.target.value)}
                value={StatusFilter}>
                <option value="-1">Status</option>
                <option value="new">new</option>
                <option value="used">used</option>
              </select>
              <select
                name="All Brand"
                className="outline-none ring-0 focus:outline-none focus:ring-0 rounded-md md:font-medium font-light text-bgPrimary p-1"
                onChange={(e) => setBrandFilter(e.target.value)}
                value={BrandFilter}>
                <option value="-1">All Brand</option>
                {BrandData?.map((brand) => (
                  <option value={brand.name}>{brand.name}</option>
                ))}
              </select>
              <select
                name="All category"
                className="outline-none ring-0 focus:outline-none focus:ring-0 rounded-md md:font-medium font-light text-bgPrimary p-1"
                onChange={(e) => setCategoryFilter(e.target.value)}
                value={CategoryFilter}>
                <option value="-1">All category</option>
                {CategoryData?.map((category) => (
                  <option value={category.name}>{category.name}</option>
                ))}
              </select>
              <input
                type="text"
                className="outline-none ring-0 focus:outline-none focus:ring-0 rounded-md md:font-medium font-light text-bgPrimary p-1"
                placeholder="Select model manually"
                onChange={(e) => setNameProduct(e.target.value)}
                value={NameProduct}
              />
            </div>

            <div className="lg:w-1/3 w-full h-full flex lg:flex-col max-lg:flex-row  items-start   lg:space-y-4 space-x-4  ">
              <button className="mx-auto w-32 h-10 p-1 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-medium text-lg ">
                Search
              </button>
              <button
                className="mx-auto w-32 h-10 p-1 rounded-md bg-textPrimary hover:bg-textPrimary/90 text-bgPrimary font-medium text-lg "
                onClick={ClearFilter}>
                Clear filters
              </button>
            </div>
          </div>
        </div>
        {/* filter box */}
        <div className="w-full h-full flex items-start justify-evenly flex-wrap  gap-y-4 p-1">
          {ShownProduct?.map((product) => (
            <Link to={`/item/${product.id}`}>
              <ProductBox {...product} />
            </Link>
          ))}
        </div>{' '}
        {productData && (
          <Pagination
            pathname="/motorcycle-show"
            items={productData}
            itemCount={9}
            setShownItems={setShownProduct}
          />
        )}
      </div>
    </div>
  );
}
