'use client';
import {File} from "lucide-react"
import { useEffect, useState } from "react";
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);


const Header = () => {
    const [direction, setDirection] = useState<"up" | "down" | "">("up");
    const [scrolled, setScrolled] = useState<number>(0)

    const NavList = () => {
        return (
            <>
            <li>
                <button
                onClick={() => scrollToSection('about')}
                >
                ABOUT ME
                </button>
            </li>
            <p>/</p>
            <li>
                <button
                onClick={() => scrollToSection('connect')}
                >
                CONNECT
                </button>
            </li>
            <p>/</p>
            <li>
                <button
                onClick={() => scrollToSection('hobby')}
                >
                HOBBIES
                </button>
            </li>
            {/* <p>/</p>
            <li>
                <a href="">ABOUT US</a>
            </li> */}
            </>
        );
    }
    NavList.displayName = "NavList";
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      gsap.to(window, {
        duration: 1,
        scrollTo: element,
      });
    }
  };

    const handleScroll = () => {
        const currentScroll = window.scrollY;
        if(currentScroll < scrolled) setDirection("up");
        else setDirection("down");
        setScrolled(currentScroll)
        }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll)
        return ()=> {
            window.removeEventListener("scroll",handleScroll);
        }
    })
  return (
    <header className="w-full flex justify-center">
        <nav className={`h-8 w-[90%] fixed top-8 z-20 transition-all duration-500 ease-out shadow-xl backdrop-blur-lg shadow-slate-600/60
        ${(direction === "up" || "") ? "translate-y-0" : "-translate-y-36"}
        bg-white text-slate-900 rounded-2xl  py-10 sm:py-12 px-8 mx-auto flex justify-between items-center`}>
            <div className="flex gap-2">
                <File/>
                <h1 onClick={()=>scrollToSection('home')} className="text-sm sm:text-base cursor-pointer">Anurag</h1>
            </div>
            <ul className="
            sm:gap-2
            md:gap-
            lg:gap-4
            hidden sm:flex sm:flex-wrap sm:justify-around font-mono font-extralight 
            sm: w-[40%]
            md:w-1/2

            ">
                <NavList/>
            </ul>
            <button className="py-1 px-2 sm:px-4 sm:py-2 rounded-md border sm:border-2 border-black flex items-center text-base sm:text-xl text-black">HIRE ME</button>
        </nav>
</header>
  )
}

export default Header