// import { ProductPage } from "./ProductPage";

// export default function ProductSlider({
//   relatedProduct,
// //   matchingCategoryProduct,
// //   otherCategoryProducts,
//   category,
// }) {
//   // console.log(relatedProduct,category)
//   return (
//     <div className="w-full bg-[#f8f8f8] py-6 px-2 sm:px-8">
//       <ProductPage relatedProduct={relatedProduct} 
//     //   matchingCategoryProduct={matchingCategoryProduct}
//     //   otherCategoryProducts={otherCategoryProducts}
//       category={category} />
//     </div>
//   );
// }











// import { motion } from "framer-motion";
// import { NavLink } from "react-router-dom";

// export default function ProductSlider({ relatedProduct,matchingCategoryProduct, otherCategoryProducts ,category }) {
//   return (
//     <div className="w-full bg-[#f8f8f8] py-6 px-2 sm:px-8">
//       <div className="flex justify-between items-center mb-4">

//         {/* customize title if cement comes in category show cement bags
//         if jali comes show cement jali
//         if brcks then Quality Bricks
//         soil then construction soil text style also */}
//         <h2 className="text-orange-600 font-semibold text-sm">{(
//         category === "cement" ? "Cement Bags" :
//         category === "soil" ? "Construction Soil":
//         category === "jali" ? "Cement Jali":
//         category === "bricks" ? "Quality Bricks":
//         category === "rodi" ? "Rodi Aggregate":
// category).toUpperCase()
//         }</h2>

//         <NavLink to="/products" className="text-orange-600 font-semibold text-sm hover:underline">
//           VIEW ALL
//         </NavLink>
//       </div>

//       <ul className="flex gap-4 overflow-x-auto scrollbar-hide">
//         {relatedProduct.map((product, index) => (
//           <motion.li
//             key={product._id}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.1 }}
//             className="min-w-[180px] sm:min-w-[220px] max-w-[250px] bg-white p-3 sm:p-4 rounded-lg border shadow-sm hover:shadow-md transition"
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
//             <p className="text-xs text-gray-500">Available in - {product.weight || "50 gm"}</p>
//             <div className="flex items-center gap-2 mt-2">
//               <p className="text-sm font-bold text-black">₹{product.price}</p>
//             </div>
//             <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white text-sm py-1.5 rounded">
//               🛒 Add To Cart
//             </button>
//           </motion.li>
//         ))}
//       </ul>
//     </div>
//   );
// }
