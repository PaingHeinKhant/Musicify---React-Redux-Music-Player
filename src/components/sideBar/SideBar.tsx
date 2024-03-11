import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.css";
import { RiAlbumFill } from "react-icons/ri";
import { LuMusic2 } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { IoMusicalNotes } from "react-icons/io5";
import { MdOutlineQueueMusic } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="sidebar bg-black text-white min-vh-100">
      <div className="ps-4 mb-4 mt-5">
        <NavLink
          to="/discover"
          // activeClassName="active-sidebar"
          className="d-flex ps-2 my-3 align-items-center active-sidebar"
        >
          <RiAlbumFill className="fs-4" />
          <p className="ms-2 m-0 text-uppercase small letter-spacing">
            Discover
          </p>
        </NavLink>

        <div className="d-flex ps-2 my-3 align-items-center">
          <LuMusic2 className="fs-4" />
          <p className="ms-2 m-0 text-uppercase small letter-spacing">
            library
          </p>
        </div>
      </div>
      <hr />
      <p className="text-white-50 small ps-4">Browse</p>
      <div className="ps-4 my-4">
        <div className="d-flex my-3 align-items-center">
          <IoPersonSharp className="fs-4" />
          <p className="ms-2 m-0 small letter-spacing">Artists</p>
        </div>
        <div className="d-flex my-3 align-items-center">
          <IoMusicalNotes className="fs-4" />
          <p className="ms-2 m-0 small letter-spacing">Albums</p>
        </div>
        <div className="d-flex my-3 align-items-center">
          <MdOutlineQueueMusic className="fs-4" />
          <p className="ms-2 m-0 small letter-spacing">Playlists</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
