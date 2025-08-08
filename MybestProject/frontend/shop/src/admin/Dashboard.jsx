import React from "react";
import { FaHome, FaUsers, FaBox, FaBars, FaTimes } from "react-icons/fa";
import { User } from "./User";
import Home from "./Home";
import AddProduct from "./AddProduct";

const Navbar = ({ setPage, isMobileNavOpen, setIsMobileNavOpen }) => (
  <>
    <button
      onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
      className="fixed top-4 left-4 z-50 lg:hidden bg-blue-700 text-white p-2 rounded-md shadow-lg"
    >
      {isMobileNavOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>

    <div
      className={`bg-blue-700 h-screen w-64 p-6 fixed flex flex-col space-y-6 text-white shadow-xl transition-all duration-300
        ${isMobileNavOpen ? "left-0" : "-left-64"} lg:left-0 z-40`}
    >
      <h1 className="text-3xl font-bold text-center">Dashboard</h1>
      <nav className="flex flex-col space-y-4 mt-6">
        <NavButton
          icon={<FaHome />}
          text="Home"
          onClick={() => setPageWithClose(setPage, setIsMobileNavOpen, "home")}
        />
        <NavButton
          icon={<FaUsers />}
          text="Users"
          onClick={() => setPageWithClose(setPage, setIsMobileNavOpen, "users")}
        />
         <NavButton
          icon={<FaUsers />}
          text="AddProduct"
          onClick={() => setPageWithClose(setPage, setIsMobileNavOpen, "addproduct")}
        />
      </nav>
    </div>
  </>
);

const setPageWithClose = (setPage, setIsMobileNavOpen, page) => {
  setPage(page);
  setIsMobileNavOpen(false);
};

const NavButton = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center space-x-3 px-4 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 hover:translate-x-1"
  >
    {icon} <span>{text}</span>
  </button>
);

export const Dashboard = () => {
  const [page, setPage] = React.useState("home");
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Navbar
        setPage={setPage}
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      <main className="flex-1 p-4 lg:p-8 lg:ml-64 transition-all duration-300">
        {page === "home" && <Home />}
        {page === "users" && <User />}
        {page === "addproduct" && <AddProduct />}
      </main>
    </div>
  );
};
