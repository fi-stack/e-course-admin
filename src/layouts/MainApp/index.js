import { Outlet } from "react-router-dom";
import Footer from "../../components/molecules/Footer";
import Navbar from "../../components/molecules/Navbar";
import Sidebar from "../../components/molecules/Sidebar";

const MainApp = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainApp;
