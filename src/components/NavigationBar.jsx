import { Button } from "./ui/button";
import "../index.css";

import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import PapanIklan from "./papanIklan";

export default function NavigationBar() {
  return (
    <>
      <PapanIklan />
      <nav className="sticky top-0  flex z-50 w-full justify-between px-12 bg-white items-center py-4 backdrop-blur-lg backdrop-filter bg-opacity-75">
        <div className="border-2 px-5 py-2 border-gray-700">Company Logo</div>
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
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-[16px] hover:text-[#daa000] bg-transparent">Courses</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <div className="w-[200px] p-5 gap-4 flex flex-col">
                      <p>Courses 1</p>
                      <p>Courses 2</p>
                    </div>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex gap-2 ">
            <Button variant="outline" className="border-slate-800 text-[16px] bg-transparent font-bold h-8 hover:bg-black hover:text-white sticky top-0">
              Login
            </Button>
            <Button variant="default" className="font-bold text-[16px] h-8">
              Sign Up
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}
