import { Phone, Star, ShieldCheck, Heart, Award, MapPin, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

const BUSINESS_NAME = "Prashant Pet Shop & Clinic";
const PHONE_NUMBER = "+91 6390500149";
const PHONE_TEL = "tel:+916390500149";
const LOCATION = "Gomti Nagar, Lucknow";

const BREEDS = [
  { name: "Siberian Husky", age: "45 days", price: "Call for Price", img: "../images/husky.jpg" },
  { name: "Labrador Retriever", age: "42 days", price: "Call for Price", img: "../images/Labrador_Retriever.jpg" },
  { name: "German Shepherd", age: "48 days", price: "Call for Price", img: "../images/German Shepherd.jpeg" },
  { name: "Golden Retriever", age: "45 days", price: "Call for Price", img: "../images/Golden Retriver.jpeg" },
  { name: "Shih Tzu", age: "50 days", price: "Call for Price", img: "../images/Shih Tzu.png" },
];

const REVIEWS = [
  { name: "Tretanshi Verma", rating: 5, text: "I purchased a Husky puppy from Prashant Pet Shop. The staff was very kind and helpful throughout the process. Highly recommended!" },
  { name: "Aditya Sharma", rating: 5, text: "Best pet shop in Lucknow for pure breed dogs. Truly healthy puppies and transparent dealings." },
  { name: "Palaash Saxena", rating: 5, text: "Bought a German Shepherd recently. They explained everything about vaccination and diet very clearly. Great experience." },
  { name: "Sammer Gaming", rating: 5, text: "Genuine and trusted dog breeder in Gomti Nagar. If you want a champion line puppy, this is the place." },
  { name: "Dolly Verma", rating: 5, text: "Original breed puppy at a very reasonable price. Very satisfied with my new family member!" },
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
      
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <div className="flex flex-col">
            <img src="../images/logo.png" className='w-15' alt="" />
            {/*<span className="font-anton text-xl md:text-2xl text-orange-600 tracking-tighter uppercase leading-none">PRASHANT</span>
            <span className="text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest leading-none">Pet Shop & Clinic</span>*/}
          </div>
          <a 
            href={PHONE_TEL}
            className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-full font-bold text-sm transition-transform active:scale-95 shadow-lg shadow-orange-200"
            id="nav-call-btn"
          >
            <Phone size={16} fill="currentColor" />
            <span className="hidden sm:inline">{PHONE_NUMBER}</span>
            <span className="sm:hidden">CALL NOW</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="hero">
        <div className="absolute top-0 right-0 -z-10 opacity-5">
           <svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="400" cy="400" r="400" fill="url(#paint0_radial)" />
              <defs>
                <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(400 400) rotate(90) scale(400)">
                  <stop stopColor="#EA580C" />
                  <stop offset="1" stopColor="#EA580C" stopOpacity="0" />
                </radialGradient>
              </defs>
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest mb-6 border border-orange-200">
               🐾 #1 Trusted Dog Breeder in Lucknow
            </span>
            <h1 className="text-4xl md:text-7xl font- anton font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
              Buy Healthy Puppies in Lucknow – <span className="text-orange-600">Pure Breeds</span> in Gomti Nagar
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Find your new best friend today. Our puppies are <span className="font-bold text-slate-900">Vaccinated</span>, <span className="font-bold text-slate-900">Vet Checked</span>, and come with a 100% Pure Breed Guarantee.
            </p>

            <div className="flex flex-col items-center gap-4">
              <a 
                href={PHONE_TEL}
                className="group relative flex items-center justify-center gap-3 bg-orange-600 hover:bg-orange-700 text-white w-full max-w-md py-6 rounded-2xl text-2xl font-black transition-all active:scale-95 shadow-2xl shadow-orange-500/30 overflow-hidden"
                id="hero-main-cta"
              >
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-[-20deg]"></div>
                <Phone size={28} fill="currentColor" strokeWidth={3} />
                <span>Call Now to Book Yours</span>
              </a>
              <p className="text-red-600 font-bold flex items-center gap-2 animate-pulse">
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                Only Few Puppies Left – High Demand Today
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <section className="bg-slate-900 text-white py-10" id="trust-bar">
         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
               <span className="text-3xl font-black text-orange-500 mb-1">4.9/5</span>
               <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#F97316" color="#F97316" />)}
               </div>
               <span className="text-[10px] text-slate-400 uppercase tracking-widest">Google Rating</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl font-black mb-1">100+</span>
               <span className="text-[10px] text-slate-400 uppercase tracking-widest">Happy Owners</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl font-black mb-1">100%</span>
               <span className="text-[10px] text-slate-400 uppercase tracking-widest">Pure Breed</span>
            </div>
            <div className="flex flex-col items-center">
               <span className="text-3xl font-black mb-1">24/7</span>
               <span className="text-[10px] text-slate-400 uppercase tracking-widest">Vet Support</span>
            </div>
         </div>
      </section>

      {/* Breeder Section (Puppy Cards) */}
      <section className="py-24 bg-slate-50" id="puppies">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">Available Breeds</h2>
            <p className="text-slate-600 max-w-xl mx-auto italic">Pure breed, vaccinated puppies ready for their new homes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {BREEDS.map((breed, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={breed.img} 
                    alt={breed.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest border border-slate-100 flex items-center gap-1">
                    <CheckCircle2 size={12} className="text-green-500" /> Vaccinated
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{breed.name}</h3>
                  <div className="flex justify-between items-center mb-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1"><MapPin size={14} /> Lucknow</span>
                    <span>{breed.age}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-black text-orange-600">{breed.price}</span>
                    <a 
                      href={PHONE_TEL}
                      className="bg-orange-600 hover:bg-orange-700 text-white p-3 rounded-2xl transition-colors active:scale-90"
                    >
                      <Phone size={20} fill="currentColor" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <a 
              href={PHONE_TEL}
              className="inline-flex items-center gap-2 text-xl font-bold text-slate-900 hover:text-orange-600 transition-colors"
            >
              Don't see your favorite breed? <span className="underline decoration-orange-400 underline-offset-4 flex items-center gap-1">Call & Inquire Now <ChevronRight size={20} /></span>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden relative" id="why-us">
        <div className="max-w-7xl mx-auto px-4">
           <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                 <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                    Why Lucknow Trusts <br/><span className="text-orange-600">Prashant Pet Shop & Clinic</span>
                 </h2>
                 
                 <div className="space-y-8">
                    {[
                      { title: "100% Pure Breed Guarantee", desc: "No mixing, no compromises. We only deal in pure, high-quality champion line puppies.", icon: <Award className="text-orange-600" size={32} /> },
                      { title: "Vet Checked Puppies", desc: "Each puppy undergoes a thorough medical examination before being listed for sale.", icon: <ShieldCheck className="text-orange-600" size={32} /> },
                      { title: "Health Certificate Provided", desc: "We provide full documentation including vaccination history and health certificates.", icon: <CheckCircle2 className="text-orange-600" size={32} /> },
                      { title: "Lifetime Support", desc: "Our clinic provides ongoing guidance and medical support for your puppy's well-being.", icon: <Heart className="text-orange-600" size={32} /> }
                    ].map((feature, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-16 h-16 shrink-0 rounded-2xl bg-orange-50 flex items-center justify-center">
                           {feature.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                          <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <div className="flex-1 w-full relative">
                 <div className="aspect-square rounded-full bg-orange-100 absolute -z-10 -top-20 -right-20 opacity-50 blur-3xl"></div>
                 <div className="relative z-10 p-8">
                   <img 
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=1000&auto=format&fit=crop" 
                    alt="Happy Puppy" 
                    className="w-full rounded-[48px] shadow-2xl rotate-3"
                    referrerPolicy="no-referrer"
                   />
                   <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-[280px]">
                      <p className="italic text-slate-600 mb-4 font-medium text-sm">"The best decision we made for our home in Gomti Nagar. The GSD puppy is so healthy and smart!"</p>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-200"></div>
                         <div>
                            <p className="font-bold text-slate-900 text-xs">Sammer Gaming</p>
                            <p className="text-[10px] text-slate-400 uppercase tracking-widest">Happy Customer</p>
                         </div>
                      </div>
                   </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-slate-900 text-white" id="reviews">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex justify-center gap-1 mb-4">
               {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#F97316" color="#F97316" />)}
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 italic">"Highly Recommended Dog Breeder"</h2>
            <p className="text-slate-400 text-lg">Trusted by pet owners across Lucknow</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <div key={i} className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 relative group hover:border-orange-500/50 transition-colors">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => <Star key={j} size={14} fill="#F97316" color="#F97316" />)}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-600 flex items-center justify-center font-bold">{review.name[0]}</div>
                  <span className="font-bold">{review.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Urgency Call to Action */}
      <section className="py-24 bg-orange-600 relative overflow-hidden" id="cta-bottom">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-none">
             DON'T MISS OUT! <br/>PUPPIES SELL FAST.
          </h2>
          <p className="text-white/90 text-xl font-medium mb-12">
            Call today to check the current availability and get the latest prices for your favorite breed in Lucknow.
          </p>

          <a 
            href={PHONE_TEL}
            className="inline-flex items-center gap-4 bg-white text-orange-600 hover:bg-slate-100 px-12 py-6 rounded-full text-3xl font-black transition-all active:scale-95 shadow-2xl mb-6"
            id="bottom-call-btn"
          >
            <Phone size={32} fill="currentColor" strokeWidth={3} />
            CALL NOW
          </a>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-12 text-white/80 font-bold uppercase tracking-widest text-xs">
             <div className="flex items-center gap-2"><MapPin size={16} /> Gomti Nagar, Lucknow</div>
             <div className="flex items-center gap-2"><CheckCircle2 size={16} /> Trusted Seller</div>
             <div className="flex items-center gap-2"><MapPin size={16} /> Shop No 130, Vineet Khand 2</div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-anton text-2xl text-orange-600">PRASHANT PET SHOP</span>
            <span className="text-slate-400 text-sm mt-1">© {new Date().getFullYear()} All Rights Reserved. Lucknow's Premier Dog Breeder.</span>
          </div>
          <div className="flex items-center gap-8">
             <a href={PHONE_TEL} className="text-slate-900 font-bold hover:text-orange-600 transition-colors">Call: {PHONE_NUMBER}</a>
             <span className="text-slate-300">|</span>
             <address className="not-italic text-slate-500 text-sm">Gomti Nagar, Lucknow, India</address>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM CALL BAR (Mobile Optimized) */}
      <AnimatePresence>
        {isScrolled && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 z-[60] bg-white p-4 border-t border-slate-100 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] md:hidden"
          >
            <a 
              href={PHONE_TEL}
              className="flex items-center justify-center gap-3 bg-red-600 text-white w-full py-5 rounded-2xl text-2xl font-black shadow-xl animate-bounce-subtle"
              id="sticky-mobile-call"
            >
              <Phone size={24} fill="currentColor" strokeWidth={3} />
              CALL NOW TO BOOK
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-bounce-subtle {
          animation: bounce-subtle 3s infinite ease-in-out;
        }
      `}</style>

    </div>
  );
}
