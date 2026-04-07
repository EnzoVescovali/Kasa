import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./layout/AboutPage"
import HomePage from "./layout/HomePage"
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route 
          path="/"
          element={<HomePage/>}
        />
        <Route 
          path="/a-propos"
          element={<AboutPage/>}
        />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;