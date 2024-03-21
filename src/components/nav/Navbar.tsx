import { FunctionComponent } from "react";
import { RiNeteaseCloudMusicFill } from "react-icons/ri";
import { IoPersonCircleSharp } from "react-icons/io5";
import { FaBars } from "react-icons/fa";

interface NavbarProps {
  toggleSidebar: () => void;
  sidebarVisible: boolean;
}
const Navbar: FunctionComponent<NavbarProps> = ({
  toggleSidebar,
  sidebarVisible,
}) => {
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
        <div className="me-2">
          <IoPersonCircleSharp className="fs-1 me-1 text-white " />
          <span className="text-white">Paing Hein Khant</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
