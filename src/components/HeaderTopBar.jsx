import React from "react";
import SocialLinks from "./SocialLinks";

const HeaderTopBar = () => {
  let color = "white";
  let width = 1.25;
  let heightAndWidth = 20;
  return (
    <section className="HeaderTopBar w-full bg-[#15307c] flex items-center justify-between px-8 text-[14px]">
      {/* contact info */}
      <div className="flex items-center gap-4 text-white">
        {/* first item */}
        <div className="flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={heightAndWidth}
            height={heightAndWidth}
            viewBox="0 0 24 24"
            color={color}
            fill="none"
            stroke="currentColor"
            stroke-width={width}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-mail"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <h3>info@tecpartner.net</h3>
        </div>
        {/* devidor */}
        <div className="w-[1px] h-5 bg-white"></div>
        {/* second item */}
        <div className="flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={heightAndWidth}
            height={heightAndWidth}
            viewBox="0 0 24 24"
            fill="none"
            color={color}
            stroke="currentColor"
            stroke-width={width}
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-phone"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <h3>USA : +1 (719) 374 8482</h3>
        </div>
      </div>

      {/* social links */}
      <SocialLinks
        color={color}
        width={width}
        heightAndWidth={heightAndWidth}
      />
    </section>
  );
};

export default HeaderTopBar;
