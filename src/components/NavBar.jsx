import { Fragment } from "react";
import { Button } from "./ui/button";
import "../index.css";
export default function NavBar() {
  return (
    <>
      <div className="fixed flex z-50 top-0 w-full justify-between px-12 bg-white items-center py-6 backdrop-blur-lg backdrop-filter bg-opacity-75">
        <div>Logo</div>
        <div className="flex items-center gap-5">
          <ul className="flex gap-8 text-[16px]">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Learning Path</a>
            </li>
            <li>
              <a href="">Langganan</a>
            </li>
            <li>
              <a href="">About Us</a>
            </li>
          </ul>
          <div className="flex gap-2 ">
            <Button variant="outline" className="border-slate-800 text-[16px] bg-transparent font-bold h-8 hover:bg-black hover:text-white">
              Login
            </Button>
            <Button variant="default" className="font-bold text-[16px] h-8">
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
