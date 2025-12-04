import React from "react";
import type { NavLink } from "./Navbar";

type DesktopNavProps = {
  links: NavLink[];
};

const DesktopNav: React.FC<DesktopNavProps> = ({ links }) => {
  return (
    <nav className="hidden bg-[#f6a800] h-[70px] max-w-[1285px] mx-auto md:block">
      <div className="mx-auto flex h-[64px] items-center justify-between px-6">
        {/* Menu */}
        <ul className="flex items-center gap-8 text-[18px] font-medium text-[#222222]">
          {links.map((link) => (
            <li
              key={link.label}
              className={`cursor-pointer ${
                link.label === "Home"
                  ? "relative font-semibold text-white"
                  : ""
              }`}
            >
              {link.label}
              {link.label === "Home" && (
                <span className="absolute -bottom-[6px] left-0 h-[3px] w-full bg-white" />
              )}
              {link.hasDropdown && (
                <span className="ml-1 text-[13px] align-middle">▾</span>
              )}
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="flex items-center gap-2">
          <button className="flex h-[40px] w-[40px] items-center justify-center rounded-[3px] bg-[#222222] text-[18px] text-white">
            𝕏
          </button>
          <button className="flex h-[40px] w-[40px] items-center justify-center rounded-[3px] bg-[#222222] text-[18px] text-white">
            f
          </button>
          <button className="flex h-[40px] w-[40px] items-center justify-center rounded-[3px] bg-[#222222] text-[18px] text-white">
            ▶
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;


