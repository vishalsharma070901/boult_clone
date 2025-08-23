import { Outlet } from "react-router-dom";
import Header from "../Main/Components/Header";
import Footer from "../Main/Components/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const RootLayout = () => {
  return (
    <div className="max-h-screen overflow-hidden">
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Header />
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </ThemeProvider>
    </div>
  );
};

export default RootLayout;
