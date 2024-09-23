import axios from 'axios';

const apiUrl = axios.create({
  baseURL: 'https://your-bouquet.azurewebsites.net/api',
});

export const requestProduct = async () => {
  const { data } = await apiUrl.get('/products');
  return data;
};

export const requestProductsDetailsById = async (productId) => {
  const { data } = await apiUrl.get(`/products/${productId}`);
  return data;
};

export const requestCategories = async () => {
  const { data } = await apiUrl.get(`/productcategories`);
  return data;
};

export const requestProductsDetailsByCategory = async (
  categoryId,
  productLimit
) => {
  const { data } = await apiUrl.get(
    `/products?categories=${categoryId}&limit=${productLimit}`
  );
  return data;
};