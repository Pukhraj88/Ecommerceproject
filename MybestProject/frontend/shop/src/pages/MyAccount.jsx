import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

export const MyAccount = () => {
  const  VITE_BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);


  const tokenid = localStorage.getItem("UserTokenID");
  const userdatast = localStorage.getItem("UserTokenName");
  const userEmail = localStorage.getItem("UserTokenEmail");
  const navigate = useNavigate();

  const getUserDetails = async () => {
    try {
      const res = await axios.get(`${VITE_BACKEND_URL}/api/cart/view`);
      const allItems = res.data.response;
      const userCart = allItems.filter((item) => item.userid?._id === tokenid);
      setCartItems(userCart);
    } catch (err) {
      console.error("Error fetching user details:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logout = () => {
    localStorage.clear();
    navigate("/");
    window.location.href = "/";
  };

  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.quantity * item.productid?.price, 0);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-gray-700">Loading...</p>
      </div>
    );
  }

  if (!cartItems.length) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <span className="text-lg font-semibold text-green-700">Welcome {userdatast.toUpperCase()}</span>
          <button
            onClick={logout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
          >
            Log Out
          </button>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">You have no items in your cart</h2>
        <div className="flex justify-center">
          <button
            onClick={() => navigate("/product")}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }
  return (


<div className="owncontainer">
  <div className="bg-white max-w-6xl mx-auto px-4 py-8 ">
  {/* Header */}
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
    <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
      Welcome, {userdatast || "User"}!
    </h1>


{/* admin login */}
   {
    tokenid === "688a0961e748554a83fa9a75" && (
<NavLink
  to="/admin"
  className="bg-red-500 text-white px-4 py-2 text-sm sm:text-base rounded hover:bg-red-600 transition w-full sm:w-auto"
>
  Admin
</NavLink>
    )
   }



{/* logout button */}
    <button
      onClick={logout}
      className="bg-red-500 text-white px-4 py-2 text-sm sm:text-base rounded hover:bg-red-600 transition w-full sm:w-auto"
    >
      Log Out
    </button>






  </div>

  {/* Profile Info */}
  <div className="bg-gray-100 p-4 rounded-lg mb-6 shadow-sm">
    <h2 className="text-lg sm:text-xl font-semibold mb-2">Profile Information</h2>
    <p className="text-gray-700 text-sm sm:text-base"><strong>Email:</strong> {userEmail}</p>
  </div>

  {/* Order Items */}
  <div className="overflow-x-auto rounded-lg shadow-sm border border-gray-200 bg-white">
    <h2 className="text-lg sm:text-xl font-semibold text-gray-800 p-4">Your Ordered Items</h2>
    <table className="min-w-full text-sm sm:text-base">
      <thead className="bg-gray-100 border-b border-gray-300 text-gray-700">
        <tr>
          <th className="px-4 py-2 text-left">#</th>
          <th className="px-4 py-2 text-left">Item Name</th>
          <th className="px-4 py-2 text-left">Qty</th>
          <th className="px-4 py-2 text-left">Price</th>
          <th className="px-4 py-2 text-left">Total</th>
          <th className="px-4 py-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {cartItems.map((item, index) => (
          <tr key={index} className="border-t text-gray-800">
            <td className="px-4 py-2">{index + 1}</td>
            <td className="px-4 py-2">{item.productid?.name}</td>
            <td className="px-4 py-2">{item?.quantity}</td>
            <td className="px-4 py-2">₹{item.productid?.price}</td>
            <td className="px-4 py-2">₹{item.quantity * item.productid?.price}</td>
            <td className="px-4 py-2">
              <NavLink to="#" className="text-blue-600 hover:underline">View</NavLink>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Total Price */}
  <div className="mt-6 text-right">
    <h3 className="text-lg sm:text-xl font-bold text-gray-800">
      Total Amount: ₹{getTotalPrice()}
    </h3>
  </div>
</div>
</div>



  );
};  


