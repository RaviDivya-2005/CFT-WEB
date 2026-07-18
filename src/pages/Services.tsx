import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  RiWhatsappLine
} from 'react-icons/ri';



export default function Services() {
  
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
            Our Premium Services
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-base sm:text-lg text-[var(--accent-light)] max-w-xl mx-auto"
          >
            Every journey, every need — we've got the perfect ride for you.
          </motion.p>
        </div>
      </section>



      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 2.5: POPULAR TEMPLE TOUR PACKAGES
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-100" id="temple-packages-panel">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          
          {/* Header Panel */}
          <div className="space-y-3">
            <span className="font-sans text-xs font-bold uppercase tracking-[3px] text-amber-500">
              Pilgrimage Packages
            </span>
            <h2 className="font-serif text-3xl sm:text-[36px] md:text-[40px] leading-tight font-bold text-[var(--primary-dark)]">
              Popular Pilgrimage & Temple Tour Packages
            </h2>
            <div className="h-1 w-[60px] bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto" />
            <p className="font-sans text-base sm:text-lg text-[var(--text-light)] max-w-xl mx-auto leading-relaxed pt-2">
              Comfortable rides and customized itineraries for holy temple darshans across South India.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: "Tirumala & Tirupati Local Tour",
                duration: "1 Day Tour",
                temples: "Tirumala Temple, Tirupati Local 6 Temples",
                desc: "Complete darshan travel assistance and customized visits to the local 6 temples in and around Tirupati.",
                price: "₹1,800 onwards"
              },
              {
                title: "Kalahasthi & Gudimalam Tour",
                duration: "1 Day Tour",
                temples: "Srikalahasti Temple, Gudimalam Ancient Shiva Shrine",
                desc: "Seek blessings at Srikalahasti (Rahu-Ketu temple) and the historic 2nd-century Gudimalam temple.",
                price: "₹2,200 onwards"
              },
              {
                title: "Kanipakam & Vellore Golden Temple",
                duration: "1 Day / Multi-day Tour",
                temples: "VaraSiddhi Vinayaka Temple, Sripuram Golden Temple",
                desc: "Visit the self-manifested Ganesha shrine at Kanipakam followed by the breathtaking golden temple at Sripuram.",
                price: "₹3,500 onwards"
              },
              {
                title: "South Heritage Pilgrimage",
                duration: "2-3 Days Tour",
                temples: "Arunachalam, Kanchipuram, Tiruttani, Narayanavanam",
                desc: "Explore historic temples across borders - Arunachalam (Giri Pradakshina), Kanchipuram silk temples, and Murugan hill shrine in Tiruttani.",
                price: "₹7,500 onwards"
              }
            ].map((pkg, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white hover:bg-white rounded-2xl p-8 border border-slate-100 hover:border-amber-500/20 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer text-left flex flex-col justify-between"
              >
                <div>

                  <h3 className="font-serif text-[22px] font-bold text-[var(--primary-dark)] mb-2 group-hover:text-amber-500 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="font-sans text-xs font-bold text-[#0F2D5A] mb-4 flex flex-wrap gap-1.5 bg-blue-50/50 p-2.5 rounded-lg border border-blue-50">
                    <span className="text-slate-400">Visiting:</span>
                    <span>{pkg.temples}</span>
                  </div>
                  
                  <p className="font-sans text-[15px] leading-relaxed text-slate-500">
                    {pkg.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100/80 mt-6 flex flex-col sm:flex-row gap-3">
                  <a 
                    href={`https://wa.me/918121481100?text=Hi,%20I%20want%20to%20book%20the%20${encodeURIComponent(pkg.title)}%20package`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20ba56] text-white font-sans text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-1.5 shadow-sm"
                  >
                    <RiWhatsappLine size={16} />
                    <span>Book on WhatsApp</span>
                  </a>
                  <Link 
                    to="/book" 
                    className="w-full sm:w-auto border border-slate-200 hover:border-[#0F2D5A] hover:bg-[#0F2D5A] hover:text-white text-slate-700 font-sans text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Custom Booking</span>
                    <span>→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 3: PRICING BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 py-16" id="pricing-banner">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">

          {/* Header Panel */}
          <div className="space-y-3 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-[40px] font-bold text-[#0F2D5A] tracking-tight leading-tight">
              Transparent Pricing. Zero Surprises.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#0F2D5A]/85 font-medium">
              We believe in honest fares. What you see is what you pay.
            </p>
          </div>

          {/* ── TABLE 1: LOCAL CITY TOURS ── */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-[#0F2D5A] mb-4 text-left">Local City Tours</h3>
            <div className="bg-white rounded-2xl shadow-[0_12px_44px_rgba(15,45,90,0.15)] overflow-hidden border border-amber-300">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#0F2D5A] text-white">
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Destination</th>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs text-center">Etios / Dzire</th>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs text-center">Innova Crysta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#0F2D5A]">
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">Local City Tour</td>
                      <td className="py-4 px-6 font-bold text-center">₹800</td>
                      <td className="py-4 px-6 font-bold text-center">₹1,500</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">Tirupati Airport Pickup or Drop</td>
                      <td className="py-4 px-6 font-bold text-center">₹600</td>
                      <td className="py-4 px-6 font-bold text-center">₹1,000</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">Renigunta Station Pickup or Drop</td>
                      <td className="py-4 px-6 font-bold text-center">₹300</td>
                      <td className="py-4 px-6 font-bold text-center">₹400</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">Tirupati Station Pickup or Drop</td>
                      <td className="py-4 px-6 font-bold text-center">₹300</td>
                      <td className="py-4 px-6 font-bold text-center">₹400</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Tirumala <span className="text-xs font-normal text-slate-400">(5 Hrs · Extra ₹200/₹250 per hr)</span>
                      </td>
                      <td className="py-4 px-6 font-bold text-center">₹2,500</td>
                      <td className="py-4 px-6 font-bold text-center">₹3,500</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Sri Kalahasti <span className="text-xs font-normal text-slate-400">(3 Hrs · Extra ₹200/₹250 per hr)</span>
                      </td>
                      <td className="py-4 px-6 font-bold text-center">₹2,700</td>
                      <td className="py-4 px-6 font-bold text-center">₹4,000</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Kanipakam <span className="text-xs font-normal text-slate-400">(4 Hrs · Extra ₹200/₹250 per hr)</span>
                      </td>
                      <td className="py-4 px-6 font-bold text-center">₹3,300</td>
                      <td className="py-4 px-6 font-bold text-center">₹4,500</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Srinivasa Mangapuram <span className="text-xs font-normal text-slate-400">(1 Hr)</span>
                      </td>
                      <td className="py-4 px-6 font-bold text-center">₹1,200</td>
                      <td className="py-4 px-6 font-bold text-center">₹1,700</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Padmavathi Temple <span className="text-xs font-normal text-slate-400">(1 Hr)</span>
                      </td>
                      <td className="py-4 px-6 font-bold text-center">₹700</td>
                      <td className="py-4 px-6 font-bold text-center">₹1,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* ── TABLE 2: OUTSTATION TOURS ── */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-serif text-xl font-bold text-[#0F2D5A] mb-4 text-left">Outstation Tours</h3>
            <div className="bg-white rounded-2xl shadow-[0_12px_44px_rgba(15,45,90,0.15)] overflow-hidden border border-amber-300">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse font-sans text-sm md:text-base">
                  <thead>
                    <tr className="bg-[#0F2D5A] text-white">
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs">Destination</th>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs text-center">Etios / Dzire</th>
                      <th className="py-4 px-6 font-semibold uppercase tracking-wider text-xs text-center">Innova Crysta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-[#0F2D5A]">
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Chennai Airport Pickup or Drop <span className="text-xs font-normal text-slate-400">(incl. Driver Batta)</span>
                      </td>
                      <td className="py-4 px-6 font-bold text-center">₹5,500</td>
                      <td className="py-4 px-6 font-bold text-center">₹8,000</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">
                        Bangalore Airport Pickup or Drop <span className="text-xs font-normal text-slate-400">(incl. Driver Batta)</span>
                      </td>
                      <td className="py-4 px-6 font-bold text-center">₹8,000</td>
                      <td className="py-4 px-6 font-bold text-center">₹13,500</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">Golden Temple, Vellore</td>
                      <td className="py-4 px-6 font-bold text-center">₹5,500</td>
                      <td className="py-4 px-6 font-bold text-center">₹7,500</td>
                    </tr>
                    <tr className="hover:bg-amber-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium">Arunachalam Temple (Kanipakam, Golden Temple)</td>
                      <td className="py-4 px-6 font-bold text-center">₹7,500</td>
                      <td className="py-4 px-6 font-bold text-center">₹11,500</td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/contact"
              className="bg-[#0F2D5A] hover:bg-[#1A4F8A] text-white font-sans font-bold text-sm tracking-wider uppercase py-4 px-9 rounded-full shadow-[0_8px_30px_rgba(15,45,90,0.3)] transition-transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get Custom Quote
            </Link>
            <a
              href="https://wa.me/918121481100?text=Hi,%20I%20want%20to%20book%20a%20cab%20with%20Chethana%20Flybird%20Travels"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba56] text-white font-sans font-bold text-sm tracking-wider uppercase py-4 px-9 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.3)] transition-transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <RiWhatsappLine size={18} />
              <span>Book on WhatsApp</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}

