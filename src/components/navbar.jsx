import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrollOpacity, setScrollOpacity] = useState(50);

  useEffect(() => {
    const handleScroll = () => {
      const newOpacity = window.scrollY > 1000 ? 100 : 50;
      setScrollOpacity(newOpacity);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    // { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
  ];

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("toggleNavbar").click();
  };
  const onClickLogo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed top-0 z-10 w-full bg-[#1ab4d8] bg-opacity-${scrollOpacity}`}
      id="navbar"
    >
      <nav className="container relative mx-auto flex flex-wrap items-center justify-between p-8 lg:justify-between xl:px-0">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex w-full flex-wrap items-center justify-between lg:w-auto">
                <Link to="/" onClick={onClickLogo}>
                  <span className="flex items-center space-x-2 text-2xl font-medium text-gray-800">
                    <span>
                      <img
                        src="/Logo/woodrock.png"
                        alt="N"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span className="hidden md:flex">
                      Woodrock Infotech Private Limited
                    </span>
                    <span className="flex md:hidden">Woodrock</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  id="toggleNavbar"
                  className="ml-auto rounded-md px-2 py-1 text-gray-800 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none lg:hidden"
                >
                  <svg
                    className="h-6 w-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="my-5 flex w-full flex-wrap lg:hidden">
                  <>
                    {navigation.map((item, index) => (
                      <Link
                        onClick={onClick}
                        key={index}
                        to={item.href}
                        className="-ml-4 w-full rounded-md px-4 py-2 text-gray-800 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="flex-1 list-none items-center justify-end pt-6 lg:flex lg:pt-0">
            {navigation.map((menu, index) => (
              <li className="nav__item mr-3" key={index}>
                <Link
                  onClick={onClick}
                  to={menu.href}
                  className="inline-block rounded-md px-4 py-2 text-lg font-normal text-gray-900 no-underline hover:text-indigo-500 focus:bg-gray-800 focus:text-indigo-500 focus:outline-none"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
