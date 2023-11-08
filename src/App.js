import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./style.css";
import Navbar from "./components/Navbar/Navbar";
import SideMenu from "./components/SideMenu/SideMenu";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  const queryClient = new QueryClient();

  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div>
          <Navbar />
          <div className="layout">
            <div className="layout_side">
              <SideMenu />
            </div>
            <div className="layout_outlet">
              <Outlet />
            </div>
          </div>
        </div>
      </QueryClientProvider>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
