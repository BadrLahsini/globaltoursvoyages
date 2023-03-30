import "./App.css";
import React, { Suspense, CSSProperties } from "react";
// import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import MoonLoader from "react-spinners/MoonLoader";
// import Affaires from "./components/Affaires";
// import Hebergement from "./components/Hebergement";
// import Omra from "./components/Omra";
// import CircuitsMaroc from "./components/CircuitsMaroc";
// import Contact from "./components/Contact";

// import Gallery from "./components/Gallery";
// import Seminaires from "./components/Evenements/Seminaires";
// import TeamBuilding from "./components/Evenements/TeamBuilding";
// import Incentives from "./components/Evenements/Incentives";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

const Home = React.lazy(() => import("./components/Home"));
const Affaires = React.lazy(() => import("./components/Affaires"));
const Hebergement = React.lazy(() => import("./components/Hebergement"));
const Omra = React.lazy(() => import("./components/Omra"));
const CircuitsMaroc = React.lazy(() => import("./components/CircuitsMaroc"));
const Contact = React.lazy(() => import("./components/Contact"));
const Gallery = React.lazy(() => import("./components/Gallery"));
const Seminaires = React.lazy(() =>
  import("./components/Evenements/Seminaires")
);
const TeamBuilding = React.lazy(() =>
  import("./components/Evenements/TeamBuilding")
);
const Incentives = React.lazy(() =>
  import("./components/Evenements/Incentives")
);

const Transport = React.lazy(() => import("./components/Transport"));

const Incomings = React.lazy(() => import("./components/Incomings"));

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  return (
    <>
      <Navbar stickyNav={true}></Navbar>
      <Suspense
        fallback={
          <div>
            <MoonLoader
              cssOverride={override}
              size={150}
              color="rgba(255, 227, 77, 1)"
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        }
      >
        <Routes>
          <Route
            index
            element={
              <ScrollToTop>
                <Home />
              </ScrollToTop>
            }
          />
          <Route
            path="Affaires"
            element={
              <ScrollToTop>
                <Affaires />
              </ScrollToTop>
            }
          />

          <Route
            path="Gallery"
            element={
              <ScrollToTop>
                <Gallery />
              </ScrollToTop>
            }
          />
          <Route
            path="Incomings"
            element={
              <ScrollToTop>
                <Incomings />
              </ScrollToTop>
            }
          />
          <Route
            path="Transport"
            element={
              <ScrollToTop>
                <Transport />
              </ScrollToTop>
            }
          />
          <Route
            path="CircuitsMaroc"
            element={
              <ScrollToTop>
                <CircuitsMaroc />
              </ScrollToTop>
            }
          />
          <Route
            path="Hebergement"
            element={
              <ScrollToTop>
                <Hebergement />
              </ScrollToTop>
            }
          />
          <Route
            path="Omra"
            element={
              <ScrollToTop>
                <Omra />
              </ScrollToTop>
            }
          />
          <Route
            path="Contact"
            element={
              <ScrollToTop>
                <Contact />
              </ScrollToTop>
            }
          />
          <Route
            path="Seminaires"
            element={
              <ScrollToTop>
                <Seminaires />
              </ScrollToTop>
            }
          />
          <Route
            path="TeamBuilding"
            element={
              <ScrollToTop>
                <TeamBuilding />
              </ScrollToTop>
            }
          />
          <Route
            path="Incentives"
            element={
              <ScrollToTop>
                <Incentives />
              </ScrollToTop>
            }
          />
        </Routes>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
