import { FunctionComponent } from "react";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";
import { useState } from "react";
import SearchBox from "../searchBox/SearchBox";
import "./navbar.css";

interface NavbarProps {
  toggleSidebar: () => void;
  sidebarVisible: boolean;
}

const Navbar: FunctionComponent<NavbarProps> = ({
  toggleSidebar,
  sidebarVisible,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <nav className="navbar z-3 navbar-light navbar-full-height bg-black sticky top-0">
      <div className="container-fluid">
        <div className="row w-100 align-items-center">
          <div className="col-3 d-flex align-items-center">
            <div
              className="navbar-toggler btn-link text-white me-2"
              onClick={toggleSidebar}
            >
              <FaBars />
            </div>
            <div className="d-flex text-white align-items-center">
              {/* <RiNeteaseCloudMusicFill className="fs-1 me-1" /> */}
              <h3 className="text-uppercase m-0">Musicify</h3>
            </div>
          </div>
          <div className="col-6">
            <SearchBox />
          </div>
          <div className="col-3 d-flex justify-content-end align-items-center position-relative">
            <div
              className="d-flex align-items-center me-2"
              onClick={toggleDropdown}
            >
              <IoPersonCircleSharp className="fs-1 me-1 text-white" />
              <span className="text-white">Paing Hein Khant</span>
              {dropdownVisible ? (
                <TiArrowSortedUp className="fs-4 me-1 text-white" />
              ) : (
                <IoMdArrowDropdown className="fs-4 me-1 text-white" />
              )}
            </div>

            {dropdownVisible && (
              <div className="position-absolute logout-btn p-3 top-100 end-0 mt-2 bg-black">
                <span className="text-white d-flex align-items-center">
                  <RiLogoutCircleRFill className="fs-4 me-2 text-white" />
                  <span className="text-white">Log Out</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
