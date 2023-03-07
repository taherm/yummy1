import { Route, Routes } from "react-router-dom";
import About from "./About";
import Features from "./Features";
import Header from "./Header";
import Menu from "./Menu";
import Section1 from "./Section1";
import Login from "./Login";
import "./assets/vendor/bootstrap/css/bootstrap.min.css";
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "./assets/vendor/aos/aos.css";
import "./assets/vendor/glightbox/css/glightbox.min.css";
import "./assets/vendor/swiper/swiper-bundle.min.css";
import "./assets/css/main.css";
import { RequireAuth } from "react-auth-kit";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/about"
          element={
            <RequireAuth loginPath="/login">
              <About />
            </RequireAuth>
          }
        />
        <Route path="/section1" element={<Section1 />} />
        <Route path="/features" element={<Features />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
