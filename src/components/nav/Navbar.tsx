import { FunctionComponent } from "react";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";
import { RiLogoutCircleRFill } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";

import { useState } from "react";
import "./navbar.css";

interface NavbarProps {
  toggleSidebar: () => void;
  sidebarVisible: boolean;
}
const Navbar: FunctionComponent<NavbarProps> = ({
  toggleSidebar,
  sidebarVisible,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  };
  return (
    <nav className="navbar z-3 navbar-light bg-black sticky-top top-0">
      <div className="container-fluid">
        <div className="navbar-brand d-flex align-items-center ">
          <div
            className="navbar-toggler btn-link text-white"
            onClick={toggleSidebar}
          >
            {sidebarVisible ? <FaBars /> : <FaBars />}
          </div>
          <div className="d-flex text-white align-items-center">
            <RiNeteaseCloudMusicFill className="fs-1 me-1" />
            <h3 className="text-uppercase m-0">Musicify</h3>
          </div>
        </div>

        <div className="me-2" onClick={toggleDropdown}>
          <IoPersonCircleSharp className="fs-1 me-1 text-white " />
          <span className="text-white">Paing Hein Khant</span>
          {dropdownVisible ? (
            <TiArrowSortedUp className="fs-4 me-3 text-white " />
          ) : (
            <IoMdArrowDropdown className="fs-4 me-3 text-white " />
          )}
        </div>

        {dropdownVisible && (
          <div className="position-absolute logout-btn my-4 p-3  top-100 end-0 translate-middle p-2 bg-black">
            <span className="text-white">
              <RiLogoutCircleRFill className="fs-4 me-3 text-white " />
              <span className="text-white">Log Out</span>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
