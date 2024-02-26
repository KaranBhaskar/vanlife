import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/home";
import Vans from "./pages/Vans";
import About from "./pages/About";
import Van from "./pages/Van";
import Layout from "./pages/layout";
import Host from "./pages/host/host";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostLayout from "./pages/host/HostLayout";
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import "./server";
import HostVan from "./pages/host/HostVan";
import HostVanId from "./pages/host/HostVanId";
import HostVanIdDetails from "./pages/host/HostVanIdDetails";
import HostVanIdPhotos from "./pages/host/HostVanIdPhotos";
import HostVanIdPricing from "./pages/host/HostVanIdPricing";
import Login from "./pages/login";
import Authenticate from "./pages/Authenticate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<Van />} />
          <Route path="login" element={<Login />} />

          <Route element={<Authenticate />}>
            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Host />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVan />} />
              <Route path="vans/:id" element={<HostVanId />}>
                <Route index element={<HostVanIdDetails />} />
                <Route path="pricing" element={<HostVanIdPricing />} />
                <Route path="photos" element={<HostVanIdPhotos />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
