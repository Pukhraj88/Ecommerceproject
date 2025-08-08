import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const err = useRouteError();
  const navigate=useNavigate();

  const handleBackButton=()=>{
    navigate(-1);
  }

  return (
   <div className="owncontainer flex justify-center items-center h-screen bg-gray-100">
  <div className="main-body-error bg-white p-8 rounded-lg shadow-md text-center">
    <h2 className="error-title text-2xl font-bold text-red-500 mb-4">Oops! Something went wrong.</h2>
    <p className="error-message text-gray-700 mb-2">Error: {err.error.message}</p>
    <p className="error-status text-gray-700 mb-4">Status: {err.status}</p>
    <div className="flex justify-center gap-4">
      <NavLink to="/" className="error-link px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300" onClick={handleBackButton}>Back</NavLink>
      <NavLink to="/" className="error-link px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700 focus:outline-none focus:ring focus:border-green-300">Go to Home</NavLink>
    </div>
  </div>
</div>
  );
};
