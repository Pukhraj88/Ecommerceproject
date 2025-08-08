import axios from "axios";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
export const ProductPage = ({ curr }) => {
   const userid=localStorage.getItem("UserTokenID");
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
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
    <>
      <div className="flex justify-between items-center mb-1 pt-2 p-1">
        <h2 className="text-orange-600 font-semibold text-sm">
        REALATED PRODUCTS
        </h2>

        <NavLink
          to="/product"
          className="text-orange-600 font-semibold text-sm hover:underline"
        >
          VIEW ALL
        </NavLink>
      </div>

      <ul className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
        {curr.map((product, index) => (
          <motion.li
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="min-w-[180px] sm:min-w-[220px] max-w-[250px] bg-white p-3 sm:p-4 rounded-[4px] sm:rounded-lg border shadow-sm hover:shadow-md transition"
          >
            <NavLink to={`/product/${product._id}`} className="block">
              <img
                src={`../${product?.image}`}
                alt={product.name}
                className="w-full h-36 object-contain mb-2"
              />
            </NavLink>
            <div className="border-t h-1"></div>
            <p className="text-sm font-semibold leading-tight line-clamp-2">
              {product.name}
            </p>
            <p className="text-xs text-gray-500">
              Available
            </p>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-sm font-bold text-black">₹{product.price}</p>
            </div>
            <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 
            text-white text-sm py-1.5 rounded"
                        onClick={() => handleAddToCart(product._id)}
            >
              🛒 Add To Cart
            </button>
          </motion.li>
        ))}
      </ul>
    </>
  );
};









// import axios from "axios";
// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
// export const ProductPage = ({ curr }) => {
//    const userid=localStorage.getItem("UserTokenID");
//   const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//   // Function to handle adding product to cart
//  const  handleAddToCart = async(productid) => {
//   if(userid === null){
//       alert("first login")
//       return
//     }
//     try {
//        await axios.post(`${VITE_BACKEND_URL}/api/cart/additemcart`,{productid,userid});
//   toast.success("Added to cart!");
//     } catch (e) {console.log(e)}
//   }
//   return (
//     <>
//       <div className="flex justify-between items-center mb-1 pt-2 p-1">
//         <h2 className="text-orange-600 font-semibold text-sm">
//         REALATED PRODUCTS
//         </h2>

//         <NavLink
//           to="/products"
//           className="text-orange-600 font-semibold text-sm hover:underline"
//         >
//           VIEW ALL
//         </NavLink>
//       </div>

//       <ul className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide">
//         {/* {relatedProduct.map((product, index) => ( */}
//         {curr.map((product, index) => (
//           <motion.li
//             key={product._id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="min-w-[180px] sm:min-w-[220px] max-w-[250px] bg-white p-3 sm:p-4 rounded-[4px] sm:rounded-lg border shadow-sm hover:shadow-md transition"
//           >
//             {/* Discount */}
//             {product.discount && (
//               <span className="text-xs text-green-600 font-semibold border border-green-500 px-2 py-[2px] rounded bg-green-100 mb-1 inline-block">
//                 {product.discount}% OFF
//               </span>
//             )}
//             <NavLink to={`/product/${product._id}`} className="block">
//               <img
//                 src={`../${product?.image}`}
//                 alt={product.name}
//                 className="w-full h-36 object-contain mb-2"
//               />
//             </NavLink>
//             <div className="w-4 h-4 bg-green-600 rounded-full ml-auto mb-2"></div>
//             <p className="text-sm font-semibold leading-tight line-clamp-2">
//               {product.name}
//             </p>
//             <p className="text-xs text-gray-500">
//               Available in - {product.weight || "50 gm"}
//             </p>
//             <div className="flex items-center gap-2 mt-2">
//               <p className="text-sm font-bold text-black">₹{product.price}</p>
//             </div>
//             <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 
//             text-white text-sm py-1.5 rounded"
//                         onClick={() => handleAddToCart(product._id)}
//             >
//               🛒 Add To Cart
//             </button>
//           </motion.li>
//         ))}
//       </ul>
//     </>
//   );
// };
