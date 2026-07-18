import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
  RiYoutubeLine,
  RiArrowRightSLine,
  RiPhoneLine,
  RiWhatsappLine,
  RiMailLine,
  RiMapPinLine,
  RiTimeLine 
} from 'react-icons/ri';
import logoImg from '../assets/footer-logo.png';

function FooterLogo() {
  return (
    <img 
      src={logoImg} 
      alt="Chethana Flybird Travels" 
      className="h-16 w-auto object-contain bg-white p-2 rounded-lg"
    />
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Motion container variants for staggered presentation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Services', path: '/services' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Book a Cab', path: '/book' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const ourServicesList = [
    { name: 'Local City Rides', path: '/services' },
    { name: 'Airport Transfers', path: '/services' },
    { name: 'Outstation Trips', path: '/services' },
    { name: 'Corporate Travel', path: '/services' },
    { name: 'Family Travel', path: '/services' },
    { name: 'Group Bookings', path: '/services' }
  ];

  return (
    <motion.footer 
      className="bg-[#0F2D5A] text-slate-300 relative overflow-hidden pt-10"
      id="main-footer"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - Brand Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <FooterLogo />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed italic">
              "Safe, Reliable & Comfortable Travel Solutions"
            </p>

            <div className="flex space-x-3 pt-1">
              {[
                { icon: <RiFacebookFill size={18} />, url: 'https://facebook.com' },
                { icon: <RiInstagramLine size={18} />, url: 'https://instagram.com' },
                { icon: <RiTwitterXLine size={18} />, url: 'https://twitter.com' },
                { icon: <RiYoutubeLine size={18} />, url: 'https://youtube.com' }
              ].map((social, index) => (
                <a 
                  key={index} 
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-white/20 text-white/80 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-[var(--primary-dark)] hover:scale-110 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="font-serif text-[16px] font-bold tracking-wide text-[var(--accent)] text-left">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-sm text-left">
              {quickLinks.map((link, idx) => (
                <li key={idx} className="flex items-center group">
                  <span className="text-white/30 group-hover:text-[var(--accent)] transition-colors duration-300 mr-1 shrink-0 inline-flex items-center">
                    <RiArrowRightSLine size={16} />
                  </span>
                  <Link 
                    to={link.path} 
                    className="text-white/70 hover:text-[var(--accent-light)] transition-colors duration-300 font-sans"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Our Services */}
          <motion.div variants={itemVariants} className="space-y-3">
            <h3 className="font-serif text-[16px] font-bold tracking-wide text-[var(--accent)] text-left">
              Our Services
            </h3>
            <ul className="space-y-1.5 text-sm text-left">
              {ourServicesList.map((service, idx) => (
                <li key={idx} className="flex items-center group">
                  <span className="text-white/30 group-hover:text-[var(--accent)] transition-colors duration-300 mr-1 shrink-0 inline-flex items-center">
                    <RiArrowRightSLine size={16} />
                  </span>
                  <Link 
                    to={service.path} 
                    className="text-white/70 hover:text-[var(--accent-light)] transition-colors duration-300 font-sans"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-3 text-left">
            <h3 className="font-serif text-[16px] font-bold tracking-wide text-[var(--accent)]">
              Get In Touch
            </h3>
            <div className="space-y-2 text-sm">
              
              <div className="flex items-start gap-2.5">
                <span className="text-[var(--accent)] shrink-0 inline-flex items-center mt-0.5">
                  <RiPhoneLine size={16} />
                </span>
                <div className="flex flex-col">
                  <a href="tel:+918121481100" className="text-white/85 hover:text-[var(--accent)] transition-colors">
                    +91 81214 81100 (Call)
                  </a>
                  <a href="tel:+919390065144" className="text-white/85 hover:text-[var(--accent)] transition-colors">
                    +91 93900 65144 (Call)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[#25D366] shrink-0 inline-flex items-center mt-0.5">
                  <RiWhatsappLine size={16} />
                </span>
                <div className="flex flex-col">
                  <a 
                    href="https://wa.me/918121481100" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#25D366] hover:underline"
                  >
                    +91 81214 81100 (WhatsApp)
                  </a>
                  <a 
                    href="https://wa.me/919390065144" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#25D366] hover:underline"
                  >
                    +91 93900 65144 (WhatsApp)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[var(--accent)] shrink-0 inline-flex items-center mt-0.5">
                  <RiMailLine size={16} />
                </span>
                <a href="mailto:chethanaflybirdtravels@gmail.com" className="text-white/85 hover:text-[var(--accent)] transition-colors break-all">
                  chethanaflybirdtravels@gmail.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <span className="text-[var(--accent)] shrink-0 inline-flex items-center mt-0.5">
                  <RiMapPinLine size={16} />
                </span>
                <span className="text-white/85 leading-snug">
                  19-12-289, 3rd Floor, Bairagapatteda, Padmavathi Park, Tirupati - 517501
                </span>
              </div>

              <div className="flex items-start gap-2.5 pt-0.5">
                <span className="text-[var(--accent)] shrink-0 inline-flex items-center mt-0.5">
                  <RiTimeLine size={16} />
                </span>
                <span className="text-white/85 italic">
                  Available 24/7 - 365 Days Availability
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Bar Section */}
      <div className="bg-black/20 w-full px-6 py-4 border-t border-white/10 mt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-white/50 text-[13px]">
          <p>© {currentYear} Chethana Flybird Travels. All Rights Reserved.</p>
        </div>
      </div>

    </motion.footer>
  );
}
