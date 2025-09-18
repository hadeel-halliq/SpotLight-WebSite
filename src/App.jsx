import { Route, Routes } from "react-router-dom";

import MainLayout from "./MainLayout/MainLayout";
import Home from "./Pages/Home/Home";
import OurServices from "./Pages/OurServices/OurServices";
import ServiceDetails from "./Pages/ServiceDetails/ServiceDetails";
import Partners from "./Pages/Partners/Partners";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Questions from "./Pages/Questions/Questions";
import Projects from "./Pages/Projcts/Projects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import ElectricTips from "./Pages/ElectricTips/ElectricTips";
import Contact from "./Pages/Contact/Contact";
import Error from "./Pages/Error/Error";

function App() {
  return(
    <Routes>
      <Route element={<MainLayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/ourservices" element={<OurServices/>}/>
        <Route path="/ourservices/:serviceId" element={<ServiceDetails/>}/>
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/questions" element={<Questions/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/projects/:projectId" element={<ProjectDetails/>}/>
        <Route path="/electrictips" element={<ElectricTips/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Route>
      <Route path="*" element={<Error/>}/>
    </Routes>
  ) 
}

export default App;
