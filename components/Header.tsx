import React, { useEffect, useState } from "react";
import Image from "next/image";
import { assets } from "../assets/assets";
import { FiMoon, FiMenu, FiSearch } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { HiOutlineArrowTopRightOnSquare } from 'react-icons/hi2';

const Navbar: React.FC = () => {

  const [isScroll, setIsScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  // Swipe handler
  const handlers = useSwipeable({
    onSwipedRight: () => {
      if (isOpen) closeMenu();
    },
    delta: 50,
  });
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (scrollY > 40) {
        setIsScroll(true)
      } else {
        setIsScroll(false)
      }
    })
  }, [])

  return (
    <>

      <nav className={`fixed top-0 left-0 right-0 flex items-center justify-between px-5 lg:px-8 xl:px-[7%] py-0.5 z-50 bg-transparent ${isScroll ? "md:bg-white md:bg-opacity-10 md:backdrop-blur-lg  md:shadow-sm" : ""}`}>
        {/* Logo */}
        <a href="/">
          <Image
            src={assets.logo}
            alt="Logo"
            className="w-24 cursor-pointer mr-14"
            priority
          />
        </a>

        {/* Masaüstü menü */}
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 text-lg rounded-full px-12 py-3 ${isScroll ? "text-white" : " bg-white bg-opacity-70 shadow-sm"}`}>
          <li>
            <Link className="font-Ovo" href="/">
              Anasayfa
            </Link>
          </li>
          <li>
            <Link
              className="font-Ovo" href="/about">
              Hakkımda
            </Link>

          </li>

          <li>
            <Link className="font-Ovo" href="/game">
              Oyunlar
            </Link>
          </li>
          <li>
            <FiSearch className={`text-xl text-gray-600 ${isScroll ? "text-white" : ""}`} />
          </li>
        </ul>

        {/* Sağdaki ikonlar */}
        <div className="flex items-center gap-4">

          {/* <ThemeToggle /> */}


          <Link
            href="#contact"
            className={`hidden lg:flex text-lg items-center gap-3 px-12 py-2.5 rounded-full  ml-4 font-Ovo ${isScroll ? "text-white" : " bg-white bg-opacity-80 shadow-sm border border-gray-500"}`}
          >
            Contact
            <HiOutlineArrowTopRightOnSquare className={`w-3 ${isScroll ? "text-white " : ""}`} />
          </Link>

          {/* Mobil menü butonu */}
          <button
            className="block md:hidden ml-3"
            onClick={openMenu}
            aria-label="Menüyü Aç"
          >
            <FiMenu className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Overlay (menü açıkken) */}
        {isOpen && (
          <div
            onClick={closeMenu}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />
        )}

        {/* Mobil menü */}
        <ul
          {...handlers}
          className={`fixed top-0 right-0 h-screen w-64 bg-rose-50 py-20 px-10 flex flex-col gap-4 transition-transform duration-500 transform md:hidden z-50 ${isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          aria-hidden={!isOpen}
        >
          <button
            onClick={closeMenu}
            className="absolute right-6 top-6"
            aria-label="Menüyü Kapat"
          >
            <Image
              src={assets.close_black}
              alt="Close Icon"
              className="w-5 cursor-pointer"
            />
          </button>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="/">
              Anasayfa
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#about">
              Hakkımda
            </a>
          </li>

          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#game">
              Oyunlar
            </a>
          </li>
          <li>
            <a className="font-Ovo" onClick={closeMenu} href="#contact">
              İletişim
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
