import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiFillStar } from "react-icons/ai";
import "./foodcart.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { NavLink } from "react-router-dom";

export const FoodCart = () => {
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const userid = localStorage.getItem("UserTokenID");

  // fetch products api
  const fetchProducts = async () => {
    try {
      const res = await axios.get(`${VITE_BACKEND_URL}/api/admin/productlist`);
      setProducts(res.data.response);
      // console.log("prdcut fetch")
      setLoading(false);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  // ADD TO CART FUNTIONLITY DIRECT STORE IN CART COLLECTION
  const handleAddToCart = async (productid) => {
    if (userid === null) {
      alert("first login");
      return;
    }
    try {
      await axios.post(`${VITE_BACKEND_URL}/api/cart/additemcart`, {
        productid,
        userid,
      });
      toast.success("Added to cart!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="">
      <ToastContainer position="bottom-right" autoClose={3000} />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array(8)
            .fill()
            .map((_, i) => (
              <div key={i} className="border p-4 rounded shadow animate-pulse">
                <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>
                <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
                <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
              </div>
            ))}
        </div>
      ) : (
        <div className=" flex flex-wrap gap-5 lg:gap-5 justify-center lg:justify-center">
          {/* Our Products Section */}
          <div className="w-full py-10 px-2 sm:px-6 lg:px-20">
            <div className="max-w-full mx-auto text-center">
              <h2 className="text-2xl sm:text-5xl font-bold text-gray-800 tracking-wide font-sans sm:mb-3">
                Explore Our <span className="text-blue-600">Top Products</span>
              </h2>
              <p className="text-[14px] sm:text-xl text-gray-600 font-light font-serif">
                High-quality building materials delivered right to your site —
                Cement, Bricks, Soil & More.
              </p>
            </div>
          </div>

{/* cart */}
          {products.map((product) => (
            <li key={product._id} className="foodcart-li">
              <div className="max-w-[350px] sm:!max-w-[300px] font-bold bg-white p-3 sm:p-5 flex flex-col rounded-lg gap-1 sm:gap-2 
              border shadow-sm hover:shadow-lg transition-shadow duration-300">
                <NavLink to={`/product/${product._id}`}>
                  <img
                    src={product.image}
                    alt="Product"
                    className="imgfoodcart h-[130px] rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </NavLink>

                <div className="text-sm flex justify-between mt-2">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <span className="text-green-500">₹{product.price}</span>
                </div>
                <p className="text-sm font-normal text-gray-600">
                  {product.description
                    ? `${product.description.slice(0, 66)}.`
                    : "No description available"}
                </p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="flex justify-center items-center text-yellow-500">
                    <AiFillStar className="mr-1" /> {product.rating}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product._id)}
                    className="p-2 text-white bg-green-500 outline-none hover:bg-green-600 rounded-sm text-sm transition-colors duration-300"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>
      )}
    </div>
  );
};













// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { AiFillStar } from "react-icons/ai";
// import "./foodcart.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
// import { NavLink } from "react-router-dom";

// export const FoodCart = () => {
//   const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const userid = localStorage.getItem("UserTokenID");

//   // fetch products api
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${VITE_BACKEND_URL}/api/admin/productlist`);
//       setProducts(res.data.response);
//       // console.log("prdcut fetch")
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // ADD TO CART FUNTIONLITY DIRECT STORE IN CART COLLECTION
//   const handleAddToCart = async (productid) => {
//     if (userid === null) {
//       alert("first login");
//       return;
//     }
//     try {
//       await axios.post(`${VITE_BACKEND_URL}/api/cart/additemcart`, {
//         productid,
//         userid,
//       });
//       toast.success("Added to cart!");
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div className="owncontainer">
//       <ToastContainer position="top-center" autoClose={3000} />

//       {loading ? (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {Array(8)
//             .fill()
//             .map((_, i) => (
//               <div key={i} className="border p-4 rounded shadow animate-pulse">
//                 <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>
//                 <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
//                 <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
//               </div>
//             ))}
//         </div>
//       ) : (
//         <div className="owncontainer flex flex-wrap gap-5 lg:gap-5 justify-center lg:justify-center">
//           {/* Our Products Section */}
//           <div className="w-full py-10 px-4 sm:px-6 lg:px-20">
//             <div className="max-w-7xl mx-auto text-center">
//               <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-wide font-sans mb-3">
//                 Explore Our <span className="text-blue-600">Top Products</span>
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 font-light font-serif">
//                 High-quality building materials delivered right to your site —
//                 Cement, Bricks, Soil & More.
//               </p>
//             </div>
//           </div>

// {/* cart */}
//           {products.map((product) => (
//             <li key={product._id} className="foodcart-li">
//               <div className="maindivfoodcart font-bold bg-white p-3 sm:p-5 flex flex-col rounded-lg gap-1 sm:gap-2 
//               border shadow-sm hover:shadow-lg transition-shadow duration-300">
//                 <NavLink to={`/product/${product._id}`}>
//                   <img
//                     src={product.image}
//                     alt="Product"
//                     className="imgfoodcart h-[130px] rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
//                   />
//                 </NavLink>

//                 <div className="text-sm flex justify-between mt-2">
//                   <h2 className="text-lg font-semibold">{product.name}</h2>
//                   <span className="text-green-500">₹{product.price}</span>
//                 </div>
//                 <p className="text-sm font-normal text-gray-600">
//                   {product.description
//                     ? `${product.description.slice(0, 50)}...`
//                     : "No description available"}
//                 </p>
//                 <div className="flex justify-between items-center mt-auto">
//                   <span className="flex justify-center items-center text-yellow-500">
//                     <AiFillStar className="mr-1" /> {product.rating}
//                   </span>
//                   <button
//                     onClick={() => handleAddToCart(product._id)}
//                     className="p-2 text-white bg-green-500 outline-none hover:bg-green-600 rounded-sm text-sm transition-colors duration-300"
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };














// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { AiFillStar } from "react-icons/ai";
// import "./foodcart.css";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";
// import { NavLink } from "react-router-dom";

// export const FoodCart = () => {
//   const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const userid = localStorage.getItem("UserTokenID");

//   // fetch products api
//   const fetchProducts = async () => {
//     try {
//       const res = await axios.get(`${VITE_BACKEND_URL}/api/admin/productlist`);
//       setProducts(res.data.response);
//       setLoading(false);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//     }
//   };
//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   // ADD TO CART FUNTIONLITY DIRECT STORE IN CART COLLECTION
//   const handleAddToCart = async (productid) => {
//     if (userid === null) {
//       alert("first login");
//       return;
//     }
//     try {
//       await axios.post(`${VITE_BACKEND_URL}/api/cart/additemcart`, {
//         productid,
//         userid,
//       });
//       toast.success("Added to cart!");
//     } catch (e) {
//       console.log(e);
//     }
//   };
//   return (
//     <div className="owncontainer">
//       <ToastContainer position="top-center" autoClose={3000} />

//       {loading ? (
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {Array(8)
//             .fill()
//             .map((_, i) => (
//               <div key={i} className="border p-4 rounded shadow animate-pulse">
//                 <div className="bg-gray-300 h-40 w-full rounded mb-4"></div>
//                 <div className="bg-gray-300 h-4 w-3/4 mb-2 rounded"></div>
//                 <div className="bg-gray-300 h-4 w-1/2 rounded"></div>
//               </div>
//             ))}
//         </div>
//       ) : (
//         <div className="owncontainer flex flex-wrap gap-5 lg:gap-5 justify-center lg:justify-center">
//           {/* Our Products Section */}
//           <div className="w-full py-10 px-4 sm:px-6 lg:px-20">
//             <div className="max-w-7xl mx-auto text-center">
//               <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 tracking-wide font-sans mb-3">
//                 Explore Our <span className="text-blue-600">Top Products</span>
//               </h2>
//               <p className="text-lg sm:text-xl text-gray-600 font-light font-serif">
//                 High-quality building materials delivered right to your site —
//                 Cement, Bricks, Soil & More.
//               </p>
//             </div>
//           </div>

//           {products.map((product) => (
//             <li key={product._id} className="foodcart-li">
//               <div className="maindivfoodcart font-bold bg-white p-5 flex flex-col rounded-lg gap-2 shadow-md hover:shadow-lg transition-shadow duration-300">
//                 <NavLink to={`/product/${product._id}`}>
//                   <img
//                     // src={imageUrls[product._id] || ""}
//                     src={product.image}
//                     alt="Product"
//                     className="imgfoodcart h-[130px] rounded-t-lg transition-transform duration-500 ease-in-out hover:scale-110"
//                   />
//                 </NavLink>

//                 <div className="text-sm flex justify-between mt-2">
//                   <h2 className="text-lg font-semibold">{product.name}</h2>
//                   <span className="text-green-500">₹{product.price}</span>
//                 </div>
//                 <p className="text-sm font-normal text-gray-600">
//                   {product.description
//                     ? `${product.description.slice(0, 50)}...`
//                     : "No description available"}
//                 </p>
//                 <div className="flex justify-between items-center mt-auto">
//                   <span className="flex justify-center items-center text-yellow-500">
//                     <AiFillStar className="mr-1" /> {product.rating}
//                   </span>
//                   <button
//                     onClick={() => handleAddToCart(product._id)}
//                     className="p-2 text-white bg-green-500 outline-none hover:bg-green-600 rounded-sm text-sm transition-colors duration-300"
//                   >
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             </li>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


