import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import AboutPage from "./layout/AboutPage"
import HomePage from "./layout/HomePage"
import Logement from "./layout/Logement"
import Error from "./layout/ErrorPage/Error"
import Footer from "./components/Footer/Footer";



const App = () => {
  return (
    <>
      <div className="paddingContent">
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
          <Route
            path="/logement/:id"
            element={<Logement/>}
          />
         <Route
            path="*"
            element={<Error/>}
          />
        </Routes>
        </div>
        <Footer/>
      
    </>
  );
};

export default App;