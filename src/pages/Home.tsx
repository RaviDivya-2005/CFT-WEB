import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  RiCarLine, 
  RiPhoneLine, 
  RiWhatsappLine, 
  RiArrowDownLine, 
  RiMapPinLine, 
  RiMapPinUserLine, 
  RiCalendarLine, 
  RiTimeLine, 
  RiGroupLine, 
  RiMapLine, 
  RiAwardLine, 
  RiCustomerService2Line,
  RiArrowRightLine,
  
  // Section 4 icons
  RiTaxiLine,
  RiFlightTakeoffLine,
  RiRoadMapLine,
  RiBriefcaseLine,
  RiHeartLine,
  
  // Section 5 icons
  RiMapPin2Line,
  RiShieldCheckLine,
  RiPriceTag3Line,
  RiHeadphoneLine,
  
  // Section 6 icons
  RiDoubleQuotesL,
  RiArrowLeftSLine,
  RiArrowRightSLine
} from 'react-icons/ri';

// Counting Number Component using standard hooks and requestAnimationFrame / timer
function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 1800; // time in ms
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [isInView, end]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const today = new Date().toISOString().split('T')[0];
  const [activeTab, setActiveTab] = useState<'oneway' | 'round' | 'hourly'>('oneway');
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    date: '',
    time: '',
    vehicle: 'Sedan'
  });
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Testimonials list defined inside states for scoped usage
  const testimonials = [
    { name: "Rahul Sharma", role: "IT Professional", stars: 5, quote: "Best cab service in Tirupati! The driver was punctual, driving safely on Tirumala ghat roads, and the car was spotless." },
    { name: "Priya Nair", role: "Pilgrim", stars: 5, quote: "I use Chethana Flybird Travels for local temple tours. Reliable service and well-mannered drivers!" },
    { name: "Vikram Reddy", role: "Business Owner", stars: 5, quote: "Their corporate travel packages are excellent. Professional drivers, neat cars, and highly cost-effective." },
    { name: "Anitha Kumar", role: "Homemaker", stars: 4, quote: "Booked for a family trip to Tirumala. Comfortable Innova, experienced driver, wonderful journey." },
    { name: "Mohammed Saleem", role: "Doctor", stars: 5, quote: "Late-night hospital commutes made easy. 24/7 availability is a lifesaver for my schedule." }
  ];

  // Testimonials slider states
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardsToShow = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, testimonials.length - cardsToShow);

  useEffect(() => {
    if (!sliderRef.current) return;
    sliderRef.current.style.transform = `translateX(-${currentIndex * (100 / cardsToShow)}%)`;
  }, [currentIndex, cardsToShow]);
  useEffect(() => {
    if (maxIndex <= 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.pickup || !formData.drop || !formData.date || !formData.time) {
      alert("Please fill in all travel details to get your instant quote.");
      return;
    }
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
    }, 6000);
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[var(--off-white)]">
      
      {/* Custom Styles Injection for Floating Particles & Keyframes */}
      <style>{`
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(-120px) translateX(15px); opacity: 0; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatParticle linear infinite;
        }
        .animate-bounce-slow {
          animation: bounceSlow 1.5s infinite ease-in-out;
        }
      `}</style>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: HERO SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section 
        className="relative min-h-[80vh] sm:min-h-[92vh] flex items-center justify-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 pb-24 sm:pb-32 overflow-hidden bg-cover bg-center md:bg-fixed hero-bg"
      >
        {/* Deep, premium overlay gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0a193c]/75 via-[#0a193c]/55 to-[#0a193c]/85" />

        {/* Floating Particles Container */}
        <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
          {/* Particle 1 */}
          <div className="particle particle-1 bg-amber-500/40 w-2 h-2 top-[80%] left-[10%]" />
          {/* Particle 2 */}
          <div className="particle particle-2 bg-white/20 w-1.5 h-1.5 top-[70%] left-[30%]" />
          {/* Particle 3 */}
          <div className="particle particle-3 bg-amber-500/30 w-3 h-3 top-[90%] left-[50%]" />
          {/* Particle 4 */}
          <div className="particle particle-4 bg-white/20 w-2 h-2 top-[75%] left-[70%]" />
          {/* Particle 5 */}
          <div className="particle particle-5 bg-amber-500/40 w-1.5 h-1.5 top-[85%] left-[85%]" />
          {/* Particle 6 */}
          <div className="particle particle-6 bg-white/30 w-2.5 h-2.5 top-[60%] left-[20%]" />
          {/* Particle 7 */}
          <div className="particle particle-7 bg-amber-500/20 w-4 h-4 top-[65%] left-[60%]" />
          {/* Particle 8 */}
          <div className="particle particle-8 bg-white/25 w-2 h-2 top-[80%] left-[92%]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center select-none">
          
          {/* Company Brand Tagline Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-[var(--accent)] text-xs sm:text-sm font-sans font-bold tracking-[3px] uppercase px-6 py-2 rounded-full mb-6"
          >
            Chethana Flybird Travels
          </motion.div>

          {/* Main Heading */}
          <div className="space-y-3 mb-6">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight"
            >
              Your Journey,
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[var(--accent)] tracking-tight leading-tight"
            >
              Our Commitment.
            </motion.h1>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base sm:text-lg md:text-xl text-white/85 font-sans font-light max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Safe, Reliable & Comfortable Travel Solutions
          </motion.p>

          {/* CTA Buttons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-row flex-wrap items-center justify-center gap-3 mx-auto w-full"
          >
            <Link 
              to="/book" 
              className="btn-primary flex items-center justify-center gap-2 text-xs sm:text-sm uppercase tracking-wider py-3 px-4 sm:px-6"
            >
              <RiCarLine size={18} />
              <span>Book a Cab Now</span>
            </Link>

            <a 
              href="tel:+918121481100" 
              className="btn-secondary flex items-center justify-center gap-2 text-xs sm:text-sm tracking-wide py-3 px-4 sm:px-6"
            >
              <RiPhoneLine size={18} />
              <span>Call Now</span>
            </a>

            <a 
              href="https://wa.me/918121481100?text=Hi,%20I%20want%20to%20book%20a%20cab%20with%20Chethana%20Flybird%20Travels" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 text-xs sm:text-sm font-bold bg-[#25D366] hover:bg-[#20ba56] text-white border-none py-3 px-4 sm:px-6 rounded-full shadow-[0_4px_15px_rgba(37,211,102,0.4)] transition-transform hover:scale-105"
            >
              <RiWhatsappLine size={20} />
              <span>WhatsApp Us</span>
            </a>
          </motion.div>


        </div>

      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: QUICK BOOKING CARD
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-20 px-6 max-w-6xl mx-auto w-full -mt-24" id="booking-section">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
          className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(26,79,138,0.18)] p-8 sm:p-10 border border-slate-100"
        >
          {/* Header elements */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
            <div className="text-left">
              <h2 className="font-serif text-[28px] font-bold text-[var(--primary-dark)] leading-tight">
                Book Your Ride
              </h2>
              <p className="font-sans text-sm text-[var(--text-light)] mt-1">
                Quick & Easy Booking Form
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-full w-fit">
              {[
                { id: 'oneway', label: 'One Way' },
                { id: 'round', label: 'Round Trip' },
                { id: 'hourly', label: 'Hourly' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                    activeTab === tab.id 
                      ? 'bg-[var(--primary)] text-white shadow-sm' 
                      : 'text-[var(--text-mid)] hover:text-[var(--primary)]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {bookingSuccess ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <RiCarLine size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-emerald-900">Information Submitted Successfully!</h3>
              <p className="text-sm font-sans text-emerald-700 max-w-md mx-auto">
                Our operations team has received your travel proposal from {formData.pickup} to {formData.drop}. We will call you at +91 xxxxx xxxxx with best flight options within 10 minutes.
              </p>
            </motion.div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleBookingSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Pickup Address field */}
                <div className="space-y-1.5">
                  <label htmlFor="home-pickup" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-light)]">Pickup Location</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <RiMapPinLine size={18} />
                    </span>
                    <input 
                      id="home-pickup"
                      type="text" 
                      required
                      placeholder="Enter pickup location (e.g. airport, home)" 
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[var(--primary-light)] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]" 
                    />
                  </div>
                </div>

                {/* Drop Address field */}
                <div className="space-y-1.5">
                  <label htmlFor="home-drop" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-light)]">Drop Destination</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <RiMapPinUserLine size={18} />
                    </span>
                    <input 
                      id="home-drop"
                      type="text" 
                      required
                      placeholder="Enter drop address or city" 
                      value={formData.drop}
                      onChange={(e) => setFormData({ ...formData, drop: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[var(--primary-light)] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]" 
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                
                {/* Pick-up Date */}
                <div className="space-y-1.5">
                  <label htmlFor="home-date" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-light)]">Travel Date</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <RiCalendarLine size={18} />
                    </span>
                    <input 
                      id="home-date"
                      type="date" 
                      required
                      min={today}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[var(--primary-light)] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm" 
                    />
                  </div>
                </div>

                {/* Pick-up Time */}
                <div className="space-y-1.5">
                  <label htmlFor="home-time" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-light)]">Travel Time</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <RiTimeLine size={18} />
                    </span>
                    <input 
                      id="home-time"
                      type="time" 
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[var(--primary-light)] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm" 
                    />
                  </div>
                </div>

                {/* Vehicle Choice select */}
                <div className="col-span-1 sm:col-span-2 md:col-span-1 space-y-1.5">
                  <label htmlFor="home-vehicle" className="block text-xs font-bold uppercase tracking-wider text-[var(--text-light)]">Vehicle Category</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <RiCarLine size={18} />
                    </span>
                    <select 
                      id="home-vehicle"
                      value={formData.vehicle}
                      onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                      className="w-full pl-11 pr-4 py-[15px] bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[var(--primary-light)] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm appearance-none"
                    >
                      <option value="Sedan">Sleek Sedan (Camry / Dzire)</option>
                      <option value="SUV">Premium SUV (Innova / Fortuner)</option>
                      <option value="Hatchback">Compact Hatchback (Etios / Liva)</option>
                      <option value="Tempo">Luxury Coach (Tempo Traveller)</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs">▼</span>
                  </div>
                </div>

              </div>

              {/* Form submit block */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  className="btn-primary w-full h-[56px] text-base font-bold tracking-wider rounded-[12px] flex items-center justify-center gap-2 hover:translate-y-0 active:scale-[0.99]"
                >
                  <span>Get Estimate & Book Now</span>
                  <RiArrowRightLine size={20} />
                </button>
              </div>

            </form>
          )}

        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: STATS BAR SECTION
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="max-w-6xl mx-auto px-6 mt-16 mb-20 relative z-10" id="stats-section">
        <div className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-8 rounded-3xl text-[#0F2D5A] relative shadow-lg overflow-hidden">
          {/* Subtle dot overlay background to relate to designs */}
          <div className="absolute inset-0 bg-dot-pattern opacity-10 pointer-events-none" />

          <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Stat Item 1 */}
            <div className="text-center space-y-2 flex flex-col items-center">
              <span className="text-[#0F2D5A] p-3 bg-[#0F2D5A]/10 rounded-full inline-flex items-center">
                <RiGroupLine size={32} />
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2D5A] tracking-tight">
                <Counter end={10000} suffix="+" />
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#0F2D5A]/80 uppercase tracking-wider font-semibold">
                Trips Completed
              </p>
            </div>

            {/* Stat Item 2 */}
            <div className="text-center space-y-2 flex flex-col items-center relative">
              {/* Vertical divider element on desktop */}
              <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#0F2D5A]/10" />
              <span className="text-[#0F2D5A] p-3 bg-[#0F2D5A]/10 rounded-full inline-flex items-center">
                <RiMapLine size={32} />
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2D5A] tracking-tight">
                <Counter end={50} suffix="+" />
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#0F2D5A]/80 uppercase tracking-wider font-semibold">
                Cities Covered
              </p>
            </div>

            {/* Stat Item 3 */}
            <div className="text-center space-y-2 flex flex-col items-center relative">
              {/* Vertical divider element on desktop */}
              <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-16 bg-[#0F2D5A]/10" />
              <span className="text-[#0F2D5A] p-3 bg-[#0F2D5A]/10 rounded-full inline-flex items-center">
                <RiCustomerService2Line size={32} />
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#0F2D5A] tracking-tight">
                24/7
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#0F2D5A]/80 uppercase tracking-wider font-semibold">
                Support Available
              </p>
            </div>

            </div>
          </div>
        </div>
      </section>





      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 6: CUSTOMER TESTIMONIALS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white relative" id="testimonials-section">
        <div className="max-w-7xl mx-auto px-6 font-sans">
          
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="font-sans text-xs font-bold uppercase tracking-[3px] text-[var(--accent)] block">
              TESTIMONIALS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">
              What Our Passengers Say
            </h2>
            <div className="h-1 w-[60px] bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto" />
          </div>

          {/* Testimonial slider viewports */}
          <div className="relative overflow-hidden px-2 py-4">
            
            {/* Slider track */}
            <div ref={sliderRef} className="testimonial-slider-track">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`shrink-0 px-4 ${cardsToShow === 3 ? 'basis-1/3' : cardsToShow === 2 ? 'basis-1/2' : 'basis-full'}`}
                >
                  <div className="bg-[#FAF9F6] rounded-2xl p-8 border-t-4 border-[var(--primary-light)] relative shadow-[0_4px_20px_rgba(15,45,90,0.03)] text-left flex flex-col justify-between h-full min-h-[250px]">
                    
                    {/* Interior cards header block */}
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-0.5 text-amber-500 text-lg">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i}>
                              {i < testimonial.stars ? "★" : "☆"}
                            </span>
                          ))}
                        </div>
                        <span className="text-amber-500/25 shrink-0 inline-flex items-center">
                          <RiDoubleQuotesL size={32} />
                        </span>
                      </div>

                      <p className="font-sans text-[15px] text-slate-600 leading-relaxed italic mb-6">
                        "{testimonial.quote}"
                      </p>
                    </div>

                    <div>
                      <h4 className="font-serif text-[17px] font-bold text-[var(--primary-dark)]">
                        {testimonial.name}
                      </h4>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Manual Controls */}
            <button 
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none z-20 cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <RiArrowLeftSLine size={24} />
            </button>

            <button 
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-dark)] shadow-lg transition-transform hover:scale-105 active:scale-95 focus:outline-none z-20 cursor-pointer"
              aria-label="Next Testimonial"
            >
              <RiArrowRightSLine size={24} />
            </button>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx 
                    ? 'bg-[var(--accent)] w-6' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
