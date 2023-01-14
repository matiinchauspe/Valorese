import Link from "next/link";
import Image from "next/image";

import { links } from "../../utils/paths";

import Title from "./title";
import Navigation from "./navigation";

const Header = () => (
  <section className="flex flex-col gap-6">
    <div className="flex justify-center gap-8 items-center">
      {/* Icons */}
      <div className="flex gap-4">
        {links.slice(0, 2).map(({ image, label, href }) => (
          <Link href={href} key={label.toLowerCase()}>
            <Image
              src={image}
              alt={`${label} image`}
              width={60}
              height={60}
              className="cursor-pointer drop-shadow-md shadow-gray-200 hover:scale-[120%] transition-all opacity-50"
            />
          </Link>
        ))}
      </div>
      {/* Title */}
      <div>
        <Link href="/">
          <Title classes="font-bold text-5xl text-emerald-600 drop-shadow-md shadow-gray-200 transition-all hover:scale-[110%]">
            Valóre$e
          </Title>
        </Link>
      </div>
      {/* Icons */}
      <div className="flex gap-4">
        {links.slice(2).map(({ image, label, href }) => (
          <Link href={href} key={label.toLowerCase()}>
            <Image
              src={image}
              alt="libra image"
              width={60}
              height={60}
              className="cursor-pointer drop-shadow-md shadow-gray-200 hover:scale-[120%] transition-all opacity-50"
            />
          </Link>
        ))}
      </div>
    </div>
    <Navigation />
  </section>
);

export default Header;
