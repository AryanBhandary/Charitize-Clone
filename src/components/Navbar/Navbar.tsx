import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

export type NavLink = {
  label: string;
  hasDropdown?: boolean;
};

const NAV_LINKS: NavLink[] = [
  { label: "Home" },
  { label: "About" },
  { label: "Service" },
  { label: "Donation" },
  { label: "Pages", hasDropdown: true },
  { label: "Contact" },
];

const Navbar: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <header
      className={[
        "w-full bg-[#076b60] text-white",
        "transition-all duration-700 ease-out",
        mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4",
      ].join(" ")}
    >
      <TopBar />
      {/* Desktop inline nav */}
      <DesktopNav links={NAV_LINKS} />
      {/* Mobile card menu */}
      <MobileMenu
        links={NAV_LINKS}
        open={mobileOpen}
        onToggle={() => setMobileOpen((prev) => !prev)}
      />
    </header>
  );
};

export default Navbar;