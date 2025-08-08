import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const Cart = () => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const tokenid = localStorage.getItem("UserTokenID"); //login user id
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // CHECK OUT BUTTON ANIMATION
const [isCheckingOut, setIsCheckingOut] = useState(false);
const handleCheckout = () => {
  setIsCheckingOut(true);
  setTimeout(() => {
    setIsCheckingOut(false);
  }, 2500); 
};


  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await axios.get(`${VITE_BACKEND_URL}/api/cart/view`);
      const allItems = res.data.response;
      const userCart = allItems.filter((item) => item.userid?._id === tokenid);
      setCartItems(userCart);
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchCart();
  }, []);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.productid?.price * item?.quantity,
    0
  );
  const totalItems = cartItems.reduce(
    (total, item) => total + item?.quantity,
    0
  );

  //  DECRIMENT FUNTIONS
  const handleDecrement = async (id) => {
    try {
      const res = await axios.put(`${VITE_BACKEND_URL}/api/cart/dec/${id}`, {
        tokenid,
      });
      console.log(res);
      fetchCart();
    } catch (e) {
      console.log(e);
    }
  };
  // INCRIMENT  FUNTIONS
  const handleIncrement = async (id) => {
    try {
      await axios.put(`${VITE_BACKEND_URL}/api/cart/inc/${id}`, { tokenid });
      fetchCart();
    } catch (e) {
      console.log(e);
    }
  };

  // Remove button
  const handleRemoveFromCart = async (id) => {
    try {
      await axios.delete(`${VITE_BACKEND_URL}/api/cart/remove/${id}`, {
        data: { tokenid },
      });
      fetchCart();
    } catch (e) {
      console.log(e);
    }
  };

  // Clear button
  const handleClearCart = async () => {
    try {
      await axios.delete(`${VITE_BACKEND_URL}/api/cart/clear`, {
        data: { tokenid },
      });
      fetchCart();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="w-full lg:w-1/3 mx-auto mt-3 px-4 py-6">
      {loading ? (
        <div className="space-y-4">
          {Array(3)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border p-4 rounded-md"
              >
                <Skeleton height={80} width={80} />
                <div className="flex-1 space-y-2">
                  <Skeleton height={20} width="75%" />
                  <Skeleton height={15} width="60%" />
                  <Skeleton height={30} width="90%" />
                </div>
              </div>
            ))}
        </div>
      ) : cartItems.length === 0 ? (
        <div className="text-center mt-10">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Cart is Empty
          </h1>
          <button
            onClick={() => navigate("/")}
            className="text-sm text-blue-600 hover:underline"
          >
            Go back to Shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="border rounded-[2px] p-4 mb-2 shadow-md bg-white"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.productid?.image}
                  className="h-12 w-12 object-contain"
                  alt=""
                />

                <div className="flex-1 text-sm">
                  {/* Row 1: Name and Price */}
                  <div className="flex justify-between items-center mb-1">
                    <h2 className="font-semibold text-gray-900">
                      {item.productid?.name}
                    </h2>
                    <p className="text-gray-700 font-medium">
                      ₹{item.productid?.price}
                    </p>
                  </div>

                  {/* Row 2: Quantity and Remove Button */}
                  <div className="flex justify-between items-center">
                    {/* Quantity controls */}
                    <div className="flex items-center space-x-3">
                      <button
                        onClick={() => handleDecrement(item.productid?._id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.productid?._id)}
                        className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>

                    {/* Remove button */}
                    <button
                      onClick={() => handleRemoveFromCart(item.productid?._id)}
                      className="text-sm text-red-600 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-6 space-y-2 text-gray-800">
            <div className="flex justify-between font-semibold">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Amount:</span>
              <span>₹{totalAmount}</span>
            </div>
            <button
              onClick={handleClearCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mt-4"
            >
              Clear Cart
            </button>


{/* CHECK OUT BUTON  */}
  <button
  onClick={handleCheckout}
  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded mt-4 flex items-center justify-center relative"
>
  {isCheckingOut ? (
    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" ></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" ></path>
    </svg>
  ) : (
    "Checkout"
  )}
</button>





          </div>
        </>
      )}
    </div>
  );
};













// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// export const Cart = () => {
//   const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//   const tokenid = localStorage.getItem("UserTokenID"); //login user id
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const navigate = useNavigate();

//   const fetchCart = async () => {
//     try {
//       const res = await axios.get(`${VITE_BACKEND_URL}/api/cart/view`);
//       const allItems = res.data.response;
//       const userCart = allItems.filter((item) => item.userid?._id === tokenid);
//       setCartItems(userCart);
//     } catch (err) {
//       console.error("Error fetching cart:", err);
//     } finally {
//       setLoading(false);
//     }
//   };
//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const totalAmount = cartItems.reduce(
//     (total, item) => total + item.productid.price * item.quantity,
//     0
//   );
//   const totalItems = cartItems.reduce(
//     (total, item) => total + item.quantity,
//     0
//   );

//   //  DECRIMENT FUNTIONS
//   const handleDecrement = async (id) => {
//     try {
//       const res = await axios.put(`${VITE_BACKEND_URL}/api/cart/dec/${id}`, {
//         tokenid,
//       });
//       console.log(res);
//       fetchCart();
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   // INCRIMENT  FUNTIONS
//   const handleIncrement = async (id) => {
//     try {
//       await axios.put(`${VITE_BACKEND_URL}/api/cart/inc/${id}`, { tokenid });
//       fetchCart();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   // Remove button
//   const handleRemoveFromCart = async (id) => {
//     try {
//       await axios.delete(`${VITE_BACKEND_URL}/api/cart/remove/${id}`, {
//         data: { tokenid },
//       });
//       fetchCart();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   // Clear button
//   const handleClearCart = async () => {
//     try {
//       await axios.delete(`${VITE_BACKEND_URL}/api/cart/clear`, {
//         data: { tokenid },
//       });
//       fetchCart();
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   return (
//     <div className="w-full lg:w-1/3 mx-auto mt-3 px-4 py-6">
//       {loading ? (
//         <div className="space-y-4">
//           {Array(3)
//             .fill(0)
//             .map((_, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-4 border p-4 rounded-md"
//               >
//                 <Skeleton height={80} width={80} />
//                 <div className="flex-1 space-y-2">
//                   <Skeleton height={20} width="75%" />
//                   <Skeleton height={15} width="60%" />
//                   <Skeleton height={30} width="90%" />
//                 </div>
//               </div>
//             ))}
//         </div>
//       ) : cartItems.length === 0 ? (
//         <div className="text-center mt-10">
//           <h1 className="text-2xl font-bold text-gray-800 mb-2">
//             Cart is Empty
//           </h1>
//           <button
//             onClick={() => navigate("/")}
//             className="text-sm text-blue-600 hover:underline"
//           >
//             Go back to Shopping
//           </button>
//         </div>
//       ) : (
//         <>
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="border rounded-[2px] p-4 mb-2 shadow-md bg-white"
//             >
//               <div className="flex items-center gap-4">
//                 <img
//                   src={item.productid.image}
//                   className="h-12 w-12 object-contain"
//                   alt=""
//                 />

//                 <div className="flex-1 text-sm">
//                   {/* Row 1: Name and Price */}
//                   <div className="flex justify-between items-center mb-1">
//                     <h2 className="font-semibold text-gray-900">
//                       {item.productid.name}
//                     </h2>
//                     <p className="text-gray-700 font-medium">
//                       ₹{item.productid.price}
//                     </p>
//                   </div>

//                   {/* Row 2: Quantity and Remove Button */}
//                   <div className="flex justify-between items-center">
//                     {/* Quantity controls */}
//                     <div className="flex items-center space-x-3">
//                       <button
//                         onClick={() => handleDecrement(item.productid._id)}
//                         className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       >
//                         −
//                       </button>
//                       <span>{item.quantity}</span>
//                       <button
//                         onClick={() => handleIncrement(item.productid._id)}
//                         className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
//                       >
//                         +
//                       </button>
//                     </div>

//                     {/* Remove button */}
//                     <button
//                       onClick={() => handleRemoveFromCart(item.productid._id)}
//                       className="text-sm text-red-600 hover:underline"
//                     >
//                       Remove
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           <div className="mt-6 space-y-2 text-gray-800">
//             <div className="flex justify-between font-semibold">
//               <span>Total Items:</span>
//               <span>{totalItems}</span>
//             </div>
//             <div className="flex justify-between font-semibold">
//               <span>Total Amount:</span>
//               <span>₹{totalAmount}</span>
//             </div>
//             <button
//               onClick={handleClearCart}
//               className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mt-4"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };


