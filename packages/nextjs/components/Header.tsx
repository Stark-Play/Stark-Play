import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "~~/components/ui/button";
import { Menu } from "lucide-react";
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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~~/components/ui/sheet";
import { cn } from "~~/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Games", path: "/games" },
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

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/5">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-24">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/stark-play-logo.svg"
              alt="STARK Logo"
              width={184}
              height={148}
              priority
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
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
                              "h-auto p-0 font-medium text-sm hover:text-[#008CFF]",
                              pathname.startsWith(item.path)
                                ? "text-[#008CFF]"
                                : "text-white",
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
                          pathname === item.path
                            ? "text-[#008CFF]"
                            : "text-white",
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

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              className="hidden md:inline-flex text-[#98AAC0] font-medium normal-case hover:text-[#008CFF] hover:bg-transparent"
              // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
              onClick={() => (window.location.href = "/sign-up")}
            >
              Login
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="h-5 w-5 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-[#71729f8b] border-white/10"
              >
                <SheetHeader>
                  <SheetTitle className="text-white">Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  <MobileNavigation pathname={pathname} />
                  <MobileAuthButton />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileNavigation = ({ pathname }: { pathname: string }) => {
  return (
    <nav className="flex flex-col space-y-4">
      {navItems.map((item) => (
        <div key={item.path}>
          {item.hasDropdown ? (
            <>
              <div className="text-[#008CFF] font-medium mb-2">
                {item.label}
              </div>
              <div className="ml-4 flex flex-col space-y-2">
                {item.dropdownItems?.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.path}
                    href={dropdownItem.path}
                    className={cn(
                      "text-sm transition-colors hover:text-[#008CFF]",
                      pathname === dropdownItem.path
                        ? "text-[#008CFF]"
                        : "text-white",
                    )}
                  >
                    {dropdownItem.label}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-[#008CFF]",
                pathname === item.path ? "text-[#008CFF]" : "text-white",
              )}
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};

const MobileAuthButton = () => {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start text-[#98AAC0] font-medium normal-case hover:text-[#008CFF] hover:bg-transparent"
      // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
      onClick={() => (window.location.href = "/sign-up")}
    >
      Login
    </Button>
  );
};

export default Header;
