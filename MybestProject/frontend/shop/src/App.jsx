import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Herosection } from "./component/Herosection";
import { Title } from "./component/Title";
import { ErrorPage } from "./pages/ErrorPage";
import Register from "./pages/Register";
import { Login } from "./pages/Login";
import { MyAccount } from "./pages/MyAccount";
import { Dashboard } from "./admin/Dashboard";
import { FoodCart } from "./products/FoodCart";
import { Cart } from "./products/Cart";
import { DynamicPage } from "./products/DynamicPage";
import { DynamicPageApi } from "./products/DynamicPageApi";
import { Services } from "./component/Services";
import { BuildingProcess } from "./component/BuildingProcess";
import { Aboutus } from "./component/Aboutus";
import HowItWorks from "./component/HowItWorks";
import { ConstructionServices } from "./component/ConstructionServices";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,

    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <>
            <Title />
            <Herosection />
            <Services/>
            <BuildingProcess />
            <FoodCart />
            <HowItWorks/>
          </>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: (
          <>
          <Aboutus/>
          <BuildingProcess />
          </>
          ),
      },
       {
        path: "/product",
        element: <FoodCart />,
      },
      {
        path: "/product/:id",
        element: <DynamicPage />,
        loader: DynamicPageApi
      },
       {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/building",
        element: <BuildingProcess/>,
      },
        {
        path: "/working",
        element: <HowItWorks/>,
      },
        {
    path: "/profile",
    element: <MyAccount />,
  },
       {
    path: "/cservice",
    element: <ConstructionServices />,
  },

    ],
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/admin",
    element: <Dashboard />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
