import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import BookCab from './pages/BookCab';
import Contact from './pages/Contact';

export default function App() {
  return (
    <HelmetProvider>
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 font-sans antialiased text-slate-700">
        {/* Navbar always at top */}
        <Navbar />

        {/* Content routing in the middle */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/book" element={<BookCab />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </div>
    </Router>
    </HelmetProvider>
  );
}
