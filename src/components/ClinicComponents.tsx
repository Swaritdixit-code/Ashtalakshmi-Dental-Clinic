import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Calendar, MapPin, Star, ChevronRight, ShieldCheck, Clock, Award, Users, CheckCircle2 } from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-white py-0'}`}>
      {/* Top Bar */}
      {!scrolled && (
        <div className="bg-slate-900 text-white py-2 hidden md:block">
          <div className="container-custom flex justify-between items-center text-xs font-medium tracking-wider uppercase">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={12} className="text-primary" />
                <span>Kothapet, Hyderabad</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={12} className="text-primary" />
                <span>Mon - Sat: 10AM - 9PM</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={12} className="text-primary" />
              <span>Emergency: 094943 28414</span>
            </div>
          </div>
        </div>
      )}

      <div className={`container-custom flex justify-between items-center ${!scrolled ? 'py-4' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            A
          </div>
          <div className="hidden sm:block">
            <span className={`font-display font-bold text-lg leading-tight block ${scrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Ashtalakshmi
            </span>
            <span className="text-xs text-primary font-medium tracking-wider uppercase">Dental & Implant Centre</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20"
          >
            <Phone size={16} />
            Book Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-bold"
              >
                <Phone size={18} />
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-light/30 -z-10 rounded-bl-[100px] hidden lg:block" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-4 py-2 rounded-full text-sm font-bold mb-6">
              <Star size={16} fill="currentColor" />
              <span>5.0 Rated Dental Clinic in Hyderabad</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              Your Smile Deserves the <span className="text-primary">Best Care.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Experience painless dental treatments with advanced technology at Ashtalakshmi Dental Clinic. We prioritize your comfort and awareness.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group">
                Book Appointment
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="bg-white border-2 border-slate-200 hover:border-primary hover:text-primary px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2">
                Our Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="Patient" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex text-amber-500 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-sm font-medium text-slate-600">Trusted by 500+ Happy Patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Dental Surgery" 
                className="w-full h-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            {/* Floating Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-slate-100"
            >
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center">
                <ShieldCheck size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Safety First</p>
                <p className="text-sm font-bold text-slate-900">100% Sterilized Tools</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4 border border-slate-100"
            >
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center">
                <Clock size={28} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Timing</p>
                <p className="text-sm font-bold text-slate-900">Open until 9:00 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Dental Implants',
      desc: 'Permanent solution for missing teeth with high-quality implants.',
      icon: <Award className="w-8 h-8" />,
      color: 'bg-blue-50 text-blue-600'
    },
    {
      title: 'General Dentistry',
      desc: 'Routine checkups, cleanings, and fillings for a healthy smile.',
      icon: <ShieldCheck className="w-8 h-8" />,
      color: 'bg-teal-50 text-teal-600'
    },
    {
      title: 'Orthodontics',
      desc: 'Braces and aligners to straighten your teeth perfectly.',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-purple-50 text-purple-600'
    },
    {
      title: 'Cosmetic Dentistry',
      desc: 'Teeth whitening and veneers for a stunning aesthetic look.',
      icon: <Star className="w-8 h-8" />,
      color: 'bg-amber-50 text-amber-600'
    },
    {
      title: 'Root Canal Treatment',
      desc: 'Painless RCT using advanced technology and precision.',
      icon: <CheckCircle2 className="w-8 h-8" />,
      color: 'bg-red-50 text-red-600'
    },
    {
      title: 'Pediatric Dentistry',
      desc: 'Specialized dental care for children in a friendly environment.',
      icon: <Users className="w-8 h-8" />,
      color: 'bg-green-50 text-green-600'
    }
  ];

  return (
    <section id="services" className="section-padding bg-slate-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Our Expertise</h2>
          <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Comprehensive Dental Services for Your Family</p>
          <p className="text-lg text-slate-600">We offer a wide range of specialized dental treatments using the latest technology to ensure the best results.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[32px] shadow-sm border border-slate-100 hover:shadow-xl transition-all"
            >
              <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-6`}>
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{s.desc}</p>
              <button className="text-primary font-bold flex items-center gap-2 group">
                Learn More
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Desai",
      text: "I’m extremely impressed with this dental clinic. The dentist thoroughly explained my treatment options and made sure I felt comfortable throughout the visit. The clinic is clean, modern, and equipped with advanced technology.",
      rating: 5,
      date: "3 months ago"
    },
    {
      name: "Sresta Kallem",
      text: "One of the best dental clinics i visited. The doctors are very friendly and prioritises patient awareness. They educated me well about the entire treatment plan.",
      rating: 5,
      date: "a month ago"
    },
    {
      name: "Bharath kumar Dasoju",
      text: "Excellent dental service. The treatment was painless and well-managed. I am fully satisfied and would definitely recommend this clinic to others.",
      rating: 5,
      date: "a month ago"
    }
  ];

  return (
    <section id="reviews" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Patient Stories</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900">What Our Patients Say About Us</p>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div className="text-4xl font-bold text-slate-900">5.0</div>
            <div>
              <div className="flex text-amber-500 mb-1">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-sm font-medium text-slate-500">Based on 48 Google Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm relative"
            >
              <div className="flex text-amber-500 mb-4">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={16} fill="currentColor" />)}
              </div>
              <p className="text-slate-600 italic mb-8 leading-relaxed">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-light text-primary rounded-full flex items-center justify-center font-bold text-lg">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{r.name}</p>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-0" />
      
      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Get In Touch</h2>
            <p className="text-4xl md:text-5xl font-bold mb-8">Ready to Transform Your Smile?</p>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Our Location</p>
                  <p className="text-lg text-slate-200 leading-relaxed">
                    opp. KPN fresh lane, near Ashtalakshmi temple, Vasavi Colony, Kothapet, Hyderabad, Telangana 500102
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Call Us</p>
                  <p className="text-2xl font-bold text-white">094943 28414</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock className="text-primary" size={28} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">Working Hours</p>
                  <p className="text-lg text-slate-200">Mon - Sat: 10:00 AM - 9:00 PM</p>
                  <p className="text-lg text-slate-200">Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a href="https://maps.google.com" target="_blank" className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-primary hover:text-white transition-all flex items-center gap-2">
                Get Directions
                <MapPin size={18} />
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Full Name</label>
                  <input type="text" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Phone Number</label>
                  <input type="tel" className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Service Interested In</label>
                <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all appearance-none">
                  <option className="bg-slate-900">Dental Implants</option>
                  <option className="bg-slate-900">Root Canal</option>
                  <option className="bg-slate-900">Orthodontics</option>
                  <option className="bg-slate-900">General Checkup</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 uppercase tracking-wider">Message</label>
                <textarea className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all h-32" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-primary/20">
                Book Appointment Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" 
                  alt="Dental Equipment" 
                  className="rounded-3xl shadow-lg w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="bg-primary p-8 rounded-3xl text-white">
                  <p className="text-4xl font-bold mb-1">10+</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Years Experience</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-900 p-8 rounded-3xl text-white">
                  <p className="text-4xl font-bold mb-1">5k+</p>
                  <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Happy Patients</p>
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600" 
                  alt="Modern Clinic" 
                  className="rounded-3xl shadow-lg w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
          </div>

          <div>
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">About the Clinic</h2>
            <p className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">Modern Dentistry with a Personal Touch</p>
            
            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary-light text-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Advanced Technology</h4>
                  <p className="text-slate-600">Equipped with modern dental tools and technology for precise diagnosis and painless treatments.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary-light text-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Patient Awareness</h4>
                  <p className="text-slate-600">We prioritize educating our patients about their treatment plans and oral health maintenance.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-6 h-6 bg-primary-light text-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 size={14} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Sterilized Environment</h4>
                  <p className="text-slate-600">Strict adherence to international sterilization protocols to ensure 100% patient safety.</p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8">
              At Ashtalakshmi Dental Clinic & Implant Centre, we believe in providing quality dental care that is accessible and comfortable. Our team of experienced doctors is dedicated to giving you the best possible experience.
            </p>

            <div className="flex items-center gap-6 p-6 bg-slate-50 rounded-3xl border border-slate-100">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-200">
                <img src="https://picsum.photos/seed/doctor/100/100" alt="Lead Dentist" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Dr. Ashtalakshmi Team</p>
                <p className="text-sm text-slate-500">Lead Dental Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-slate-900 border-t border-white/5">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <span className="font-display font-bold text-white">Ashtalakshmi Dental</span>
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-slate-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
          
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Ashtalakshmi Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Navbar, Hero, Services, Testimonials, Contact, About, Footer };
