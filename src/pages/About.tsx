import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  RiCompassLine,
  RiEyeLine,
  RiHeartLine,
  RiMapPin2Line,
  RiShieldCheckLine,
  RiPriceTag3Line,
  RiHeadphoneLine,
  RiCarLine
} from 'react-icons/ri';

export default function About() {
  
  // Staggered variants for animations
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[var(--off-white)]">
      
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
            About Chethana Flybird Travels
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-serif text-lg sm:text-xl text-[var(--accent-light)] italic"
          >
            "Driven by passion. Guided by trust."
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: COMPANY INTRODUCTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column — Image Collage */}
            <div className="lg:col-span-6 relative flex justify-center">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                variants={scaleIn}
                className="relative rounded-[24px] overflow-hidden shadow-[0_12px_40px_rgba(15,45,90,0.12)] max-w-md lg:max-w-full"
              >
                <img 
                  src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80" 
                  alt="Inside cab comfort" 
                  className="w-full object-cover h-[350px] sm:h-[400px] hover:scale-105 transition-transform duration-700"
                />
                
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
                  className="absolute bottom-6 left-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-5 text-left shadow-[0_8px_24px_rgba(245,158,11,0.4)] text-[#0F2D5A]"
                >
                  <p className="font-serif text-2xl font-bold leading-none">10,000+</p>
                  <p className="font-sans text-xs font-bold uppercase tracking-wider mt-1 opacity-80">Trips Completed</p>
                </motion.div>
              </motion.div>
            </div>

            {/* Right Column — Text Panel */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              variants={staggerContainer}
              className="lg:col-span-6 text-left space-y-6"
            >
              <motion.span variants={fadeInUp} className="font-sans text-xs font-bold uppercase tracking-[3px] text-[var(--accent)] block">
                OUR STORY
              </motion.span>
              
              <motion.h2 variants={fadeInUp} className="font-serif text-3xl sm:text-4xl font-bold text-[var(--primary-dark)] leading-tight">
                Tirupati's Most Trusted Cab Service
              </motion.h2>

              <div className="h-1 w-[60px] bg-gradient-to-r from-amber-500 to-amber-600 rounded-full" />

              <div className="font-sans text-sm sm:text-base text-slate-600 space-y-4 leading-relaxed">
                <motion.p variants={fadeInUp}>
                  Chethana Flybird Travels began with a simple promise — to provide safe, reliable, and affordable travel to every passenger.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Over the years, we have completed over 10,000+ successful trips serving pilgrims, tourists, and corporate clients across Tirumala, Andhra Pradesh, and South India.
                </motion.p>
                <motion.p variants={fadeInUp}>
                  Today, we specialize in everything from daily office commutes and airport transfers to outstation holidays and corporate travel — all with the same commitment to excellence.
                </motion.p>
              </div>

              <motion.div variants={fadeInUp} className="pt-2">
                <Link 
                  to="/fleet" 
                  className="btn-primary inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wider py-4 px-8"
                >
                  <span>Meet Our Fleet</span>
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: MISSION & VISION CARDS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-[var(--off-white)]" id="mission-vision-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 — Mission */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-8 border-t-4 border-[var(--accent)] shadow-[0_4px_25px_rgba(30,41,59,0.04)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col items-start space-y-4"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-amber-50 text-[var(--accent)] shrink-0">
                <RiCompassLine size={40} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--primary-dark)]">
                Our Mission
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-slate-500">
                To deliver safe, comfortable, and reliable transportation solutions that make every journey a pleasant experience.
              </p>
            </motion.div>

            {/* Card 2 — Vision */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white rounded-2xl p-8 border-t-4 border-[var(--primary-light)] shadow-[0_4px_25px_rgba(30,41,59,0.04)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col items-start space-y-4"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-blue-50 text-[var(--primary-light)] shrink-0">
                <RiEyeLine size={40} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--primary-dark)]">
                Our Vision
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-slate-500">
                To be most trusted travel partner — connecting people, places, and possibilities.
              </p>
            </motion.div>

            {/* Card 3 — Values */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border-t-4 border-emerald-500 shadow-[0_4px_25px_rgba(30,41,59,0.04)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-left flex flex-col items-start space-y-4"
            >
              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-emerald-50 text-emerald-500 shrink-0">
                <RiHeartLine size={40} />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--primary-dark)]">
                Our Values
              </h3>
              <p className="font-sans text-[15px] leading-relaxed text-slate-500">
                Safety first. Customer satisfaction always. Transparency in every transaction.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: WHY CHOOSE US
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gradient-to-r from-[#0F2D5A] to-[#1A4F8A] py-10 mb-20 text-white relative overflow-hidden" id="why-choose-us-section">
        {/* Decorative glows */}
        <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
        <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left text panel */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="font-sans text-xs font-bold uppercase tracking-[3px] text-white/90">
                WHY CHOOSE US
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Why 10,000+ <br /> Travelers Trust Us
              </h2>
              <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed max-w-md">
                We provide professional travel solutions with an emphasis on customer safety, pristine vehicle sanitization, and driver reliability. Our fleet is active 24/7, keeping your transit worry-free.
              </p>
              <div className="pt-2">
                <Link
                  to="/book"
                  className="btn-primary inline-flex items-center justify-center gap-2 text-sm uppercase tracking-wider py-4 px-8"
                >
                  <RiCarLine size={18} />
                  <span>Book Your First Ride</span>
                </Link>
              </div>
            </div>

            {/* Right features grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
              {[
                {
                  title: "GPS Tracked Vehicles",
                  icon: <RiMapPin2Line size={20} />,
                  desc: "Every cab is integrated with real-time GPS coordinates for continuous travel security tracking."
                },
                {
                  title: "Verified & Trained Drivers",
                  icon: <RiShieldCheckLine size={20} />,
                  desc: "Chauffeurs are vetted with thorough background verification and professional routing training."
                },
                {
                  title: "Transparent Pricing",
                  icon: <RiPriceTag3Line size={20} />,
                  desc: "No hidden charges or surge spikes. Fair, standard billing with itemized receipts."
                },
                {
                  title: "24/7 Customer Support",
                  icon: <RiHeadphoneLine size={20} />,
                  desc: "Our responsive help desk is available around the clock to support check-ins and amendments."
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="w-10 h-10 shrink-0 rounded-full flex items-center justify-center bg-white/15 text-[var(--accent)]">
                    {feature.icon}
                  </span>
                  <div className="space-y-1 block">
                    <h4 className="font-sans text-base font-semibold text-white">
                      {feature.title}
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
