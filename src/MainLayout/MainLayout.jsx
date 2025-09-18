import { Outlet } from "react-router-dom";
import Header from "../Components/LayOuts/Header";
import ScrollToTop from "../Components/LayOuts/ScrollToTop";
import Footer from "../Components/LayOuts/Footer";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop/>
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </>
  )
}
