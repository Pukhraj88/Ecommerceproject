import { NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { RelatedProducts } from "./RelatedProducts";
import { Trust } from "./Trust";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import axios from "axios";

export const DynamicPage = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // UNLOAD DATA FORM LOADER
  const productobj = useLoaderData();
  const { singleProduct, category } = productobj;
  // console.log(product[0].image)
   const userid=localStorage.getItem("UserTokenID");
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  useEffect(() => {
    window.scrollTo(0, 0); 

    setProduct(singleProduct);
    setLoading(false);
  }, [singleProduct, category]);

  const handleProductClick = (productId) => {
    setLoading(true);
    window.scrollTo(0, 0); 
    navigate(`/product/${productId}`);
  };

  // ✅ Skeleton Loader Component
  const SkeletonLoader = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse mt-3">
      <div className="bg-gray-300 w-full h-80 rounded-lg"></div>
      <div className="space-y-4">
        <div className="h-8 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-10 bg-gray-400 rounded w-1/3 mt-4"></div>
      </div>
    </div>
  );



// Function to handle adding product to cart
 const  handleAddToCart = async(productid) => {
 if(userid === null){
      alert("first login")
      return
    } 
    try {
       await axios.post(`${VITE_BACKEND_URL}/api/cart/additemcart`,{productid,userid});
  toast.success("Added to cart!");
    } catch (e) {console.log(e)}
  }

  return (
    <div className="owncontainer sm:px-6 py-6 sm:py-12 !bg-white/40">
              <ToastContainer position="bottom-center" autoClose={3000} />

      
      <div className="max-w-7xl mx-auto">
        <div>
          {loading ? (
            <SkeletonLoader />
          ) : (
            <div
              className="grid grid-cols-1 md:grid-cols-2 sm:gap-4  gap-2 p-0 sm:p-2 "
              style={{ fontFamily: "'Source Sans 3', sans-serif" }}
            >
              <div className="w-full sm:h-[310px] h-[220px] p-1 ">
                <img
                  // src={product[0].image || ""}
                 src={`../${product[0].image}`}//run form public folder

                  alt={product[0].name}
                  className="w-full h-full object-contain rounded-[4px] shadow-lg"
                />
              </div>
              <div className="flex flex-col justify-between sm:px-4 sm:py-2 px-2 py-0 ">
                <div className="">


{/* link page/product/category/name/ */}
<div className="text-sm text-gray-600 space-x-1">
      <NavLink to="/" className="hover:underline">Home</NavLink>
      <span>/</span>
      <NavLink to="/product" className="hover:underline">Product</NavLink>
      <span>/</span>
      <NavLink to="/product/" className="hover:underline">{product[0].category}</NavLink>
      <span>/</span>
      <span className="">{product[0].name}</span>
    </div>
{/* link End  page/product/category/name/ */}


                  <div className="flex justify-between items-center">

                    <h2 className="text-3xl font-semibold text-gray-800">
                      {product[0].name}
                    </h2>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://img.icons8.com/fluency-systems-regular/18/shipped.png"
                        alt="Delivery Icon"
                      />
                      <img
                        src="https://img.icons8.com/material-outlined/18/share.png"
                        alt="Share Icon"
                      />
                    </div>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    {product[0].details}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    {product[0].description}
                  </p>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="flex items-center text-yellow-500 text-[22px]">
                      <AiFillStar className="mr-1" /> {product[0].rating}
                    </span>
                  </div>
                  <div className="flex justify-between ">
                    <div>
                      <div class="flex justify-between items-center text-sm "></div>
                      <div class="flex justify-between items-center">
                        <div>
                          <p class="text-[12px] text-gray-500">Get 20% OFF</p>
                          <p class="line-through text-gray-500 text-lg">
                            MRP: Rs₹{product[0].price * 1.2}
                          </p>
                          <p class="text-green-700 font-bold text-[26px] leading-6">
                            ₹{product[0].price}
                            <span class="text-xs font-normal">
                              (inclusive of all taxes)
                            </span>
                          </p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddToCart(product[0]._id)}
                        className="px-4 py-2 mt-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
                      >
                        {" "}
                        Add to cart{" "}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <Trust />
        </div>
        <RelatedProducts
          category={category}
        />
      </div>
    </div>
  );
};






















// import { useLoaderData, useNavigate } from "react-router-dom";
// import { AiFillStar } from "react-icons/ai";
// import { useEffect, useState } from "react";
// import { RelatedProducts } from "./RelatedProducts";
// import { Trust } from "./Trust";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
// import axios from "axios";


// export const DynamicPage = () => {
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // UNLOAD DATA FORM LOADER
//   const productobj = useLoaderData();
//   const { singleProduct, category } = productobj;
//   // console.log(product[0].image)
//    const userid=localStorage.getItem("UserTokenID");
//   const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//   useEffect(() => {
//     window.scrollTo(0, 0); 

//     setProduct(singleProduct);
//     setLoading(false);
//   }, [singleProduct, category]);

//   const handleProductClick = (productId) => {
//     setLoading(true);
//     window.scrollTo(0, 0); 
//     navigate(`/product/${productId}`);
//   };

//   // ✅ Skeleton Loader Component
//   const SkeletonLoader = () => (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-pulse mt-3">
//       <div className="bg-gray-300 w-full h-80 rounded-lg"></div>
//       <div className="space-y-4">
//         <div className="h-8 bg-gray-300 rounded w-3/4"></div>
//         <div className="h-4 bg-gray-300 rounded w-1/2"></div>
//         <div className="h-4 bg-gray-300 rounded w-full"></div>
//         <div className="h-4 bg-gray-300 rounded w-full"></div>
//         <div className="h-10 bg-gray-400 rounded w-1/3 mt-4"></div>
//       </div>
//     </div>
//   );



// // Function to handle adding product to cart
//  const  handleAddToCart = async(productid) => {
//  if(userid === null){
//       alert("first login")
//       return
//     } 
//     try {
//        await axios.post(`${VITE_BACKEND_URL}/api/cart/additemcart`,{productid,userid});
//   toast.success("Added to cart!");
//     } catch (e) {console.log(e)}
//   }

//   return (
//     <div className="owncontainer px-4 sm:px-6 py-12 ">
//               <ToastContainer position="top-center" autoClose={3000} />
      
//       <div className="max-w-7xl mx-auto">
//         <div>
//           {loading ? (
//             <SkeletonLoader />
//           ) : (
//             // border here
//             <div
//               className="grid grid-cols-1 md:grid-cols-2 sm:gap-4  gap-2 p-3 border"
//               style={{ fontFamily: "'Source Sans 3', sans-serif" }}
//             >
//               <div className="w-full sm:h-[310px] h-[220px]">
//                 <img
//                   // src={product[0].image || ""}
//                  src={`../${product[0].image}`}//run form public folder

//                   alt={product[0].name}
//                   className="w-full h-full object-contain rounded-[4px] shadow-lg"
//                 />
//               </div>
//               <div className="flex flex-col justify-between sm:p-4 p-2 ">
//                 <div className="">
//                   <div className="flex justify-between items-center">
//                     <h2 className="text-3xl font-semibold text-gray-800">
//                       {product[0].name}
//                     </h2>
//                     <div className="flex items-center gap-2">
//                       <img
//                         src="https://img.icons8.com/fluency-systems-regular/18/shipped.png"
//                         alt="Delivery Icon"
//                       />
//                       <img
//                         src="https://img.icons8.com/material-outlined/18/share.png"
//                         alt="Share Icon"
//                       />
//                     </div>
//                   </div>

//                   <p className="text-sm text-gray-500 mt-2">
//                     {product[0].details}
//                   </p>
//                   <p className="text-sm text-gray-500 mt-2">
//                     {product[0].description}
//                   </p>
//                   <div className="mt-2 flex items-center space-x-2">
//                     <span className="flex items-center text-yellow-500 text-[22px]">
//                       <AiFillStar className="mr-1" /> {product[0].rating}
//                     </span>
//                   </div>
//                   <div className="flex justify-between ">
//                     <div>
//                       <div class="flex justify-between items-center text-sm "></div>
//                       <div class="flex justify-between items-center">
//                         <div>
//                           <p class="text-[12px] text-gray-500">Get 20% OFF</p>
//                           <p class="line-through text-gray-500 text-lg">
//                             MRP: Rs₹{product[0].price * 1.2}
//                           </p>
//                           <p class="text-green-700 font-bold text-[26px] leading-6">
//                             ₹{product[0].price}
//                             <span class="text-xs font-normal">
//                               (inclusive of all taxes)
//                             </span>
//                           </p>
//                         </div>
//                       </div>
//                       <button
//                         onClick={() => handleAddToCart(product[0]._id)}
//                         className="px-4 py-2 mt-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300"
//                       >
//                         {" "}
//                         Add to cart{" "}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//           <Trust />
//         </div>
//         <RelatedProducts
//           category={category}
//           handleProductClick={handleProductClick}
//         />
//       </div>
//     </div>
//   );
// };



