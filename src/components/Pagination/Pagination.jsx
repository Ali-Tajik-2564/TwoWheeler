import React, { useEffect, useState } from 'react';

import { useParams, Link } from 'react-router-dom';
import { IoIosArrowDropleft } from 'react-icons/io';
import { IoIosArrowDropright } from 'react-icons/io';

export default function Pagination({
  pathname,
  items,
  itemCount,
  setShownItems,
}) {
  const [pageCount, setPageCount] = useState(null);
  const { page } = useParams();
  console.log(page);

  useEffect(() => {
    let endIndex = itemCount * page;
    let startIndex = endIndex - itemCount;
    let paginatedItems = items.slice(startIndex, endIndex);
    setShownItems(paginatedItems);

    let pageNumber = Math.ceil(items.length / itemCount);
    setPageCount(pageNumber);
  }, [page, items]);
  return (
    <div className="flex item-center justify-center w-full h-auto p-4">
      <ul className="flex items-center justify-center space-x-6 text-bgPrimary text-lg font-medium  w-full h-auto pt-2">
        {Number(page) !== 1 && (
          <li>
            <Link to={`${pathname}/${Number(page) - 1}`}>
              <IoIosArrowDropleft className="w-6 h-6 hover:text-bgPrimary/70" />
            </Link>
          </li>
        )}

        {Array(pageCount)
          .fill(0)
          .map((item, index) => (
            <li>
              {index + 1 === Number(page) ? (
                <Link
                  to={`${pathname}/${index + 1}`}
                  className="bg-slate-200 text-lg rounded-md p-2">
                  {index + 1}
                </Link>
              ) : (
                <Link
                  to={`${pathname}/${index + 1}`}
                  className="w-6 h-6 hover:text-bgPrimary/70">
                  {index + 1}
                </Link>
              )}
            </li>
          ))}

        {Number(page) !== pageCount && (
          <li>
            <Link to={`${pathname}/${Number(page) + 1}`}>
              <IoIosArrowDropright className="w-6 h-6 hover:text-bgPrimary/70 " />
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
