import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "../component/Loader";

// Lazy load pages
const Home = lazy(() => import("../component/ProductPage"));
const Login = lazy(() => import("../component/login"));

function AllRoute() {
  return (
    <Router>
      <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default AllRoute;
