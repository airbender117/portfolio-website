'use client';
import React from 'react'
import { gsap } from 'gsap';
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

const Button = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
        gsap.to(window, {
            duration: 1,
            scrollTo: element,
        });
        }
    };
  return (
    <button onClick={() => scrollToSection('home')}
        className='absolute bottom-6 right-6 px-4 py-2 bg-black/90 text-white rounded-lg hover:bg-black/80 z-50'>
        Go to top
    </button>
  )
}

export default Button