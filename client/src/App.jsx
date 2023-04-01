import { Route, Routes } from "react-router-dom";

//  <----- Components ----->
import { NavBar } from "./components/NavBar/NavBar.jsx";
import { Footer } from "./components/Footer/Footer.jsx"

//  <----- Pages ----->
import { Home } from "./pages/Home/Home.jsx";

const AppRouter = () => {
  return (
    <>
        <NavBar />
        
        <Routes>

          {/* <Route
          path="*"
          element={<Error/>}
          /> */}

          <Route 
          exact path= "/"
          element={<Home/>} 
          />

        </Routes>

        <Footer />
    </>
  );
};

export default AppRouter;
