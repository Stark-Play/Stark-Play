"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "News", path: "/news" },
    { label: "Games", path: "/games", hasDropdown: true },
    { label: "Community", path: "/community" },
    { label: "Awards", path: "/awards", hasDropdown: true },
    { label: "About us", path: "/about" },
  ];

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between bg-transparent">
      {/* Logo section */}
      <div className="flex-shrink-0">
        <Image
          src="/stark-play-logo.svg"
          alt="STARK Logo"
          width={184}
          height={148}
          priority
          className="object-contain"
        />
      </div>

      {/* Navigation and buttons */}
      <div className="flex items-center space-x-8">
        {/* Navigation items */}
        <nav className="flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.path}>
              {item.hasDropdown ? (
                <div className="dropdown dropdown-hover">
                  {/* biome-ignore lint/a11y/noLabelWithoutControl: <explanation> */}
                  <label
                    tabIndex={0}
                    className={`hover:text-[#008CFF] cursor-pointer text-sm font-medium ${
                      pathname === item.path ? "text-[#008CFF]" : "text-white"
                    }`}
                  >
                    {item.label} {item.hasDropdown && "▾"}
                  </label>
                </div>
              ) : (
                <Link
                  href={item.path}
                  className={`hover:text-[#008CFF] transition-colors text-sm font-medium ${
                    pathname === item.path ? "text-[#008CFF]" : "text-white"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
      {/* Auth buttons */}
      <div className="flex items-center space-x-4">
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="btn btn-ghost text-[#98AAC0] font-medium normal-case"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button
          className="btn  bg-[#3191FF] text-[#000000] border-none font-medium normal-case rounded-[4px]"
          // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
          onClick={() => (window.location.href = "/signup")}
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};
