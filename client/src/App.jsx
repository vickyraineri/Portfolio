import { Route, Routes } from "react-router-dom";

//  <----- Components ----->
import { NavBar } from "./components/NavBar/NavBar.jsx";

//  <----- Pages ----->
import { Home } from "./pages/Home/Home.jsx";
import { Projects } from "./pages/Projects/Projects.jsx";
import { Technologies } from "./pages/Technologies/Technologies.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import { Error } from "./pages/Error/Error.jsx";
import { About } from "./pages/About/About.jsx";

const AppRouter = () => {
  return (
    <>
        <NavBar />
        
        <Routes>

          <Route
          path="*"
          element={<Error/>}
          />

          <Route 
          exact path= "/home"
          element={<Home/>} 
          />

          <Route
          exact path="/projects"
          element={<Projects/>}
          />

          <Route
          exact path="/technologies"
          element={<Technologies/>}
          />

          <Route
          exact path="/contact"
          element={<Contact/>}
          />

          <Route
          exact path="/about"
          element={<About/>}
          />

        </Routes>

    </>
  );
};

export default AppRouter;
