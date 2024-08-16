import { useQuery } from '@tanstack/react-query';
import React from 'react';

export default function productQuery(
  StatusFilter,
  CategoryFilter,
  BrandFilter,
  NameProduct
) {
  return useQuery({
    queryKey: ['product'],
    queryFn: () => {
      return fetch('http://localhost:3000/product')
        .then((res) => res.json())
        .then((result) => result);
    },
    select: (data) => {
      if (StatusFilter && StatusFilter !== '-1') {
        if (CategoryFilter && CategoryFilter !== '-1') {
          if (BrandFilter && BrandFilter !== '-1') {
            return data.filter(
              (product) =>
                product.status === StatusFilter &&
                product.category === CategoryFilter &&
                product.brand === BrandFilter
            );
          } else {
            return data.filter(
              (product) =>
                product.status === StatusFilter &&
                product.category === CategoryFilter
            );
          }
        } else if (BrandFilter && BrandFilter !== '-1') {
          if (CategoryFilter && CategoryFilter !== '-1') {
            return data.filter(
              (product) =>
                product.status === StatusFilter &&
                product.category === CategoryFilter &&
                product.brand === BrandFilter
            );
          } else {
            return data.filter(
              (product) =>
                product.status === StatusFilter && product.brand === BrandFilter
            );
          }
        } else {
          return data.filter((product) => product.status === StatusFilter);
        }
      }
      if (CategoryFilter && CategoryFilter !== '-1') {
        if (StatusFilter && StatusFilter !== '-1') {
          if (BrandFilter && BrandFilter !== '-1') {
            return data.filter(
              (product) =>
                product.status === StatusFilter &&
                product.category === CategoryFilter &&
                product.brand === BrandFilter
            );
          } else {
            return data.filter(
              (product) =>
                product.status === StatusFilter &&
                product.category === CategoryFilter
            );
          }
        } else if (BrandFilter && BrandFilter !== '-1') {
          if (StatusFilter && StatusFilter !== '-1') {
            return data.filter(
              (product) =>
                product.status === StatusFilter &&
                product.category === CategoryFilter &&
                product.brand === BrandFilter
            );
          } else {
            return data.filter(
              (product) =>
                product.category === CategoryFilter &&
                product.brand === BrandFilter
            );
          }
        } else {
          return data.filter((product) => product.category === CategoryFilter);
        }
      }
      if (BrandFilter && BrandFilter !== '-1') {
        if (StatusFilter && StatusFilter !== '-1') {
          if (CategoryFilter && CategoryFilter !== '-1') {
            return data.filter(
              (product) =>
                product.status === StatusFilter &&
                product.category === CategoryFilter &&
                product.brand === BrandFilter
            );
          } else {
            return data.filter(
              (product) =>
                product.status === StatusFilter && product.brand === BrandFilter
            );
          }
        } else if (CategoryFilter && CategoryFilter !== '-1') {
          if (StatusFilter && StatusFilter !== '-1') {
            return data.filter(
              (product) =>
                product.status === StatusFilter &&
                product.category === CategoryFilter &&
                product.brand === BrandFilter
            );
          } else {
            return data.filter(
              (product) =>
                product.category === CategoryFilter &&
                product.brand === BrandFilter
            );
          }
        } else {
          return data.filter((product) => product.brand === BrandFilter);
        }
      }

      if (NameProduct && NameProduct !== null) {
        return data.filter((product) => product.name.includes(NameProduct));
      }
      return data;
    },
  });
}
