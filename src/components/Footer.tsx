
import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-6">
        <div id="kontakt" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <h3 className="font-display font-bold text-xl mb-6">fulldempet-elsykkel.no</h3>
            <p className="text-slate-300 mb-6">
              Norges spesialister på fulldempede elektriske terrengsykler. Kvalitet, ytelse og service i verdensklasse.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-forest-light transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-forest-light transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-forest-light transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Kontakt oss</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 mt-1 text-forest-light" />
                <span className="text-slate-300">Sykkelveien 123, 0553 Oslo, Norge</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-forest-light" />
                <span className="text-slate-300">+47 22 12 34 56</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-forest-light" />
                <span className="text-slate-300">post@fulldempet-elsykkel.no</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Åpningstider</h3>
            <ul className="space-y-3 text-slate-300">
              <li className="flex justify-between">
                <span>Mandag - Fredag:</span>
                <span>10:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Lørdag:</span>
                <span>10:00 - 16:00</span>
              </li>
              <li className="flex justify-between">
                <span>Søndag:</span>
                <span>Stengt</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-bold text-xl mb-6">Nyhetsbrev</h3>
            <p className="text-slate-300 mb-4">
              Abonner for å motta nyheter om de nyeste modellene og eksklusive tilbud.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Din e-postadresse" 
                className="w-full px-4 py-2 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-forest-light text-white" 
                required
              />
              <button 
                type="submit" 
                className="w-full button-primary bg-forest-light hover:bg-forest"
              >
                Abonner
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; {currentYear} fulldempet-elsykkel.no. Alle rettigheter reservert.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
