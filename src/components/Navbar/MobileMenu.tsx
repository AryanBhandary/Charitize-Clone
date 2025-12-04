import React from "react";
import type { NavLink } from "./Navbar";

type MobileMenuProps = {
  links: NavLink[];
  open: boolean;
  onToggle: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ links, open, onToggle }) => {
  return (
    <div className="flex justify-center pb-4 md:hidden">
      <div className="mt-4 w-[82%] max-w-[360px] bg-[#f6a800] px-7 pb-6 pt-5 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="text-[28px] font-semibold text-[#222222]">
            Menu
          </span>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            onClick={onToggle}
            className="flex h-[46px] w-[60px] items-center justify-center border-4 border-[#ffe7a9] bg-transparent"
          >
            <div className="flex flex-col gap-[6px]">
              <span className="block h-[2px] w-7 bg-[#ffe7a9]" />
              <span className="block h-[2px] w-7 bg-[#ffe7a9]" />
              <span className="block h-[2px] w-7 bg-[#ffe7a9]" />
            </div>
          </button>
        </div>

        {open && (
          <>
            <div className="mt-5 h-[2px] w-full bg-[#ffe7a9]" />
            <ul className="mt-6 space-y-6 text-[20px] font-medium text-[#222222]">
              {links.map((link) => (
                <li key={link.label}>
                  {link.label}
                  {link.hasDropdown && (
                    <span className="ml-1 text-[14px] align-middle">▾</span>
                  )}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;


