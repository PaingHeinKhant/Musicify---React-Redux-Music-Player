import { FC } from "react";
import "./drawer.css";
import * as drawer from "../../interfaces/drawer";

const Drawer: FC<drawer.DrawerProps> = ({ open }) => {
  return (
    <>
      {open && <div className=""></div>}
      <div className={`drawer ${open ? "open" : ""}`}></div>
    </>
  );
};

export default Drawer;
