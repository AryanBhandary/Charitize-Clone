import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#076b60] pb-2">
      <div className="mx-auto flex h-[80px] max-w-[1285px] gap-10 items-center justify-between px-6 lg:px-0">
        {/* Logo */}
        <div className="text-[45px] font-extrabold tracking-[0.05em] text-[#f6a800]">
          Charitize
        </div>

        {/* Contact items (hidden on small screens) */}
        <div className="hidden items-center  py-10 gap-20 justify-around text-sm md:hidden lg:flex">
          {/* Call */}
          <div className="flex items-center gap-3 mx-3">
            <div className="flex h-[30px] w-[30px] p-5 items-center justify-center bg-[#f6a800] text-[22px]">
              📞
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] text-[#f6a800] font-semibold uppercase tracking-[0.15em]">
                Call Us
              </span>
              <span className="text-[15px]">+012 345 6789</span>
            </div>
          </div>

          {/* Mail */}
          <div className="flex items-center gap-3 mx-3">
            <div className="flex h-[30px] w-[30px] p-5 items-center justify-center bg-[#f6a800] text-[22px]">
              ✉️
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] text-[#f6a800] font-semibold uppercase tracking-[0.15em]">
                Mail Us
              </span>
              <span className="text-[15px]">info@domain.com</span>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-center gap-3 mx-3">
            <div className="flex h-[30px] w-[30px] p-5 items-center justify-center bg-[#f6a800] text-[22px]">
              📍
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[15px] text-[#f6a800] font-semibold uppercase tracking-[0.15em]">
                Address
              </span>
              <span className="text-[15px]">123 Street, NY, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;


