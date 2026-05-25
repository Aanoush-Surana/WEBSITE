import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Administration from './pages/Administration';
import Academics from './pages/Academics';
import Research from './pages/Research';
import People from './pages/People';
import CampusLife from './pages/CampusLife';
import Notices from './pages/Notices';
import Placements from './pages/Placements';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-hero-gradient">
      <div className="text-center px-4">
        <div className="font-display font-black text-8xl text-brand-700 mb-4">404</div>
        <h1 className="font-display font-bold text-3xl text-white mb-3">Page Not Found</h1>
        <p className="text-dark-400 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a href="/" className="btn-primary">
          Return to Homepage
        </a>
      </div>
    </div>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-dark-950 flex flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About (nested routes) */}
          <Route path="/about/*" element={<About />} />

          {/* Administration (nested routes) */}
          <Route path="/administration/*" element={<Administration />} />

          {/* Academics (nested routes) */}
          <Route path="/academics/*" element={<Academics />} />

          {/* Research (nested routes) */}
          <Route path="/research/*" element={<Research />} />

          {/* People (nested routes with dynamic faculty profile) */}
          <Route path="/people/*" element={<People />} />

          {/* Campus Life (nested routes with dynamic club pages) */}
          <Route path="/campus-life/*" element={<CampusLife />} />

          {/* Notices (nested routes) */}
          <Route path="/notices/*" element={<Notices />} />

          {/* Placements */}
          <Route path="/placements" element={<Placements />} />

          {/* Contact */}
          <Route path="/contact" element={<Contact />} />

          {/* Careers */}
          <Route path="/careers" element={
            <Layout>
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="font-display font-bold text-3xl text-white mb-3">Careers at IIIT Pune</h1>
                  <p className="text-dark-400 mb-6">Job openings and career opportunities will be listed here.</p>
                  <a href="https://www.iiitp.ac.in/careers" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View on Official Website
                  </a>
                </div>
              </div>
            </Layout>
          } />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
