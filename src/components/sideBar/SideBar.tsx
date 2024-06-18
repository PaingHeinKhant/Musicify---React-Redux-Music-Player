import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { RiAlbumFill } from "react-icons/ri";
import { LuMusic2 } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const SideBar = () => {
  const nowYear = new Date().getFullYear();

  return (
    <div className="sidebar z-2 bg-black text-white min-vh-100">
      <div className="mb-4 mt-5">
        <NavLink
          to="/discover"
          className={`d-flex ps-2 my-3 ps-4 text-white-50 line-hide align-items-center ${
            location.pathname === "/discover" ? "activeNavLink" : ""
          }`}
        >
          {location.pathname === "/discover" ? (
            <RiAlbumFill className="fs-4 activeNavLinkColor" />
          ) : (
            <RiAlbumFill className="fs-4 " />
          )}
          <p
            className={`ms-2 m-0  letter-spacing ${
              location.pathname === "/discover" ? "activeNavLinkColor" : ""
            }`}
          >
            Discover
          </p>
        </NavLink>

        <NavLink
          to="/releases"
          className={`d-flex ps-2 my-3 ps-4 text-white-50 line-hide align-items-center ${
            location.pathname === "/releases" ? "activeNavLink" : ""
          }`}
        >
          {location.pathname === "/releases" ? (
            <LuMusic2 className="fs-4 activeNavLinkColor" />
          ) : (
            <LuMusic2 className="fs-4 " />
          )}
          <p
            className={`ms-2 m-0  letter-spacing ${
              location.pathname === "/releases" ? "activeNavLinkColor" : ""
            }`}
          >
            Releases
          </p>
        </NavLink>
      </div>
      <hr />
      <p className="text-white-50 small ps-4">Browse</p>

      <NavLink
        to="/artists"
        className={`d-flex ps-2 my-3 ps-4 text-white-50 line-hide align-items-center ${
          location.pathname === "/artists" ? "activeNavLink" : ""
        }`}
      >
        {location.pathname === "/artists" ? (
          <IoPersonSharp className="fs-4 activeNavLinkColor" />
        ) : (
          <IoPersonSharp className="fs-4 " />
        )}
        <p
          className={`ms-2 m-0 letter-spacing ${
            location.pathname === "/artists" ? "activeNavLinkColor" : ""
          }`}
        >
          Artists
        </p>
      </NavLink>

      <NavLink
        to="/podcasts"
        className={`d-flex ps-2 my-3 ps-4 text-white-50 line-hide align-items-center ${
          location.pathname === "/podcasts" ? "activeNavLink" : ""
        }`}
      >
        {location.pathname === "/podcasts" ? (
          <FaMicrophone className="fs-4 activeNavLinkColor" />
        ) : (
          <FaMicrophone className="fs-4 " />
        )}
        <p
          className={`ms-2 m-0  letter-spacing ${
            location.pathname === "/podcasts" ? "activeNavLinkColor" : ""
          }`}
        >
          Podcasts
        </p>
      </NavLink>

      <NavLink
        to="/podcasts"
        className={`d-flex ps-2 my-3 ps-4 text-white-50 line-hide align-items-center ${
          location.pathname === "/podcasts" ? "activeNavLink" : ""
        }`}
      >
        {location.pathname === "/podcasts" ? (
          <FaStar className="fs-4 activeNavLinkColor" />
        ) : (
          <FaStar className="fs-4 " />
        )}
        <p
          className={`ms-2 m-0  letter-spacing ${
            location.pathname === "/podcasts" ? "activeNavLinkColor" : ""
          }`}
        >
          Favourite
        </p>
      </NavLink>

      <hr />
      <p className="text-white-50 small ps-4">Management</p>

      <NavLink
        to="/podcasts"
        className={`d-flex ps-2 my-3 ps-4 text-white-50 line-hide align-items-center ${
          location.pathname === "/podcasts" ? "activeNavLink" : ""
        }`}
      >
        {location.pathname === "/podcasts" ? (
          <IoMdSettings className="fs-4 activeNavLinkColor" />
        ) : (
          <IoMdSettings className="fs-4 " />
        )}
        <p
          className={`ms-2 m-0  letter-spacing ${
            location.pathname === "/podcasts" ? "activeNavLinkColor" : ""
          }`}
        >
          Setting
        </p>
      </NavLink>

      <div className="ps-4 text-white-50 ">
        <div className="text-white-50 term-margin">
          <p className="cursor">Terms and Conditions</p>
          <p className="">
            {" "}
            &copy; {nowYear} All right reserved PaingHeinKhant
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
