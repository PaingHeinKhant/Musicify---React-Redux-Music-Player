import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import SideBar from "./components/sideBar/SideBar";
import Discover from "./pages/discover/Discover";
import Login from "./pages/login/Login";
// import AlbumDetail from "./components/AlbumDetail";
import MusicShow from "./components/mainMusicShow/MusicShow";
import "./App.css";

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
                  className={`col-10 p-0 ${
                    sidebarVisible ? "col-10" : "col-12"
                  }`}
                >
                  <Discover />
                </div>
              </div>
            </div>
          }
        />
        <Route path="/discover/:id" element={<MusicShow />} />
        {/* <Route path="/detail" element={<MusicShow />} /> */}
      </Routes>
    </>
  );
};

export default App;
