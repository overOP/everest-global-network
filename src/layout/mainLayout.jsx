import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./footer";


const MainLayout = () => {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
