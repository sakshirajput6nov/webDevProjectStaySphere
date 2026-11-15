import React from 'react';
import { Compass, ShieldCheck, Phone, Mail, Heart, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-brand-500 text-white flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">StaySphere</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering students and young professionals across India to discover verified PGs, shared flats, and co-living spaces with immersive 360° virtual tours and individual bed reservations.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 p-2.5 rounded-xl border border-emerald-800/40">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>100% Verified Owners & Zero Brokerage</span>
            </div>
          </div>

          {/* Col 2: Top Student Hubs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Student Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/properties?city=Bangalore" className="hover:text-brand-400 transition-colors">
                  Bangalore (Koramangala, Indiranagar, HSR)
                </Link>
              </li>
              <li>
                <Link to="/properties?city=Delhi" className="hover:text-brand-400 transition-colors">
                  Delhi NCR (North Campus, South Campus, Noida)
                </Link>
              </li>
              <li>
                <Link to="/properties?city=Pune" className="hover:text-brand-400 transition-colors">
                  Pune (Viman Nagar, Baner, Kothrud)
                </Link>
              </li>
              <li>
                <Link to="/properties?city=Hyderabad" className="hover:text-brand-400 transition-colors">
                  Hyderabad (Gachibowli, Madhapur, Hitec City)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Explore Platform
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/properties" className="hover:text-brand-400 transition-colors">
                  All Properties & Flatmates
                </Link>
              </li>
              <li>
                <Link to="/properties?hasTour=true" className="hover:text-brand-400 transition-colors">
                  360° Virtual Tour Experience
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-brand-400 transition-colors">
                  Student Sign In
                </Link>
              </li>
              <li>
                <Link to="/owner/dashboard" className="hover:text-brand-400 transition-colors">
                  Property Owner Portal
                </Link>
              </li>
              <li>
                <Link to="/admin/dashboard" className="hover:text-brand-400 transition-colors">
                  System Admin Console
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Safety & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Support & Helpline
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400" />
                <span>+91 1800 572 829 (Toll-Free 24x7)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-400" />
                <span>support@staysphere.com</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-800">
                Verified listings undergo strict safety audits including fire safety, CCTV checks, and biometric entry systems.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} StaySphere Technologies Inc. Built with love for students & young pros.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span>•</span>
            <span className="hover:text-slate-400 cursor-pointer">Refund Guarantee</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
