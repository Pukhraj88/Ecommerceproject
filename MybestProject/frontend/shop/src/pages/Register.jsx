import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const  VITE_BACKEND_URL=import.meta.env.VITE_BACKEND_URL;
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone:"",
    address:"",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name,value}=e.target;
    setFormData((prev)=>({...prev,[name]:value}))
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${VITE_BACKEND_URL}/api/register`, formData);
      console.log(response.data.msg)
      toast.success(response.data.msg, { position: "top-center", autoClose: 3000 });

      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      console.log(error)
      toast.error("An error occurred.", { position: "top-center" });
    }
  };

  return (
    <div className="owncontainer min-h-screen bg-gray-100 flex items-center justify-center">
      <ToastContainer />
      <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register Now</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="username" placeholder="Username" className="w-full px-4 py-2 border rounded-lg" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" value={formData.email} onChange={handleChange} required />
          <input type="phone" name="phone" placeholder="Phone" className="w-full px-4 py-2 border rounded-lg" value={formData.phone} onChange={handleChange} required />
          <input type="text" name="address" placeholder="Address" className="w-full px-4 py-2 border rounded-lg" value={formData.address} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" value={formData.password} onChange={handleChange} required />
          <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded-lg" value={formData.confirmPassword} onChange={handleChange} required />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Register</button>
        </form>
        <div className="text-center mt-4">
          <NavLink to="/login" className="text-blue-500">Login Now</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Register;























// import React, { useState } from "react";
// import { NavLink, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const {name,value}=e.target;
//     setFormData((prev)=>({...prev,[name]:value}))
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8000/api/register", formData);
//       console.log(response.data.msg)
//       toast.success(response.data.msg, { position: "top-center", autoClose: 3000 });

//       setTimeout(() => {
//         navigate("/login");
//       }, 3000);
//     } catch (error) {
//       console.log(error)
//       toast.error("An error occurred.", { position: "top-center" });
//     }
//   };

//   return (
//     <div className="container min-h-screen bg-gray-100 flex items-center justify-center">
//       <ToastContainer />
//       <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Register Now</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="username" placeholder="Username" className="w-full px-4 py-2 border rounded-lg" value={formData.username} onChange={handleChange} required />
//           <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 border rounded-lg" value={formData.email} onChange={handleChange} required />
//           <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 border rounded-lg" value={formData.password} onChange={handleChange} required />
//           <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-full px-4 py-2 border rounded-lg" value={formData.confirmPassword} onChange={handleChange} required />
//           <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg">Register</button>
//         </form>
//         <div className="text-center mt-4">
//           <NavLink to="/login" className="text-blue-500">Login Now</NavLink>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;







