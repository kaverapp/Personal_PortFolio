import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom"; // Import Link from react-router-dom


export function Header() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed  top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
      <Link to="/" className="text-black hover:underline dark:text-white">
          Home
        </Link>       
        <Link to="/about" className="text-black hover:underline dark:text-white">
          About
        </Link> 
        <Link to="/github" className="text-black hover:underline dark:text-white">
          GitHub
        </Link>          
        <Link to="/portfolio" className="text-black hover:underline dark:text-white">
          Profile
        </Link> 
      </Menu>
    </div>)
  );
}
