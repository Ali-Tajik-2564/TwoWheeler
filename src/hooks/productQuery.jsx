import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React from 'react';

const productQuery = (
  StatusFilter,
  CategoryFilter,
  BrandFilter,
  NameProduct
) => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => {
      return fetch('https://twowheeler-backend.liara.run/product')
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
    refetchInterval: 2000,
  });
};
const newProductQuery = () => {
  return useMutation({
    mutationFn: (newProductData) => {
      fetch(`https://twowheeler-backend.liara.run/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProductData),
      }).then((res) => res.json());
    },
  });
};
const deleteProductQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (productID) => {
      fetch(`https://twowheeler-backend.liara.run/product/${productID}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => res.json());
    },
    onSuccess: () => {
      queryClient.invalidateQueries('products');
    },
  });
};
export { productQuery, newProductQuery, deleteProductQuery };
