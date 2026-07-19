import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RiMenuLine, 
  RiCloseLine, 
  RiPhoneLine, 
  RiWhatsappLine 
} from 'react-icons/ri';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Book a Cab', path: '/book' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-[1000] h-[72px] bg-white shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-b border-slate-100"
        id="main-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo element */}
          <Link to="/" className="flex items-center group -ml-1">
            <img
              src={logoImg}
              alt="Chethana Flybird Travels"
              className="h-[52px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-9 h-full">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative font-sans text-sm lg:text-[15px] font-medium py-2 transition-colors duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-black font-bold'
                      : 'text-slate-700'
                  } hover:text-black`
                }
              >
                {({ isActive }) => (
                  <span className="flex flex-col items-center">
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-black" />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>



          {/* Mobile drawer button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="focus:outline-none p-2"
              aria-label="Open Menu"
            >
              <span className="inline-flex items-center text-black">
                <RiMenuLine size={24} />
              </span>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Right Drawer and overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black z-[1100]"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Drawer Slide */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-[280px] bg-[var(--primary-dark)] text-white shadow-2xl z-[1200] flex flex-col justify-between p-6 overflow-y-auto"
            >
              <div>
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                  <span className="font-serif text-lg font-bold text-[var(--accent)]">Menu</span>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-1 hover:text-[var(--accent)] transition-colors focus:outline-none text-slate-200"
                    aria-label="Close Menu"
                  >
                    <span className="inline-flex items-center">
                      <RiCloseLine size={24} />
                    </span>
                  </button>
                </div>

                {/* Vertical link stack */}
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-3 h-12 rounded-lg text-sm font-medium transition-colors ${
                          isActive
                            ? 'bg-white/10 text-[var(--accent)] font-semibold'
                            : 'text-slate-200 hover:bg-white/5 hover:text-white'
                        }`
                      }
                    >
                      <span>{link.name}</span>
                      <span className="text-white/20">/</span>
                    </NavLink>
                  ))}
                 </div>
              </div>

              {/* Stacked contact / action buttons in foot */}
              <div className="space-y-3 pt-6 border-t border-white/10 mt-6">
                 <a
                  href="tel:+918121481100"
                  className="nav-footer-action flex items-center justify-center gap-2 w-full py-3 text-sm font-bold rounded-full text-slate-900 transition-transform"
                >
                  <span className="shrink-0 inline-flex items-center">
                    <RiPhoneLine size={16} />
                  </span>
                  <span>Call Now</span>
                </a>
                <a
                  href="https://wa.me/918121481100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-bold rounded-full bg-emerald-600 hover:bg-emerald-500 text-white transition-transform"
                >
                  <span className="shrink-0 inline-flex items-center font-bold">
                    <RiWhatsappLine size={16} />
                  </span>
                  <span>WhatsApp Link</span>
                </a>
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

