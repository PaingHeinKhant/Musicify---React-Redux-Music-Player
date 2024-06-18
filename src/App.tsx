import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import SideBar from "./components/sideBar/SideBar";
import Discover from "./pages/discover/Discover";
import Login from "./pages/login/Login";
import MusicShow from "./components/mainMusicShow/MusicShow";
import DetailAlbum from "./components/detailAlbum/DetailAlbum";
import "./App.css";
import Release from "./pages/releases/Release";
import Artists from "./pages/artists/Artists";
import PodCast from "./pages/podcast/PodCast";
import FooterBar from "./components/footerbar/FooterBar";

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/discover"
          element={
            <div className="container-fluid ">
              <div className="row">
                <Navbar
                  toggleSidebar={toggleSidebar}
                  sidebarVisible={sidebarVisible}
                />
                <div className={` col-2 p-0 ${sidebarVisible ? "" : "d-none"}`}>
                  <SideBar />
                </div>
                <div
                  className={`height-body col-10 p-0 ${
                    sidebarVisible ? "col-10" : "col-12"
                  }`}
                >
                  <Discover />
                </div>
              </div>
            </div>
          }
        />
        {/* <Route path="/discover/:id" element={<MusicShow />} /> */}
        <Route
          path="/discover/:id"
          element={
            <div className="container-fluid ">
              <div className="row">
                <Navbar
                  toggleSidebar={toggleSidebar}
                  sidebarVisible={sidebarVisible}
                />
                <div className={` col-2 p-0 ${sidebarVisible ? "" : "d-none"}`}>
                  <SideBar />
                </div>
                <div
                  className={` height-body col-10 p-0 ${
                    sidebarVisible ? "col-10" : "col-12"
                  }`}
                >
                  <DetailAlbum />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/releases"
          element={
            <div className="container-fluid ">
              <div className="row">
                <Navbar
                  toggleSidebar={toggleSidebar}
                  sidebarVisible={sidebarVisible}
                />
                <div className={` col-2 p-0 ${sidebarVisible ? "" : "d-none"}`}>
                  <SideBar />
                </div>
                <div
                  className={` height-body col-10 p-0 ${
                    sidebarVisible ? "col-10" : "col-12"
                  }`}
                >
                  <Release />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/artists"
          element={
            <div className="container-fluid ">
              <div className="row">
                <Navbar
                  toggleSidebar={toggleSidebar}
                  sidebarVisible={sidebarVisible}
                />
                <div className={` col-2 p-0 ${sidebarVisible ? "" : "d-none"}`}>
                  <SideBar />
                </div>
                <div
                  className={`height-body col-10 p-0 ${
                    sidebarVisible ? "col-10" : "col-12"
                  }`}
                >
                  <Artists />
                </div>
              </div>
            </div>
          }
        />
        <Route
          path="/podcasts"
          element={
            <div className="container-fluid ">
              <div className="row">
                <Navbar
                  toggleSidebar={toggleSidebar}
                  sidebarVisible={sidebarVisible}
                />
                <div className={` col-2 p-0 ${sidebarVisible ? "" : "d-none"}`}>
                  <SideBar />
                </div>
                <div
                  className={`height-body col-10 p-0 ${
                    sidebarVisible ? "col-10" : "col-12"
                  }`}
                >
                  <PodCast />
                </div>
              </div>
            </div>
          }
        />
      </Routes>

      <div className="navbar-bottom">
        <FooterBar />
      </div>
    </>
  );
};

export default App;
