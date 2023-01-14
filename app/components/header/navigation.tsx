"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { links } from "../../utils/paths";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav className=" text-gray-400 px-6 border-b border-gray-200">
      <ul className="flex">
        {links.map(({ href, label }, index) => (
          <Link
            key={label.toLowerCase()}
            href={href}
            className={`hover:text-emerald-400 transition-colors p-4 font-bold ${
              pathname == href ? "text-emerald-400" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
