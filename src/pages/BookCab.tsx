import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { 
  RiMapPinLine, 
  RiCarLine, 
  RiCheckLine, 
  RiArrowRightLine, 
  RiMapPinUserLine,
  RiCalendarLine,
  RiTimeLine
} from 'react-icons/ri';

// Exported pricing data (used by other pages like Services/Pricing)
export const LOCAL_CITY_TOURS = [
  { name: 'Tirupati Airport', sedan: 800, suv: 1500, note: 'Pickup/Drop flat rate' },
  { name: 'Renigunta Station', sedan: 600, suv: 1000, note: 'Pickup/Drop flat rate' },
  { name: 'Tirupati Station', sedan: 300, suv: 400, note: 'Pickup/Drop flat rate' },
  { name: 'Tirumala', sedan: 2500, suv: 3500, note: '5 hours limit (A/C does not work on hill roads; extra hrs ₹200 Sedan / ₹250 SUV)' },
  { name: 'Sri Kalahasti', sedan: 2700, suv: 4000, note: '3 hours limit (extra hrs ₹200 Sedan / ₹250 SUV)' },
  { name: 'Kanipakam', sedan: 3300, suv: 4500, note: '4 hours limit (extra hrs ₹200 Sedan / ₹250 SUV)' },
  { name: 'Srinivasa Mangapuram', sedan: 1200, suv: 1700, note: '1 hour transfer limit' },
  { name: 'Padmavathi Temple', sedan: 700, suv: 1000, note: '1 hour transfer limit' }
];

export const OUTSTATION_TOURS = [
  { name: 'Chennai Airport', sedan: 5500, suv: 8000, note: 'Pickup/Drop flat package (includes Driver Batta)' },
  { name: 'Bangalore Airport', sedan: 8000, suv: 13500, note: 'Pickup/Drop flat package (includes Driver Batta)' },
  { name: 'Golden Temple (Vellore)', sedan: 5500, suv: 7500, note: 'Round trip tour packages (Toll/parking extra)' },
  { name: 'Arunachalam Temple', sedan: 7500, suv: 11500, note: 'Sightseeing tour (includes Kanipakam & Golden Temple)' }
];

export default function BookCab() {
  const today = new Date().toISOString().split('T')[0];
  const [searchParams] = useSearchParams();
  const defaultVehicle = searchParams.get('vehicle') || 'Toyota Etios';

  // Quick booking widget state
  const [quickTab, setQuickTab] = useState<'oneway' | 'round' | 'hourly'>('oneway');
  const [quickForm, setQuickForm] = useState({ pickup: '', drop: '', date: '', time: '', vehicle: defaultVehicle, returnDate: '', returnTime: '', hours: '8' });
  const [personalForm, setPersonalForm] = useState({ name: '', phone: '', email: '' });
  
  const [step, setStep] = useState<1 | 2>(1);
  const [quickSuccess, setQuickSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNextStep = (e: FormEvent) => {
    e.preventDefault();
    if (!quickForm.pickup || !quickForm.date || !quickForm.time) {
      alert('Please fill in all required trip details.');
      return;
    }
    if (quickTab !== 'hourly' && !quickForm.drop) {
      alert('Please enter a drop destination.');
      return;
    }
    if (quickTab === 'round' && (!quickForm.returnDate || !quickForm.returnTime)) {
      alert('Please fill in return date and time for round trip.');
      return;
    }
    setStep(2);
  };

  const handleFinalSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!personalForm.name || !personalForm.phone) {
      alert('Name and Phone number are required.');
      return;
    }

    setIsSubmitting(true);
    try {
      const tripType = quickTab === 'oneway' ? 'One Way' : quickTab === 'round' ? 'Round Trip' : 'Hourly';
      
      const returnDetails = quickTab === 'round' ? `\nReturn Date: ${quickForm.returnDate}\nReturn Time: ${quickForm.returnTime}` : '';
      const durationDetails = quickTab === 'hourly' ? `\nDuration: ${quickForm.hours} Hours` : '';
      
      const message = `*New Cab Booking Request*
-----------------------------
*Trip Details:*
Type: ${tripType}
Pickup: ${quickForm.pickup}
${quickTab !== 'hourly' ? `Drop: ${quickForm.drop}\n` : ''}Date: ${quickForm.date}
Time: ${quickForm.time}${returnDetails}${durationDetails}
Vehicle: ${quickForm.vehicle}
-----------------------------
*Passenger Details:*
Name: ${personalForm.name}
Phone: ${personalForm.phone}
${personalForm.email ? `Email: ${personalForm.email}` : ''}`;

      const whatsappUrl = `https://wa.me/918121481100?text=${encodeURIComponent(message)}`;
      
      // Redirect user to WhatsApp
      window.open(whatsappUrl, '_blank');
      
      setQuickSuccess(true);
      setTimeout(() => {
        setQuickSuccess(false);
        setStep(1);
        setQuickForm({ pickup: '', drop: '', date: '', time: '', vehicle: 'Toyota Etios', returnDate: '', returnTime: '', hours: '8' });
        setPersonalForm({ name: '', phone: '', email: '' });
      }, 5000);
      
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[var(--off-white)]">
      <SEO
        title="Book a Cab"
        description="Book a cab online with Chethana Flybird Travels. Quick booking in simple steps with WhatsApp confirmation. Available 24/7 in Tirupati."
        keywords="book cab Tirupati, online taxi booking, cab reservation, hire taxi Tirupati"
        canonicalUrl="https://www.chethanaflybirdtravels.com/book"
      />
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          SECTION 1: PAGE HERO BANNER
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative h-[300px] sm:h-[280px] md:h-[260px] flex items-center justify-center text-center bg-gradient-to-r from-[#0F2D5A] to-[#1A4F8A] text-white overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-4 pt-6">

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl font-bold tracking-tight leading-tight text-white mb-2"
          >
            Book Your Cab
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-sans text-sm sm:text-base text-white/80 max-w-lg mx-auto"
          >
            Quick booking in simple steps. We confirm within 10 minutes.
          </motion.p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          QUICK BOOKING WIDGET CARD
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative z-20 px-6 max-w-6xl mx-auto w-full -mt-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
          className="bg-white rounded-[24px] shadow-[0_12px_40px_rgba(26,79,138,0.18)] p-8 sm:p-10 border border-slate-100"
        >
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-slate-100 pb-6">
            <div className="text-left">
              <h2 className="font-serif text-[26px] font-bold text-[#0F2D5A] leading-tight">Book Your Ride</h2>
              <p className="font-sans text-sm text-slate-400 mt-1">Quick &amp; Easy Booking Form</p>
            </div>
            {/* Trip type tabs */}
            <div className="flex bg-slate-100 p-1 rounded-full w-fit">
              {([{ id: 'oneway', label: 'One Way' }, { id: 'round', label: 'Round Trip' }, { id: 'hourly', label: 'Hourly' }] as const).map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setQuickTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all ${
                    quickTab === tab.id
                      ? 'bg-[#0F2D5A] text-white shadow-sm'
                      : 'text-slate-500 hover:text-[#0F2D5A]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {quickSuccess ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <RiCheckLine size={24} />
              </div>
              <h3 className="font-serif text-xl font-bold text-emerald-900">Booking Confirmed!</h3>
              <p className="text-sm font-sans text-emerald-700 max-w-md mx-auto">
                Thank you, <strong>{personalForm.name}</strong>. Your trip from <strong>{quickForm.pickup}</strong> to <strong>{quickForm.drop}</strong> is noted. We have sent a confirmation email to <strong>{personalForm.email}</strong> and our team will call you at <strong>{personalForm.phone}</strong> shortly.
              </p>
            </motion.div>
          ) : step === 1 ? (
            <form onSubmit={handleNextStep} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pickup */}
                <div className="space-y-1.5">
                  <label htmlFor="pickup" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Pickup Location</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><RiMapPinLine size={18} /></span>
                    <input
                      id="pickup"
                      type="text" required
                      placeholder="Enter pickup location (e.g. airport, home)"
                      value={quickForm.pickup}
                      onChange={(e) => setQuickForm({ ...quickForm, pickup: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]"
                    />
                  </div>
                </div>
                {/* Drop (Hidden for Hourly) */}
                {quickTab !== 'hourly' && (
                  <div className="space-y-1.5">
                  <label htmlFor="drop" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Drop Destination</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><RiMapPinUserLine size={18} /></span>
                    <input
                      id="drop"
                        type="text" required={quickTab !== 'hourly'}
                        placeholder="Enter drop address or city"
                        value={quickForm.drop}
                        onChange={(e) => setQuickForm({ ...quickForm, drop: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]"
                      />
                    </div>
                  </div>
                )}
                
                {/* Duration (Only for Hourly) */}
                {quickTab === 'hourly' && (
                  <div className="space-y-1.5">
                    <label htmlFor="duration" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Duration</label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><RiTimeLine size={18} /></span>
                      <select
                        id="duration"
                        value={quickForm.hours}
                        onChange={(e) => setQuickForm({ ...quickForm, hours: e.target.value })}
                        className="w-full pl-11 pr-4 py-[15px] bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm appearance-none"
                      >
                        <option value="4">4 Hours</option>
                        <option value="6">6 Hours</option>
                        <option value="8">8 Hours</option>
                        <option value="12">12 Hours</option>
                        <option value="24">24 Hours (Full Day)</option>
                      </select>
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs">▼</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Date */}
                <div className="space-y-1.5">
                  <label htmlFor="travel-date" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Travel Date</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><RiCalendarLine size={18} /></span>
                    <input
                      id="travel-date"
                      type="date" required
                      min={today}
                      value={quickForm.date}
                      onChange={(e) => setQuickForm({ ...quickForm, date: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                {/* Time */}
                <div className="space-y-1.5">
                  <label htmlFor="travel-time" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Travel Time</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><RiTimeLine size={18} /></span>
                    <input
                      id="travel-time"
                      type="time" required
                      value={quickForm.time}
                      onChange={(e) => setQuickForm({ ...quickForm, time: e.target.value })}
                      className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
                {/* Vehicle */}
                <div className="col-span-1 sm:col-span-2 md:col-span-1 space-y-1.5">
                  <label htmlFor="vehicle" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Vehicle</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><RiCarLine size={18} /></span>
                    <select
                      id="vehicle"
                      value={quickForm.vehicle}
                      onChange={(e) => setQuickForm({ ...quickForm, vehicle: e.target.value })}
                      className="w-full pl-11 pr-4 py-[15px] bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm appearance-none"
                    >
                      <option value="Toyota Etios">Toyota Etios</option>
                      <option value="Swift Dzire">Swift Dzire</option>
                      <option value="Innova Crysta">Innova Crysta</option>
                      <option value="Kia Carens">Kia Carens</option>
                      <option value="Ertiga">Ertiga</option>
                      <option value="Tempo Traveller">Tempo Traveller</option>
                      <option value="Urbania">Urbania</option>
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-xs">▼</span>
                  </div>
                </div>
              </div>

              {/* Round Trip Return Details */}
              {quickTab === 'round' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Return Date */}
                  <div className="space-y-1.5">
                  <label htmlFor="return-date" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Return Date</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><RiCalendarLine size={18} /></span>
                    <input
                      id="return-date"
                        type="date" required={quickTab === 'round'}
                        min={quickForm.date || today}
                        value={quickForm.returnDate}
                        onChange={(e) => setQuickForm({ ...quickForm, returnDate: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                  {/* Return Time */}
                  <div className="space-y-1.5">
                  <label htmlFor="return-time" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Return Time</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"><RiTimeLine size={18} /></span>
                    <input
                      id="return-time"
                        type="time" required={quickTab === 'round'}
                        value={quickForm.returnTime}
                        onChange={(e) => setQuickForm({ ...quickForm, returnTime: e.target.value })}
                        className="w-full pl-11 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-sm"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full h-[56px] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0F2D5A] font-sans font-bold text-base tracking-wider rounded-[12px] flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(245,158,11,0.30)] transition-all hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Next: Personal Details</span>
                  <RiArrowRightLine size={20} />
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleFinalSubmit} className="space-y-6 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-1.5 md:col-span-2">
                  <label htmlFor="full-name" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Full Name</label>
                  <input
                    id="full-name"
                    type="text" required
                    placeholder="Enter your full name"
                    value={personalForm.name}
                    onChange={(e) => setPersonalForm({ ...personalForm, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]"
                  />
                </div>
                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Phone Number</label>
                  <input
                    id="phone"
                    type="tel" required
                    placeholder="Enter your phone number"
                    value={personalForm.phone}
                    onChange={(e) => setPersonalForm({ ...personalForm, phone: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]"
                  />
                </div>
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-400">Email Address</label>
                  <input
                    id="email"
                    type="email" required
                    placeholder="Enter your email address"
                    value={personalForm.email}
                    onChange={(e) => setPersonalForm({ ...personalForm, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-[12px] focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]"
                  />
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 h-[56px] bg-slate-100 hover:bg-slate-200 text-slate-600 font-sans font-bold text-base tracking-wider rounded-[12px] flex items-center justify-center transition-all"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-2/3 h-[56px] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0F2D5A] font-sans font-bold text-base tracking-wider rounded-[12px] flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(245,158,11,0.30)] transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span>{isSubmitting ? 'Confirming...' : 'Confirm Booking'}</span>
                  {!isSubmitting && <RiCheckLine size={20} />}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </section>



    </div>
  );
}
