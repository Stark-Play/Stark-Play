"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~~/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~~/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~~/components/ui/dropdown-menu";
import { cn } from "~~/lib/utils";

export const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    {
      label: "Games",path: "/games",},
    { label: "News", path: "/news" },
    { label: "Community", path: "/community" },
    {
      label: "Awards",
      path: "/awards",
      hasDropdown: true,
      dropdownItems: [
        { label: "Hall of Fame", path: "/awards/hall-of-fame" },
        { label: "Monthly Awards", path: "/awards/monthly" },
        { label: "Nominations", path: "/awards/nominate" },
      ],
    },
  ];

  return (
    <div className="w-full px-24 py-2 flex items-center justify-between bg-transparent">
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

      {/* Navigation section - Centered */}
      <div className="flex-1 flex justify-center">
        <NavigationMenu>
          <NavigationMenuList className="flex items-center space-x-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.path}>
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className={cn(
                          "h-auto p-0 font-medium textarea-md hover:text-[#008CFF]",
                          pathname.startsWith(item.path)
                            ? "text-[#008CFF]"
                            : "text-white"
                        )}
                      >
                        {item.label} <span className="ml-1">▾</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="center"
                      className="bg-[#71729f8b] border-white/10"
                    >
                      {item.dropdownItems?.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.path}>
                          <Link
                            href={dropdownItem.path}
                            className="text-white hover:text-[#008CFF]"
                          >
                            {dropdownItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.path}
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "h-auto p-0 font-medium text-sm bg-transparent hover:text-[#008CFF] hover:bg-transparent",
                      pathname === item.path ? "text-[#008CFF]" : "text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Auth buttons */}
      <div className="flex items-center space-x-4 flex-shrink-0">
        <Button
          variant="ghost"
          className="text-[#98AAC0] font-medium normal-case hover:text-[#008CFF] hover:bg-transparent"
          onClick={() => (window.location.href = "/sign-up")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
