import axios from "axios";
import { useEffect, useState } from "react";
import { ProductPage } from "./ProductPage";
export const RelatedProducts = ({ category }) => {
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [matchingCategoryProduct, setMatchingCategoryProduct] = useState([]);
  const [otherCategoryProducts, setotherCategoryProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const MatchingProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${VITE_BACKEND_URL}/api/admin/productlist`);
      const allProducts = res.data.response;
      const totalSlots = 8;
      const half = Math.floor(totalSlots / 2);
      const matchingProducts = allProducts.filter(
        (product) => product.category === category
      );
setMatchingCategoryProduct(matchingProducts)
      const otherProducts = allProducts.filter(
        (product) => product.category !== category
      );
setotherCategoryProducts(otherProducts)


      const shuffle = (array) => array.sort(() => 0.5 - Math.random());
      const selectedMatching = shuffle(matchingProducts).slice(0, half);
      const selectedOthers = shuffle(otherProducts).slice(0, totalSlots - selectedMatching.length);
      const combined = [...selectedMatching, ...selectedOthers];
      setRelatedProduct((prev) => [...prev, ...combined]);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setRelatedProduct([]); 
    MatchingProducts();
  }, [category]);
  return (
    <div className="sm:mt-8 mt-4 px-2 pb-8">
      <div className="mb-4">
        <h3 className="text-2xl font-bold tracking-tight text-gray-800">
          <span className="text-blue-600">Discover</span>{" "}
          <span className="text-gray-800">Similar</span>{" "}
          <span className="text-green-600">Picks</span>
        </h3>
        <p className="text-sm mt-2 text-gray-500">
          <span className="text-blue-500 font-medium">Quality</span> products just for you,
          based on your <span className="text-green-600 font-medium">interests</span>.
        </p>
      </div>
<ProductPage curr={matchingCategoryProduct} // handleAddToCart={handleAddToCart}
/>
<ProductPage curr={otherCategoryProducts} // handleAddToCart={handleAddToCart}
/>
<ProductPage curr={relatedProduct} // handleAddToCart={handleAddToCart} 
/>
      {loading && <p className="text-center mt-4 text-sm text-gray-500">Loading more products...</p>}
    </div>
  );
};




// import axios from "axios";
// import { useEffect, useState } from "react";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
// import ProductSlider from "./ProductSlider";


// export const RelatedProducts = ({ category, handleProductClick }) => {
//   const [relatedProduct, setRelatedProduct] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
//    const userid=localStorage.getItem("UserTokenID");


// // Function to handle adding product to cart
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


//   const MatchingProducts = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(`${VITE_BACKEND_URL}/api/admin/productlist`);
//       const allProducts = res.data.response;
//       const totalSlots = 8;
//       const half = Math.floor(totalSlots / 2);
//       const matchingProducts = allProducts.filter(
//         (product) => product.category === category
//       );
//       const otherProducts = allProducts.filter(
//         (product) => product.category !== category
//       );

//       const shuffle = (array) => array.sort(() => 0.5 - Math.random());
//       const selectedMatching = shuffle(matchingProducts).slice(0, half);
//       const selectedOthers = shuffle(otherProducts).slice(0, totalSlots - selectedMatching.length);
//       const combined = [...selectedMatching, ...selectedOthers];
//       setRelatedProduct((prev) => [...prev, ...combined]);
//     } catch (e) {
//       console.log(e);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setRelatedProduct([]); 
//     MatchingProducts();
//   }, [category]);

//   return (
//     <div className="sm:mt-8 mt-4 px-2 pb-8">

// <ProductSlider
// relatedProduct={relatedProduct}
// />

//       <div className="mb-4">
//         <h3 className="text-2xl font-bold tracking-tight text-gray-800">
//           <span className="text-blue-600">Discover</span>{" "}
//           <span className="text-gray-800">Similar</span>{" "}
//           <span className="text-green-600">Picks</span>
//         </h3>
//         <p className="text-sm mt-2 text-gray-500">
//           <span className="text-blue-500 font-medium">Curated</span> products just for you,
//           based on your <span className="text-green-600 font-medium">interests</span>.
//         </p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
//         {relatedProduct.map((item) => (
//           <div
//             key={item._id}
//             className="border rounded-[4px] shadow-sm p-3 sm:p-3 hover:shadow-md transition duration-300 bg-white"
//           >
//             <button
//               onClick={() => handleProductClick(item._id)}
//               className="block w-full sm:h-48 h-[150px] overflow-hidden rounded-md mb-2"
//             >
//               <img
//                 // src={item?.image || ""}
//                  src={`../${item?.image}`}//run form public folder
//                 alt={item?.name}
//                 className="w-full h-full object-contain"
//               />
//             </button>

//             <h4 className="text-lg font-semibold text-gray-800 line-clamp-1">
//               {item?.name}
//             </h4>

//             <p className="text-sm text-gray-500 line-clamp-2 mb-2">
//               {(item.description?.length || 0) > 60
//                 ? `${item.description.slice(0, 60)}...`
//                 : item.description}
//             </p>

//             <div className="mt-3 flex items-center justify-between">
//               <span className="text-lg text-green-600 font-bold">
//                 ₹{item.price}
//               </span>
//               <button
//               onClick={() => handleAddToCart(item._id)}
//                 className="px-4 py-1.5 bg-blue-600 text-white rounded-[4px] text-sm hover:bg-blue-700 transition"
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>



//       {loading && <p className="text-center mt-4 text-sm text-gray-500">Loading more products...</p>}
//     </div>
//   );
// };

