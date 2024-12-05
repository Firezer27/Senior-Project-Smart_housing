import OwnerPage from "./Pages/OwnerPage";
import RegistrationForm from "./Pages/SignUp";
import { Routes, Route } from 'react-router-dom';
import TenantPage from "./Pages/TenantPage";
import Login from "./Pages/LoginPage";
import FrontPage from "./Pages/FrontPage";
import Home from "./Pages/Home";
import { Footer } from "./components/Footer";
import Filter from "./components/Filter";
import NavBar from "./components/NavBar";
import PropertyCard from "./components/PropertyCard";
function App() {
  return (
    <>
         {/* <Routes>
         <Route path="/" element={<FrontPage/>} />
            <Route path="/registrationForm" element={<RegistrationForm />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/ownerPage" element={<OwnerPage/>} />
            <Route path="/tenantPage" element={<TenantPage/>} />
            <Route path="/homePage" element={<Home/>}/>
         </Routes> */}
         <Home/>
         
</>
  );
}

export default App;
