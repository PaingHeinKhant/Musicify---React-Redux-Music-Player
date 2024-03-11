import React, { FC } from "react";
import MusicLists from "../musicLists/MusicLists";
import "./drawer.css";
import * as drawer from "../../interfaces/drawer";

const Drawer: FC<drawer.DrawerProps> = ({ open, onClose }) => {
  return (
    <>
      {open && <div className=""></div>}
      <div className={`drawer ${open ? "open" : ""}`}></div>
    </>
  );
};

export default Drawer;
