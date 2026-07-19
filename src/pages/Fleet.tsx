import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import SEO from '../components/SEO';
import { 
  RiGroupLine, 
  RiCheckLine, 
  RiPhoneLine, 
  RiWhatsappLine 
} from 'react-icons/ri';

// No local fleet images needed - using external URLs for authentic car photos

interface Vehicle {
  id: number;
  name: string;
  category: string; // 'Sedan' | 'SUV' | 'Tempo Traveller' | 'Luxury'
  seats: string;
  image: string;
  features: string[];
  bestFor: string;
  baseFare: number;
  ac: boolean;
  luggage: string;
}

export default function Fleet() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const categories = ['All', 'Sedan', 'SUV', 'Tempo Traveller'];

  const vehicleData: Vehicle[] = [
    {
      id: 1,
      name: "Toyota Etios",
      category: "Sedan",
      seats: "4+1 Seater",
      image: "/fleet/toyota_etios.jpg",
      features: ["AC", "Music System", "GPS Navigation", "Mid Luggage"],
      bestFor: "Budget family trips, couples, local tours",
      baseFare: 15,
      ac: true,
      luggage: "Mid"
    },
    {
      id: 2,
      name: "Swift Dzire",
      category: "Sedan",
      seats: "4+1 Seater",
      image: "/fleet/swift_dzire.jpg",
      features: ["AC", "Comfortable Seating", "Ample Legroom", "Mid Luggage"],
      bestFor: "Local city rides, one-way outstation trips",
      baseFare: 15,
      ac: true,
      luggage: "Mid"
    },
    {
      id: 3,
      name: "Innova Crysta",
      category: "SUV",
      seats: "7+1 Seater",
      image: "/fleet/innova_crysta.jpg",
      features: ["AC", "Captain Seats", "Premium Ride Quality", "Heavy Luggage"],
      bestFor: "Family pilgrimage, luxury group travel, Tirumala ghats",
      baseFare: 24,
      ac: true,
      luggage: "Heavy"
    },
    {
      id: 4,
      name: "Kia Carens",
      category: "SUV",
      seats: "6+1 Seater",
      image: "/fleet/kia_carens.jpg",
      features: ["AC", "Modern Cabin", "GPS Navigation", "Mid Luggage"],
      bestFor: "Family trips, medium group sightseeing",
      baseFare: 24,
      ac: true,
      luggage: "Mid"
    },
    {
      id: 5,
      name: "Ertiga",
      category: "SUV",
      seats: "6+1 Seater",
      image: "/fleet/ertiga.jpg",
      features: ["AC", "Comfortable Cab", "Fuel Efficient", "Mid Luggage"],
      bestFor: "Affordable family trips, Tirupati sightseeing",
      baseFare: 20,
      ac: true,
      luggage: "Mid"
    },
    {
      id: 6,
      name: "Tempo",
      category: "Tempo Traveller",
      seats: "12+1 Seater",
      image: "/fleet/force_traveller.jpg",
      features: ["Dual AC Blower", "Push-back Seats", "Stereo System", "Ample Luggage"],
      bestFor: "Group tour packages, large family pilgrimage",
      baseFare: 28,
      ac: true,
      luggage: "Ample"
    },
    {
      id: 7,
      name: "Urbania",
      category: "Tempo Traveller",
      seats: "12+1 Seater",
      image: "/fleet/force_urbania.jpg",
      features: ["Ultra-Luxury AC", "Individual Charging", "Reclining Seats", "Ample Luggage"],
      bestFor: "VIP group travel, long-distance corporate trips",
      baseFare: 32,
      ac: true,
      luggage: "Ample"
    }
  ];

  const filteredVehicles = activeFilter === 'All'
    ? vehicleData
    : vehicleData.filter(v => v.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[var(--off-white)]">
      <SEO
        title="Our Fleet"
        description="Browse Chethana Flybird Travels' fleet of well-maintained vehicles — from sedans and SUVs to Tempo Travellers. Find the perfect ride for your journey in Tirupati."
        keywords="fleet Tirupati, taxi fleet, sedan SUV tempo traveller, vehicle booking Tirupati"
        canonicalUrl="https://www.chethanaflybirdtravels.com/fleet"
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
            Our Fleet
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-[var(--accent-light)] max-w-xl mx-auto"
          >
            Handpicked, well-maintained vehicles for every journey.
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2: FLEET FILTER TABS
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="sticky top-[72px] bg-white shadow-[0_2px_16px_rgba(0,0,0,0.08)] py-4 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-3 py-1 scrollbar-hide no-scrollbar">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-bold uppercase tracking-wider transition-all duration-300 shrink-0 cursor-pointer ${
                    isActive 
                      ? 'bg-gradient-to-r from-[#0F2D5A] to-[#1A4F8A] text-white shadow-md' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: VEHICLE CARDS GRID
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-16 bg-[var(--off-white)]">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredVehicles.map((vehicle) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  key={vehicle.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-[0_4px_25px_rgba(30,41,59,0.04)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col group relative"
                >
                  {/* Card Top Image View - landscape ratio matching reference */}
                  <div className="relative aspect-[5/3] overflow-hidden shrink-0">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Category Top-Right Badge */}
                    <span className="absolute top-4 right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#0F2D5A] font-sans font-bold text-xs uppercase tracking-wide py-1.5 px-4 rounded-full shadow-md z-20">
                      {vehicle.category}
                    </span>
                  </div>

                  {/* Card Body Container */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    
                    {/* Section Top Header */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-serif text-[22px] font-bold text-[var(--primary-dark)] leading-tight">
                          {vehicle.name}
                        </h3>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F2D5A] text-white text-xs font-sans font-bold tracking-wide shrink-0">
                          <RiGroupLine size={13} />
                          <span>{vehicle.seats}</span>
                        </span>
                      </div>

                      {/* Best For Tagline */}
                      <p className="font-sans text-sm text-slate-500 italic">
                        <strong className="text-[#0F2D5A] font-semibold not-italic">Best for:</strong> {vehicle.bestFor}
                      </p>

                      {/* Features Bullet Grid */}
                      <div className="flex flex-wrap gap-x-5 gap-y-2 pt-2">
                        {vehicle.features.map((feat, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-xs text-slate-500 font-sans">
                            <span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Fare and CTA section */}
                    <div className="space-y-4 pt-4 border-t border-slate-100">
                      <div className="flex justify-between items-end">
                        <div className="text-left">
                          <span className="text-xs text-slate-400 font-sans block leading-none mb-1">Starting from</span>
                          <span className="font-serif text-[28px] font-bold text-blue-600 block leading-none">
                            ₹{vehicle.baseFare}/<span className="text-sm font-sans font-normal text-slate-400">km</span>
                          </span>
                          <span className="text-[11px] text-slate-400 font-sans block mt-1">+ toll & parking extra</span>
                        </div>

                        {/* Secondary text Details details link */}
                        <Link 
                          to="/contact" 
                          className="font-sans text-xs sm:text-sm text-blue-600 hover:text-blue-800 underline font-semibold transition-colors shrink-0"
                        >
                          Get Details
                        </Link>
                      </div>

                      {/* Book Cab CTA */}
                      <div>
                        <Link 
                          to={`/book?vehicle=${encodeURIComponent(vehicle.name)}`} 
                          className="btn-primary w-full text-center inline-flex items-center justify-center py-3.5 uppercase tracking-wider text-xs font-bold"
                        >
                          Book This Vehicle
                        </Link>
                      </div>
                    </div>

                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 4: FLEET SPECS TABLE
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-white" id="fleet-comparison">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[var(--primary-dark)]">
              Quick Fleet Comparison
            </h2>
            <div className="h-1 w-[60px] bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto" />
          </div>

          {/* Specs comparison Table */}
          <div className="bg-white rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.04)] border border-slate-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse font-sans text-sm md:text-[15px]">
                <thead>
                  <tr className="bg-gradient-to-r from-[#0F2D5A] to-[#1A4F8A] text-white">
                    <th className="py-4.5 px-6 font-semibold uppercase tracking-wider text-xs">Vehicle</th>
                    <th className="py-4.5 px-6 font-semibold uppercase tracking-wider text-xs">Category</th>
                    <th className="py-4.5 px-6 font-semibold uppercase tracking-wider text-xs">Seats</th>
                    <th className="py-4.5 px-6 font-semibold uppercase tracking-wider text-xs">AC</th>
                    <th className="py-4.5 px-6 font-semibold uppercase tracking-wider text-xs">Luggage</th>
                    <th className="py-4.5 px-6 font-semibold uppercase tracking-wider text-xs">Best For</th>
                    <th className="py-4.5 px-6 font-semibold uppercase tracking-wider text-xs">Base Fare</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-600">
                  {vehicleData.map((v, i) => (
                    <tr 
                      key={v.id} 
                      className={`hover:bg-blue-50/5 transition-colors ${i % 2 === 1 ? 'bg-slate-50/50' : 'bg-white'}`}
                    >
                      <td className="py-4 px-6 font-serif font-bold text-[var(--primary-dark)]">{v.name}</td>
                      <td className="py-4 px-6">{v.category}</td>
                      <td className="py-4 px-6 font-medium">{v.seats}</td>
                      <td className="py-4 px-6">
                        {v.ac ? (
                          <span className="text-emerald-500 inline-flex items-center">
                            <RiCheckLine size={20} />
                          </span>
                        ) : 'No'}
                      </td>
                      <td className="py-4 px-6">{v.luggage}</td>
                      <td className="py-4 px-6 text-xs text-slate-500 italic max-w-[200px] truncate" title={v.bestFor}>
                        {v.bestFor}
                      </td>
                      <td className="py-4 px-6 font-bold text-blue-600">₹{v.baseFare}/km</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 5: BOOKING CTA BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-16 text-center" id="fleet-cta-banner">
        <div className="max-w-4xl mx-auto px-6 space-y-8">
          
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-[38px] font-bold text-[#0F2D5A] leading-tight">
              Can't Find What You Need?
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-950 font-semibold max-w-2xl mx-auto">
              Call us and we'll arrange the perfect vehicle for your journey.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            
            {/* Call button */}
            <a 
              href="tel:+918121481100"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 text-[#0F2D5A] font-sans font-bold text-sm tracking-wider uppercase py-4.5 px-9 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <RiPhoneLine size={18} />
              <span>Call +91 81214 81100</span>
            </a>

            {/* WhatsApp button */}
            <a 
              href="https://wa.me/918121481100?text=Hi,%20I%20want%20to%20book%20a%20custom%20vehicle%20trip"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-bold text-sm tracking-wider uppercase py-4.5 px-9 rounded-full shadow-lg transition-transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <RiWhatsappLine size={18} />
              <span>WhatsApp Us</span>
            </a>

          </div>

        </div>
      </section>

    </div>
  );
}
