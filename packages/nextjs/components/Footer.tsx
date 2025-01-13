import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  const socialLinks = [
    { name: "Discord", icon: "/discord.svg", href: "#" },
    { name: "X", icon: "/x-twitter.svg", href: "#" },
    { name: "YouTube", icon: "/youtube.svg", href: "#" },
    { name: "Twitch", icon: "/twitch.svg", href: "#" },
    { name: "LinkedIn", icon: "/linkedin.svg", href: "#" },
    { name: "Telegram", icon: "/telegram.svg", href: "#" },
  ];

  return (
    <footer className="w-full py-8 px-4 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        {/* Copyright Text */}
        <p className="text-[#98AAC0] text-center text-sm">
          Welcome to the future of gaming, by gamers, for gamers © 2025 •
          StarkPlay All related content, characters, names <br />
          and materials that could be part of an existing work, are the
          exclusive property of their authors.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-6">
          <Image
            src="/stark-play-logo.svg"
            alt="Stark Play"
            width={120}
            height={40}
            className="mr-4"
          />
          {socialLinks.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="text-[#98AAC0] hover:text-[#008CFF] transition-colors"
            >
              <Image
                src={social.icon}
                alt={social.name}
                width={24}
                height={24}
              />
            </Link>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex items-center gap-8">
          <Link
            href="/privacy"
            className="text-[#98AAC0] hover:text-[#008CFF] transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-[#98AAC0] hover:text-[#008CFF] transition-colors"
          >
            Terms Of Service
          </Link>
          <Link
            href="/register"
            className="text-[#98AAC0] hover:text-[#008CFF] transition-colors"
          >
            Register
          </Link>
        </div>
      </div>
    </footer>
  );
};
