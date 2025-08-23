import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Hero from "./Main/Components/Hero";
import Footer from "./Main/Components/Footer";
import Home from "./Main/Pages/Home";
import Chat from "./Main/Components/Chat";


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/chat",
        element: <Chat/>,
      },
      // Add more routes here as needed
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
