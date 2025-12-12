'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Blog', href: '/blog' },
  ];

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Code className="w-8 h-8 text-gray-800" />
            <span className="text-xl font-bold text-gray-800">Anurag</span>
          </motion.div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) =>
            link.href ? (
              <Link key={link.name} href={link.href} passHref>
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-gray-900 cursor-pointer"
                >
                  {link.name}
                </motion.span>
              </Link>
            ) : (
              <motion.button
                key={link.name}
                whileHover={{ y: -2 }}
                onClick={() => link.id && scrollToSection(link.id)}
                className="text-gray-700 hover:text-gray-900"
              >
                {link.name}
              </motion.button>
            )
          )}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('connect')}
            className="bg-gray-800 text-white px-4 py-2 rounded-md"
          >
            Hire Me
          </motion.button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(true)}>
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg md:hidden"
          >
            <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-gray-800" />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 mt-8">
              {navLinks.map((link) =>
                link.href ? (
                  <Link key={link.name} href={link.href} passHref>
                    <span
                      onClick={() => setIsOpen(false)}
                      className="text-gray-700 hover:text-gray-900 cursor-pointer text-xl"
                    >
                      {link.name}
                    </span>
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => link.id && scrollToSection(link.id)}
                    className="text-gray-700 hover:text-gray-900 text-xl"
                  >
                    {link.name}
                  </button>
                )
              )}
              <button
                onClick={() => scrollToSection('connect')}
                className="bg-gray-800 text-white px-6 py-3 rounded-md text-xl"
              >
                Hire Me
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;