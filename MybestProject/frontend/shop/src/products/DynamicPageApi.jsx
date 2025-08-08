import axios from "axios";

export const DynamicPageApi = async ({ params }) => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const productId = params.id.toString();
  try {
    const res = await axios.get(`${VITE_BACKEND_URL}/api/admin/view/${productId}`);
    const singleProduct = res.data.response;
    const category = res.data.response[0].category;
    return {
      singleProduct,
      category,
    };
  } catch (err) {
    console.error("Error fetching products:", err);
  }
};

