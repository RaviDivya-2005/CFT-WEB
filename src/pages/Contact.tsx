import { motion } from 'motion/react';
import { Mail, Phone, MapPin, AlarmClock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[var(--off-white)]">
      <SEO
        title="Contact Us"
        description="Get in touch with Chethana Flybird Travels. Call +91 81214 81100 or WhatsApp us for instant cab bookings in Tirupati. Available 24/7."
        keywords="contact Chethana Flybird Travels, Tirupati taxi phone number, cab booking contact"
        canonicalUrl="https://www.chethanaflybirdtravels.com/contact"
      />
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: PAGE HERO BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[300px] sm:h-[280px] md:h-[260px] flex items-center justify-center text-center bg-gradient-to-r from-[#0F2D5A] to-[#1A4F8A] text-white overflow-hidden">

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4 pt-6">

          {/* Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Contact Us
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-[var(--accent-light)] max-w-xl mx-auto"
          >
            We are here for you 24/7. Reach out to us anytime.
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: CONTACT DETAILS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Contact info cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              icon: <Phone className="w-6 h-6 text-blue-600" />, 
              title: 'Call directly', 
              value: <>+91 81214 81100 / <br /> +91 93900 65144</> 
            },
            { icon: <Mail className="w-6 h-6 text-blue-600" />, title: 'Write an email', value: 'chethanaflybirdtravels@gmail.com' },
            { icon: <MapPin className="w-6 h-6 text-blue-600" />, title: 'Visit Office Address', value: '19-12-289, 3rd Floor, Bairagapatteda, Padmavathi Park, Tirupati - 517501' },
            { icon: <AlarmClock className="w-6 h-6 text-blue-600" />, title: 'Operational hours', value: '24/7 - 365 Days Availability' },
          ].map((info, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center gap-4 p-8 bg-white border border-slate-100 rounded-2xl shadow-[0_4px_25px_rgba(30,41,59,0.04)] hover:shadow-lg transition-all"
            >
              <div className="p-4 bg-blue-50 text-blue-600 rounded-full h-fit">
                {info.icon}
              </div>
              <div>
                <dl>
                  <dt className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{info.title}</dt>
                  <dd className="text-[15px] font-semibold text-slate-800 mt-2">{info.value}</dd>
                </dl>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
