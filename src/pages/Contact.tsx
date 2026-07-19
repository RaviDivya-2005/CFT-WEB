import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, AlarmClock, Send, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.message) {
      alert('Please fill in your name and message.');
      return;
    }
    const whatsappMsg = `*Contact Form Submission*
Name: ${form.name}
Email: ${form.email || 'Not provided'}
Phone: ${form.phone || 'Not provided'}
Message: ${form.message}`;
    window.open(`https://wa.me/918121481100?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    { icon: <Phone className="w-6 h-6 text-blue-600" />, title: 'Call directly', value: <>+91 81214 81100 / <br /> +91 93900 65144</> },
    { icon: <Mail className="w-6 h-6 text-blue-600" />, title: 'Write an email', value: 'chethanaflybirdtravels@gmail.com' },
    { icon: <MapPin className="w-6 h-6 text-blue-600" />, title: 'Visit Office', value: '19-12-289, 3rd Floor, Bairagapatteda, Padmavathi Park, Tirupati - 517501' },
    { icon: <AlarmClock className="w-6 h-6 text-blue-600" />, title: 'Operational hours', value: '24/7 - 365 Days Availability' },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden bg-[var(--off-white)]">
      <SEO
        title="Contact Us"
        description="Get in touch with Chethana Flybird Travels. Call +91 81214 81100 or WhatsApp us for instant cab bookings in Tirupati. Available 24/7."
        keywords="contact Chethana Flybird Travels, Tirupati taxi phone number, cab booking contact"
        canonicalUrl="https://www.chethanaflybirdtravels.com/contact"
      />
      
      <section className="relative h-[260px] sm:h-[240px] flex items-center justify-center text-center bg-gradient-to-r from-[#0F2D5A] to-[#1A4F8A] text-white overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto px-6 space-y-3 pt-6">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight leading-tight"
          >
            Contact Us
          </motion.h1>
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

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          
          {/* Left Side — Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            <h2 className="font-serif text-2xl font-bold text-[var(--primary-dark)]">Get in Touch</h2>
            <p className="font-sans text-sm text-slate-500 leading-relaxed">
              Have a question or need help booking a ride? Reach out to us — we respond within 10 minutes.
            </p>

            {contactInfo.map((info, i) => (
              <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-xl shrink-0">{info.icon}</div>
                <div>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{info.title}</p>
                  <p className="text-[15px] font-semibold text-slate-800 mt-1">{info.value}</p>
                </div>
              </div>
            ))}

            <div className="flex gap-3 pt-2">
              <a href="tel:+918121481100" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#0F2D5A] text-white text-sm font-bold rounded-xl hover:bg-[#1A4F8A] transition-all">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
              <a href="https://wa.me/918121481100" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] text-white text-sm font-bold rounded-xl hover:bg-[#20ba56] transition-all">
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </motion.div>

          {/* Right Side — Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 sm:p-10 shadow-[0_8px_30px_rgba(15,45,90,0.08)] border border-slate-100"
          >
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--primary-dark)] mb-2">Send Us a Message</h2>
            <p className="font-sans text-sm text-slate-400 mb-8">We'll respond within 10 minutes via WhatsApp</p>

            {sent ? (
              <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center">
                <p className="font-sans text-emerald-700">Message sent! We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Full Name *</label>
                    <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Phone</label>
                    <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="Your phone number" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Email</label>
                  <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Your email address" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Message *</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Write your message here..." className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:border-[#1A4F8A] focus:ring-4 focus:ring-blue-100 outline-none transition-all text-[15px] resize-none" />
                </div>
                <button type="submit" className="w-full h-[52px] bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#0F2D5A] font-bold text-sm uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-[0_8px_25px_rgba(245,158,11,0.30)] transition-all hover:scale-[1.01] active:scale-[0.99]">
                  <Send size={18} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}
