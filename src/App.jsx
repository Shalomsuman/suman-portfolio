import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub,
  FaBriefcase, FaGraduationCap, FaAward, FaCogs,
  FaUsers, FaChartLine, FaLanguage, FaBars, FaTimes,
  FaGlobeAmericas, FaLaptopCode, FaShieldAlt, FaClock,
  FaArrowRight, FaUserTie, FaClipboardCheck, FaHandshake,
  FaChevronRight, FaExternalLinkAlt, FaUserCircle
} from 'react-icons/fa'

const GITHUB_URL = 'https://github.com/Shalomsuman/'
const EMAIL = 'suman.sumi.m@gmail.com'
const PHONE = '+91 9844855339'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'expertise', label: 'Expertise' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'Resume', label: 'Resume' },
  ]
  

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      const current = navItems.find(({ id }) => {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 120 && rect.bottom >= 120
        }
        return false
      })
      if (current) setActiveSection(current.id)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }

  const staggerContainer = {
    animate: {
      transition: { staggerChildren: 0.12 }
    }
  }

  const differentiators = [
    {
      icon: FaGlobeAmericas,
      title: 'Cross-Border Ready',
      text: 'Fluent across 6 languages and experienced coordinating multicultural teams — built to bridge HR gaps for globally distributed organizations.'
    },
    {
      icon: FaLaptopCode,
      title: 'Digital-First HR Delivery',
      text: 'End-to-end HR execution through Zoho People, PagarBook, and AI-enabled recruiting tools — fully compatible with remote, cloud-first operations.'
    },
    {
      icon: FaShieldAlt,
      title: 'Compliance You Can Trust',
      text: 'Disciplined statutory compliance and payroll accuracy delivered consistently across a 250+ employee, multi-entity workforce.'
    },
    {
      icon: FaClock,
      title: 'Built for Always-On Teams',
      text: 'Process-driven, detail-obsessed operating style suited to distributed teams working across time zones and client geographies.'
    },
  ]

  const services = [
    {
      number: '01',
      icon: FaUsers,
      title: 'Talent Acquisition & Recruitment',
      text: 'Full-cycle hiring — sourcing, screening, and closing roles efficiently while protecting culture fit and quality of hire.'
    },
    {
      number: '02',
      icon: FaHandshake,
      title: 'Onboarding & Induction Design',
      text: 'Structured onboarding journeys that get new hires productive faster and reinforce employer brand from day one.'
    },
    {
      number: '03',
      icon: FaChartLine,
      title: 'Payroll & Statutory Compliance',
      text: 'Accurate, on-time payroll processing for 250+ employees including service-contract staff, with full statutory compliance.'
    },
    {
      number: '04',
      icon: FaCogs,
      title: 'HRMS Implementation & Digitization',
      text: 'Led ground-up implementation of Zoho People and PagarBook, including geo-fenced attendance and digitized employee records.'
    },
    {
      number: '05',
      icon: FaUserTie,
      title: 'Employee Relations & Engagement',
      text: 'Proactive employee relations management that reduces escalations and strengthens retention across the workforce.'
    },
    {
      number: '06',
      icon: FaClipboardCheck,
      title: 'Performance & Training Management',
      text: 'Performance frameworks and training coordination that keep teams accountable, motivated, and continuously improving.'
    },
  ]

  const experience = [
    {
      title: 'HR Executive',
      company: 'Tinkedge Lab',
      location: 'Bangalore',
      period: 'Mar 2026 — May 2026',
      responsibilities: [
        'Managed end-to-end recruitment, onboarding, and payroll operations',
        'Digitized attendance systems using PagarBook with geo-fencing technology',
        'Streamlined employee records, salary processing, and leave management'
      ]
    },
    {
      title: 'Senior Academic Counsellor & HR Executive',
      company: 'SRS Academy',
      location: 'Bangalore',
      period: 'Mar 2026 — May 2026',
      responsibilities: [
        'Conducted 250+ counselling sessions with parents',
        'Processed 70+ admissions with comprehensive post-admission support',
        'Coordinated HR operations and outreach initiatives'
      ]
    },
    {
      title: 'HR Executive',
      company: 'SCH Infotech Pvt Ltd',
      location: 'Bangalore',
      period: 'Feb 2024 — Jun 2025',
      responsibilities: [
        'Led complete HR operations including recruitment, onboarding, and exits',
        'Implemented Zoho People HRMS for 250+ employees',
        'Managed monthly payroll processing ensuring statutory compliance'
      ]
    },
    {
      title: 'HR Associate → HR Executive',
      company: 'Human Alpha Strategic Solutions & Athulya Senior Care',
      location: 'Bangalore',
      period: 'Feb 2022 — May 2023',
      responsibilities: [
        'Managed recruitment and onboarding across both organizations',
        'Coordinated employee engagement and training programs',
        'Assisted with payroll processing and induction programs'
      ]
    }
  ]

  const earlierCareer = [
    { title: 'Sales Hostess', company: 'Sundaram Motors Pvt Ltd', period: 'Jul 2019 — Jan 2022' },
    { title: 'Senior Customer Relation', company: 'Sundaram Motors Pvt Ltd', period: 'Mar 2017 — Jun 2019' },
    { title: 'Senior Customer Relation Executive – Service', company: 'Bangalore Motors Pvt Ltd', period: 'Sep 2012 — Jun 2016' },
  ]

  const tools = [
    'Zoho People (HRMS)',
    'PagarBook (Payroll & Attendance)',
    'Geo-Fencing Attendance Systems',
    'AI-Enabled Recruiting & HRM Tools',
    'MS Office Suite',
    'Applicant Tracking Systems'
  ]

  const languages = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Malayalam']

  const achievements = [
    { icon: FaAward, stat: '2×', text: 'Employee of the Year (2014 & 2015), Bangalore Motors' },
    { icon: FaChartLine, stat: '250+', text: 'Employees payroll processed monthly, incl. service-contract staff' },
    { icon: FaGlobeAmericas, stat: 'AI', text: 'Trained in AI-enabled tools for recruiting and HRM operations' },
    { icon: FaAward, stat: 'Multiple', text: 'Performance recognition awards, Sundaram Motors' },
    { icon: FaShieldAlt, stat: '↓', text: 'Significantly reduced customer escalation ratio' },
  ]

  const education = [
    { degree: 'MBA', school: 'Annamalai University, Chennai', year: '2017' },
    { degree: 'BBA', school: 'Annamalai University, Chennai', year: '2015' },
  ]

  const sparkles = [
    { top: '12%', left: '18%', size: 4, delay: '0s' },
    { top: '22%', left: '82%', size: 3, delay: '0.6s' },
    { top: '58%', left: '8%', size: 3, delay: '1.2s' },
    { top: '78%', left: '68%', size: 4, delay: '0.3s' },
    { top: '38%', left: '48%', size: 3, delay: '1.8s' },
    { top: '15%', left: '58%', size: 3, delay: '0.9s' },
    { top: '85%', left: '32%', size: 3, delay: '1.5s' },
    { top: '48%', left: '92%', size: 4, delay: '2.1s' },
    { top: '68%', left: '25%', size: 3, delay: '2.4s' },
  ]

  return (
    <div className="min-h-screen bg-[#FCFBF8] overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center">
            <motion.button
              onClick={() => scrollToSection('home')}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center text-gold font-display font-bold text-lg shadow-teal border border-gold/30">
                S
              </span>
              <span className={`text-xl font-display font-bold hidden sm:block transition-colors ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}>
                Suman M
              </span>
            </motion.button>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                    activeSection === id
                      ? (scrolled ? 'text-teal-700' : 'text-gold')
                      : (scrolled ? 'text-gray-600 hover:text-teal-700' : 'text-white/85 hover:text-gold')
                  }`}
                >
                  {label}
                  {activeSection === id && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-teal-500 rounded-full"
                    />
                  )}
                </button>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  scrolled
                    ? 'border-gray-200 text-gray-600 hover:text-white hover:bg-teal-700 hover:border-teal-700'
                    : 'border-white/30 text-white/85 hover:text-teal-900 hover:bg-gold hover:border-gold'
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={17} />
              </a>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-700 shadow-teal hover:shadow-lg transition-all"
              >
                Let's Talk
              </button>
            </div>

            <button
              className={`lg:hidden transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg"
          >
            <div className="px-6 py-4 space-y-1">
              {navItems.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors font-medium"
                >
                  {label}
                </button>
              ))}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors font-medium"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-br from-[#062420] via-[#1c0f33] to-[#03110d]">
        {/* shimmering gold dot field */}
        <div className="absolute inset-0 bg-dot-pattern-gold opacity-60" />
        <div className="absolute inset-0 shine-sweep opacity-50 mix-blend-overlay animate-shimmer" />
        {sparkles.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-gold animate-twinkle pointer-events-none"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              boxShadow: '0 0 10px 3px rgba(212,175,55,0.85)',
              animationDelay: s.delay,
            }}
          />
        ))}

        {/* jewel-tone contrast blobs: royal purple, gold, deep teal */}
        <div className="absolute top-0 -left-24 w-[28rem] h-[28rem] bg-royal/50 rounded-full mix-blend-screen filter blur-3xl opacity-70 animate-blob" />
        <div className="absolute top-32 -right-20 w-[26rem] h-[26rem] bg-gold/40 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-32 left-1/3 w-[30rem] h-[30rem] bg-teal-500/40 rounded-full mix-blend-screen filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '4s' }} />

        <div className="section-container !py-0 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="grid md:grid-cols-[1.15fr_0.85fr] gap-16 items-center"
          >
            <motion.div variants={fadeInUp}>
              <div className="eyebrow mb-6 bg-white/5 border border-gold/30 px-4 py-2 rounded-full w-fit text-gold backdrop-blur-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                Open to International &amp; Remote Engagements
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold leading-[1.05] text-white mb-6">
                Building Reliable
                <br />
                <span className="bg-gradient-to-r from-gold via-gold-light to-teal-300 bg-clip-text text-transparent italic">
                  HR Foundations
                </span>
                <br />
                for Growing Teams
              </h1>

              <p className="text-lg md:text-xl text-teal-100/90 max-w-xl leading-relaxed mb-4">
                I'm <span className="font-semibold text-white">Suman M</span>, a Senior HR Executive with{' '}
                <span className="font-semibold text-gold">4+ years</span> managing end-to-end HR operations —
                recruitment, payroll, HRMS and compliance — for organizations with{' '}
                <span className="font-semibold text-gold">250+ employees</span>.
              </p>
              <p className="text-base md:text-lg text-teal-200/60 max-w-xl leading-relaxed mb-10">
                Partnering with founders and operations leaders — across India and abroad — who need dependable,
                process-driven HR execution without the overhead of a full internal department.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <button onClick={() => scrollToSection('contact')} className="btn-primary group">
                  Start a Conversation
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                </button>
                <button
                  onClick={() => scrollToSection('experience')}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white border border-white/25 hover:border-gold hover:text-gold transition-all"
                >
                  View Track Record
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-sm">
                <a
                  href={`mailto:${EMAIL}`}
                  className="group flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium hover:bg-gold hover:text-teal-900 hover:border-gold transition-all"
                >
                  <FaEnvelope className="text-gold group-hover:text-teal-900 flex-shrink-0 transition-colors" /> {EMAIL}
                </a>
                <a
                  href={`tel:${PHONE.replace(/\s/g, '')}`}
                  className="group flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium hover:bg-gold hover:text-teal-900 hover:border-gold transition-all"
                >
                  <FaPhone className="text-gold group-hover:text-teal-900 flex-shrink-0 transition-colors" /> {PHONE}
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-2 rounded-full text-white font-medium hover:bg-gold hover:text-teal-900 hover:border-gold transition-all"
                >
                  <FaGithub className="text-gold group-hover:text-teal-900 flex-shrink-0 transition-colors" /> github.com/Shalomsuman
                </a>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="relative">
              <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
                {/* rotating gradient halo */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-3 rounded-full bg-[conic-gradient(from_0deg,theme(colors.gold.DEFAULT),theme(colors.royal.light),theme(colors.teal.400),theme(colors.gold.DEFAULT))] opacity-80 blur-[1px]"
                />
                <div className="absolute inset-0 rounded-full ring-4 ring-[#03110d]" />

                <div className="relative w-full h-full rounded-full bg-gradient-to-br from-teal-950 to-[#150826] border-2 border-gold/50 shadow-gold overflow-hidden">
                  {/* fallback shown until /profile.jpg is added */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center p-10">
                    <FaUserCircle className="text-gold/50" size={64} />
                    <p className="text-xs text-teal-200/70 leading-relaxed font-medium">
                      Your photo goes here
                      <br />
                      <code className="text-gold/80">public/profile.jpg</code>
                    </p>
                  </div>
                  <img
                    src="/profile.jpg"
                    alt="Suman M — Senior HR Executive"
                    className="relative w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.opacity = '0' }}
                  />
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute bottom-2 -left-10 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gold/40"
                >
                  <div className="text-2xl font-display font-bold text-teal-700">250+</div>
                  <div className="text-xs text-gray-500 font-medium">Employees Managed</div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-2 -right-10 bg-white rounded-2xl shadow-xl px-5 py-4 border border-gold/40"
                >
                  <div className="text-2xl font-display font-bold text-gold-dark">6</div>
                  <div className="text-xs text-gray-500 font-medium">Languages Spoken</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Differentiators strip */}
      <section className="relative bg-gradient-to-b from-white to-teal-50/40 border-y border-teal-100/60">
        <div className="section-container !py-14 md:!py-16">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {differentiators.map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center text-teal-700 border border-teal-100">
                  <item.icon size={20} />
                </div>
                <h3 className="font-display font-bold text-gray-900 text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-container bg-[#FCFBF8]">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start"
        >
          <motion.div variants={fadeInUp}>
            <span className="eyebrow"><span className="divider-gold" /> About</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 mb-6 text-gray-900 leading-tight">
              A Steady Hand Behind
              <span className="gradient-text italic"> Every Hire</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              I approach HR the way an operator approaches a business function: with ownership, measurable outcomes,
              and zero tolerance for dropped balls. Four years of running the full employee lifecycle has taught me
              that reliable HR infrastructure is a competitive advantage — not overhead.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Before HR, I spent years in customer-facing roles managing relationships and resolving escalations —
              a foundation that now shapes how I handle employee relations, stakeholder communication, and
              service delivery under pressure.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-5">
            {[
              { value: '4+', label: 'Years in HR Operations' },
              { value: '250+', label: 'Employees Managed' },
              { value: '6', label: 'Languages Spoken' },
              { value: '70+', label: 'Admissions Processed' },
            ].map((stat, index) => (
              <div key={index} className="p-7 bg-white rounded-2xl shadow-md card-hover border border-gray-100">
                <div className="text-4xl font-display font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
            <div className="col-span-2 p-7 rounded-2xl bg-gradient-to-br from-teal-700 to-teal-900 text-white shadow-teal">
              <p className="text-teal-50 leading-relaxed">
                <span className="font-display font-bold text-gold text-lg">Career foundation: </span>
                Prior to HR, delivered customer relationship management across two automotive brands — sharpening
                the service-first mindset applied to every employee interaction today.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Services */}
      <section id="services" className="section-container bg-gradient-to-br from-teal-900 via-[#2a1145] to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern-gold opacity-10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-royal/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-gold/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <motion.span variants={fadeInUp} className="eyebrow justify-center text-gold">
              <span className="w-8 h-[2px] bg-gold rounded-full" /> What I Deliver
            </motion.span>
            <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-display font-bold mt-4 mb-5">
              HR Capability, <span className="text-gold italic">On Demand</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-teal-100 leading-relaxed">
              A full suite of HR operations expertise — engaged the way modern, lean organizations prefer:
              focused, accountable, and outcome-driven.
            </motion.p>
          </motion.div>

          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-gold/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    index % 2 === 0
                      ? 'bg-gradient-to-br from-gold to-gold-dark text-teal-900 shadow-gold'
                      : 'bg-gradient-to-br from-royal-light to-royal-dark text-white shadow-royal'
                  }`}>
                    <service.icon size={20} />
                  </div>
                  <span className="font-display text-3xl font-bold text-white/10 group-hover:text-gold/30 transition-colors">
                    {service.number}
                  </span>
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{service.title}</h3>
                <p className="text-teal-100/80 text-sm leading-relaxed">{service.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section-container bg-[#FCFBF8]">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow justify-center"><span className="divider-gold" /> Career Journey</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-gray-900">
              Professional <span className="gradient-text italic">Experience</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[15px] md:left-1/2 top-2 bottom-2 w-[2px] bg-gradient-to-b from-royal via-gold to-teal-600 md:-translate-x-1/2" />

            <div className="space-y-10">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={`relative pl-12 md:pl-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'
                  }`}
                >
                  <span className={`absolute left-0 md:left-auto top-1.5 w-8 h-8 rounded-full bg-white border-4 border-teal-600 shadow-md flex items-center justify-center z-10 ${
                    index % 2 === 0 ? 'md:-right-4' : 'md:-left-4'
                  }`}>
                    <FaBriefcase className="text-teal-600" size={11} />
                  </span>

                  <div className="bg-white rounded-2xl p-7 shadow-lg card-hover border border-gray-100">
                    <span className="inline-block px-3 py-1 mb-3 bg-gold-light text-gold-dark rounded-full text-xs font-bold tracking-wide">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-display font-bold text-gray-900 mb-1">{exp.title}</h3>
                    <p className="text-teal-700 font-semibold mb-1">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-4">{exp.location}</p>
                    <ul className={`space-y-2 text-sm text-gray-600 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className={`flex items-start gap-2 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                          <FaChevronRight className="text-gold mt-1 flex-shrink-0" size={10} />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div variants={fadeInUp} className="max-w-4xl mx-auto mt-14 p-8 rounded-2xl bg-teal-50/70 border border-teal-100">
            <h3 className="font-display font-bold text-lg text-gray-900 mb-4">Earlier Career — Customer Relations</h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {earlierCareer.map((role, index) => (
                <div key={index} className="text-sm">
                  <p className="font-semibold text-gray-800">{role.title}</p>
                  <p className="text-teal-700">{role.company}</p>
                  <p className="text-gray-400">{role.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Expertise (Tools + Languages) */}
      <section id="expertise" className="section-container bg-gradient-to-br from-teal-50/60 to-gold-light/10">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow justify-center"><span className="divider-gold" /> Tools of the Trade</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-gray-900">
              Technology <span className="gradient-text italic">Stack</span>
            </h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto mb-20">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -3 }}
                className="px-6 py-3 bg-white border border-teal-200 text-teal-800 rounded-full font-semibold shadow-sm hover:shadow-lg hover:border-teal-500 transition-all"
              >
                {tool}
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 text-gray-900">
              <FaLanguage className="inline mr-3 text-gold-dark" />
              Fluent Across <span className="gradient-text italic">6 Languages</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="px-5 py-2.5 bg-white text-gray-800 rounded-full font-medium shadow-md border border-gold-light"
                >
                  {lang}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="section-container bg-[#FCFBF8]">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow justify-center"><span className="divider-gold" /> Track Record</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4 text-gray-900">
              Key <span className="gradient-text italic">Achievements</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative bg-white rounded-2xl p-7 shadow-lg card-hover border border-gray-100 overflow-hidden"
              >
                <div className={`absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl ${
                  index % 2 === 0 ? 'bg-gold-light/40' : 'bg-royal/15'
                }`} />
                <achievement.icon className={`text-2xl mb-4 relative z-10 ${index % 2 === 0 ? 'text-gold-dark' : 'text-royal'}`} />
                <div className="text-3xl font-display font-bold text-teal-700 mb-2 relative z-10">{achievement.stat}</div>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10">{achievement.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeInUp} className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-center mb-8 text-gray-900">
              <FaGraduationCap className="inline mr-3 text-teal-600" />
              <span className="gradient-text italic">Education</span>
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {education.map((edu, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
                  <h4 className="text-lg font-display font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-teal-700 font-semibold text-sm mt-1">{edu.school}</p>
                  <p className="text-gray-400 text-sm">{edu.year}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative section-container bg-gradient-to-br from-teal-900 via-[#22103d] to-gray-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-dot-pattern-gold opacity-[0.07]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal/25 rounded-full blur-3xl" />

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative z-10 text-center max-w-3xl mx-auto"
        >
          <motion.span variants={fadeInUp} className="eyebrow justify-center text-gold mb-4">
            <span className="w-8 h-[2px] bg-gold rounded-full" /> Let's Work Together
          </motion.span>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-display font-bold mb-6">
            Ready to Strengthen
            <br />
            Your <span className="text-gold italic">HR Foundation?</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-teal-100 mb-12 max-w-xl mx-auto">
            Whether you're scaling a team in the US, building remotely, or need reliable HR operations
            support — I'd love to hear about it.
          </motion.p>

          <motion.div variants={fadeInUp} className="mb-14">
            <a href={`mailto:${EMAIL}`} className="btn-primary !bg-gold !bg-none !text-teal-900 !shadow-gold text-lg !px-10 !py-5">
              <FaEnvelope /> Email Me Directly
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid sm:grid-cols-3 gap-5">
            <a href={`mailto:${EMAIL}`} className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-gold/40 transition-all group">
              <FaEnvelope className="text-2xl text-gold group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-xs text-teal-200 uppercase tracking-wide mb-1">Email</div>
                <div className="text-sm font-semibold break-all">{EMAIL}</div>
              </div>
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-gold/40 transition-all group">
              <FaPhone className="text-2xl text-gold group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-xs text-teal-200 uppercase tracking-wide mb-1">Phone</div>
                <div className="text-sm font-semibold">{PHONE}</div>
              </div>
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-gold/40 transition-all group">
              <FaGithub className="text-2xl text-gold group-hover:scale-110 transition-transform" />
              <div>
                <div className="text-xs text-teal-200 uppercase tracking-wide mb-1">GitHub</div>
                <div className="text-sm font-semibold flex items-center gap-1">
                  Shalomsuman <FaExternalLinkAlt size={10} />
                </div>
              </div>
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-10 flex items-center justify-center gap-2 text-teal-200 text-sm">
            <FaMapMarkerAlt className="text-gold" /> Based in Bangalore, Karnataka, India — Available Worldwide, Remote
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center text-gold font-display font-bold">
              S
            </span>
            <div>
              <p className="text-white font-semibold">Suman M</p>
              <p className="text-xs text-gray-500">Senior HR Executive &amp; HR Operations Consultant</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href={`mailto:${EMAIL}`} aria-label="Email" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
              <FaEnvelope size={14} />
            </a>
            <a href={`tel:${PHONE.replace(/\s/g, '')}`} aria-label="Phone" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
              <FaPhone size={14} />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-gold hover:text-gold transition-colors">
              <FaGithub size={14} />
            </a>
          </div>

          <p className="text-xs text-gray-600">© 2026 Suman M. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
