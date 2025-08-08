import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProduct = () => {
  const [getProduct, setgetProduct] = useState([]);

  const  VITE_BACKEND_URL=import.meta.env.VITE_BACKEND_URL;


  const [formData, setFormData] = useState({
    image: "",
    name: "",
    price: "",
    details: "",
    description: "",
    rating: "",
    category: "",
    _id: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, image: reader.result }));
      };
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // UPDATING PRODUCT AND NEW PRODUCT ADD
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._id) {
      await axios.put(
        `${VITE_BACKEND_URL}/api/admin/edit/${formData._id}`,
        formData
      );
      toast.success("Item Updated successfully!");
      ProductList();
       setFormData({
          image: "",
          name: "",
          price: "",
          details: "",
          description: "",
          rating: "",
          category: "",
          _id: "",
        });
    } else {
      try {
        await axios.post(
          `${VITE_BACKEND_URL}/api/admin/addproduct`,
          formData
        );
        toast.success("Item added successfully!");
        ProductList();
        setFormData({
          image: "",
          name: "",
          price: "",
          details: "",
          description: "",
          rating: "",
          category: "",
          _id: "",
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  // GETTING PRODUCTS
  const ProductList = async () => {
    try {
      const response = await axios.get(
        `${VITE_BACKEND_URL}/api/admin/productlist`
      );
      setgetProduct(response.data.response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    ProductList();
  }, []);

  // delet product
  const handleDeleteProduct = async (id) => {
    const password = window.prompt("Enter  password to delete:");

  if (password !== "xxxx") {
    toast.error("Incorrect password. Delete operation cancelled.");
    return;
  }

    try {
      await axios.delete(`${VITE_BACKEND_URL}/api/admin/delete/${id}`);
      toast.error("Item Deleted successfully!");
      ProductList();
    } catch (error) {
      console.log(error);
    }
  };

  // EDITING PRODUCT FETCHING SINGLE PRODUCT DATA
  const handleEditProduct = async (id) => {
    try {
      const productresponse = await axios.get(
        `${VITE_BACKEND_URL}/api/admin/view/${id}`
      );
      setFormData({
        image: productresponse.data.response[0].image,
        name: productresponse.data.response[0].name,
        price: productresponse.data.response[0].price,
        details: productresponse.data.response[0].details,
        description: productresponse.data.response[0].description,
        rating: productresponse.data.response[0].rating,
        category: productresponse.data.response[0].category,
        _id: productresponse.data.response[0]._id,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <ToastContainer position="top-center" autoClose={3000} />
      {/* Product Upload Form */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6 max-w-3xl mx-auto">
        <h2 className="text-xl font-bold mb-4">Add Product</h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {/* image input field */}
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="border p-2 rounded"
          />
          {/* image input field into name changer */}
{/* <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="border p-2 rounded"
          /> */}
          <input
            type="text"
            name="name"
            onChange={handleChange}
            placeholder="Product Name"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Product Price"
            className="border p-2 rounded"
            required
          />

          <input
            type="text"
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="Details"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            placeholder="Rating"
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            placeholder="Category"
            className="border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="md:col-span-3 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            {formData._id ? "Update" : "Add Product"}
          </button>
        </form>
      </div>

      {/* Display Products */}

      <div className="overflow-x-auto w-full">
        <table className="min-w-full table-auto bg-white shadow rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Details</th>
              <th className="px-4 py-2">Rating</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getProduct.map((product) => (
              <tr key={product._id} className="border-b hover:bg-gray-50">
                <td className="px-4 py-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">${product.price}</td>
                <td className="px-4 py-2">{product.details}</td>
                <td className="px-4 py-2">{product.rating} ⭐</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    className="text-blue-500"
                    onClick={() => handleEditProduct(product._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddProduct;
