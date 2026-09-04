// SRS ARCHITECTS - Project Dataset & Firm Information
const siteData = {
  brand: {
    name: "SRS ARCHITECTS",
    tagline: "Innovative Architectural Design, Urban Planning & Luxury Living",
    rating: "4.7",
    reviewCount: "11",
    googleVerified: true,
    stats: [
      { number: "15+", label: "Years of Design Excellence" },
      { number: "250+", label: "Delivered Architectural Projects" },
      { number: "12M+", label: "Sq. Ft. Designed & Built" },
      { number: "4.7★", label: "Client Satisfaction Rating" }
    ]
  },
  
  heroSlides: [
    {
      id: "slide-1",
      title: "The Grand Royal Estate & Luxury Pavilion",
      subtitle: "Monumental Neoclassical Facade with Grand Chandelier Portico & Landscaped Driveway",
      category: "Luxury Architecture & Hospitality",
      location: "Indirapuram, NCR",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85",
      badge: "SRS Signature Landmark"
    },
    {
      id: "slide-2",
      title: "Biophilic Atrium & Healthcare Campus",
      subtitle: "Sustainable Naturally Ventilated Healing Courtyards with Circular Oculus",
      category: "Healthcare & Institutional",
      location: "Delhi NCR",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85",
      badge: "Green Architecture Award"
    },
    {
      id: "slide-3",
      title: "Elevated Ecological Canopy Promenade",
      subtitle: "Nature Boardwalk Integrating Dense Urban Green Buffer",
      category: "Landscape & Public Realm",
      location: "NCR Region",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=85",
      badge: "Urban Ecological Excellence"
    },
    {
      id: "slide-4",
      title: "Ultra-Modern High-Rise Sky Residences",
      subtitle: "Bioclimatic Double-Height Sky Terraces with Panoramic City Views",
      category: "Residential Architecture",
      location: "Ghaziabad & Noida",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85",
      badge: "Luxury Residential Project"
    }
  ],

  typologies: [
    { id: "residential", name: "Residential", count: 48 },
    { id: "commercial", name: "Commercial", count: 32 },
    { id: "hospitality", name: "Hospitality & Banquets", count: 26 },
    { id: "healthcare", name: "Healthcare", count: 18 },
    { id: "landscape", name: "Landscape", count: 24 },
    { id: "urban-planning", name: "Urban Planning", count: 15 },
    { id: "educational", name: "Educational", count: 20 },
    { id: "culture", name: "Culture & Civic", count: 12 }
  ],

  projects: [
    {
      id: "grand-royal-pavilion",
      title: "The Grand Royal Estate & Banquet Pavilion",
      typology: "hospitality",
      typologyName: "Hospitality & Banquets",
      location: "Indirapuram, Ghaziabad",
      year: "2024",
      area: "120,000 Sq. Ft.",
      client: "Royal Celebrations Hospitality",
      status: "Completed",
      thumbnail: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "A monumental neoclassical architecture estate crafted with double-height classical colonnades, grand crystal chandelier portico, illuminated cobblestone vehicular drop-off, and expansive landscaped party lawns.",
      highlights: [
        "Grand neoclassical portico with majestic colonnades",
        "Dedicated VIP drop-off zone & illuminated water cascade",
        "Acoustically tuned grand ballroom holding 2,500+ guests",
        "Energy-efficient warm facade architectural lighting"
      ]
    },
    {
      id: "indirapuram-luxury-villas",
      title: "The Crest Luxury Residences",
      typology: "residential",
      typologyName: "Residential",
      location: "Shakti Khand, Indirapuram",
      year: "2023",
      area: "185,000 Sq. Ft.",
      client: "SRS Premium Living",
      status: "Completed",
      thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Bespoke contemporary multi-storey residential enclave with cantilevered balconies, sun-shading louvers, Italian marble finishes, and private terrace gardens.",
      highlights: [
        "Floor-to-ceiling sound-insulated double glazing",
        "Rooftop infinity swimming pool & yoga deck",
        "Smart home automation & zero-waste greywater recycling",
        "Earthquake-resistant RCC structural engineering"
      ]
    },
    {
      id: "one-square-hub",
      title: "One Square Commercial Corporate Suites",
      typology: "commercial",
      typologyName: "Commercial",
      location: "Shakti Khand III, Indirapuram, Ghaziabad",
      year: "2023",
      area: "240,000 Sq. Ft.",
      client: "One Square Developments",
      status: "Completed",
      thumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "A state-of-the-art commercial business center featuring expansive double-height retail promenades, flexible Grade-A office layouts, multi-tier automated parking, and high-speed energy-regenerative elevators.",
      highlights: [
        "High-performance low-E glass facade",
        "Integrated central air-purification and VRV climate systems",
        "Dynamic LED architectural facade lighting",
        "Multi-level retail piazza and cafe open terraces"
      ]
    },
    {
      id: "srs-biophilic-hospital",
      title: "Apex Multi-Specialty Healthcare & Wellness Center",
      typology: "healthcare",
      typologyName: "Healthcare",
      location: "Ghaziabad, Uttar Pradesh",
      year: "2022",
      area: "320,000 Sq. Ft.",
      client: "Apex Healthcare Trust",
      status: "Completed",
      thumbnail: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=85",
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "A 450-bed advanced hospital designed with human-centric circadian illumination, naturally ventilated landscaped healing atriums, and clean sterile corridor circulation.",
      highlights: [
        "Centrally ventilated healing courtyards reducing HVAC load",
        "Advanced surgical modular suites with laminar airflow",
        "100% solar rooftop captive power integration",
        "Zero-discharge on-site biological effluent treatment"
      ]
    },
    {
      id: "indirapuram-green-walkway",
      title: "Eco-Park Elevated Nature Canopy Walkway",
      typology: "landscape",
      typologyName: "Landscape",
      location: "NCR Region",
      year: "2023",
      area: "1.8 km Length",
      client: "Urban Development Authority",
      status: "Completed",
      thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Sustainable elevated pedestrian boardwalk weaving through lush urban tree canopies with integrated solar pathway lights, universal disability access, and bird-watching decks.",
      highlights: [
        "Zero tree-felling modular steel cantilever structure",
        "Recycled composite timber decking panels",
        "Integrated solar photovoltaic ambient lighting"
      ]
    },
    {
      id: "ncr-masterplan",
      title: "Smart Urban Township Masterplan",
      typology: "urban-planning",
      typologyName: "Urban Planning",
      location: "Delhi-NCR Expressway",
      year: "2024",
      area: "120 Acres",
      client: "State Infrastructure Board",
      status: "Under Construction",
      thumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Holistic 15-minute smart township designed with interconnected pedestrian green corridors, sponge lakes for stormwater retention, and mixed-use transit-oriented zones.",
      highlights: [
        "15-Minute walkable urban zoning",
        "Sponge City rainwater harvesting lakes",
        "Dedicated cycle tracks and electric vehicle charging hubs"
      ]
    },
    {
      id: "academic-institution-quad",
      title: "Modern Heritage Academic Campus",
      typology: "educational",
      typologyName: "Educational",
      location: "Greater Noida, NCR",
      year: "2022",
      area: "400,000 Sq. Ft.",
      client: "Higher Education Foundation",
      status: "Completed",
      thumbnail: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Modern academic campus featuring open stepwell courtyards, jaali shading screens, collaborative outdoor amphitheaters, and passive geothermal cooling.",
      highlights: [
        "Passive geothermal earth-air cooling system",
        "Terracotta jaali facade for solar thermal reduction",
        "2,000-capacity central bioclimatic amphitheater"
      ]
    },
    {
      id: "civic-culture-center",
      title: "Civic Arts & Cultural Exhibition Pavilion",
      typology: "culture",
      typologyName: "Culture & Civic",
      location: "Ghaziabad, UP",
      year: "2023",
      area: "150,000 Sq. Ft.",
      client: "Cultural Heritage Trust",
      status: "Completed",
      thumbnail: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?auto=format&fit=crop&w=1400&q=85"
      ],
      description: "Civic monument blending modern sculptural sandstone geometry with state-of-the-art acoustic concert halls and open public art plazas.",
      highlights: [
        "Acoustically engineered 1,000-seat auditorium",
        "Sandstone geometric facade with passive cooling water body",
        "Open-air public sculpture promenade"
      ]
    }
  ],

  scrumProcess: {
    title: "SRS SCRUM",
    tagline: "The World's First Agile Architectural Delivery Framework",
    shortDescription: "We are the first architectural firm in the world to follow a unique SCRUM process to design and deliver architectural designs efficiently and quickly, reducing costs and improving quality. This approach has set us apart as a top architecture practice.",
    phases: [
      {
        step: "01",
        title: "Sprint Discovery & Brief Alignment",
        duration: "Week 1 - 2",
        description: "Intensive stakeholder workshops that bring clients, users, engineers, and financial planners together. We define spatial matrices, site microclimate data, and project vision in rapid 2-week iterations.",
        keyDeliverables: ["Functional Spatial Matrix", "Biophilic Microclimate Study", "Agile Project Backlog"]
      },
      {
        step: "02",
        title: "Iterative Concept & 3D Prototyping",
        duration: "Week 3 - 4",
        description: "Rapid architectural massing, 3D volumetric prototyping, solar daylight simulations, and wind studies. Clients experience live design sprints with real-time options and decision matrices.",
        keyDeliverables: ["Parametric 3D Massing", "Sun-Path & Wind Simulations", "Interactive Sprint Review"]
      },
      {
        step: "03",
        title: "Co-Creation & BIM Level 3 Integration",
        duration: "Week 5 - 8",
        description: "Full coordination between Structural, MEP, Landscape, and Facade consultants on an integrated cloud BIM model, resolving clash detections before physical construction begins.",
        keyDeliverables: ["Zero-Clash 3D BIM Model", "Accurate Bill of Quantities (BOQ)", "Energy Optimization Report"]
      },
      {
        step: "04",
        title: "Value Engineering & Cost Optimization",
        duration: "Week 9 - 10",
        description: "Rigorous material selection, local sourcing strategy, and structural optimization to eliminate waste, saving 15% to 25% in construction budget without compromising architectural integrity.",
        keyDeliverables: ["Value Engineering Audit", "Sustainable Material Palette", "Execution & Tender Package"]
      },
      {
        step: "05",
        title: "Agile Site Execution & Sprint Audits",
        duration: "Construction Phase",
        description: "Regular bi-weekly on-site Sprint Reviews, quality benchmark checks, and continuous client updates to deliver on-time, on-budget execution.",
        keyDeliverables: ["Milestone Quality Audits", "Drone Site Progress Scans", "As-Built BIM Digital Twin"]
      }
    ]
  },

  leadership: [
    {
      name: "Principal Architect & Founder",
      role: "Founder & Chief Architect",
      experience: "15+ Years in Architecture & Design",
      bio: "Leading SRS ARCHITECTS with a passion for iconic neoclassical estates, sustainable urban masterplans, and cutting-edge biophilic design.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Associate Director",
      role: "Director of Residential & Hospitality",
      experience: "12+ Years in Architecture",
      bio: "Specialist in luxury banquet pavilions, premium residential villas, and bespoke interior space planning.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Chief Urban Planner & BIM Lead",
      role: "Director &bull; Urban Design & BIM",
      experience: "10+ Years in Architecture",
      bio: "Expert in transit-oriented developments, parametric modeling, and coordinated cloud BIM execution.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
    },
    {
      name: "Senior Project Architect",
      role: "Lead &bull; Commercial & Healthcare",
      experience: "9+ Years in Architecture",
      bio: "Dedicated to energy-efficient commercial corporate towers and sustainable healthcare architecture.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80"
    }
  ],

  awards: [
    {
      year: "2024",
      title: "Top Rated Architecture Firm in Indirapuram",
      project: "Google Verified 4.7 ★★★★★ Rating (11 Reviews)",
      category: "Excellence in Architectural Practice"
    },
    {
      year: "2023",
      title: "Excellence in Luxury Banquet & Estate Design",
      project: "The Grand Royal Pavilion",
      category: "Hospitality Architecture Award"
    },
    {
      year: "2023",
      title: "Sustainable Urban Design Recognition",
      project: "One Square Commercial Suites",
      category: "Commercial Architecture"
    },
    {
      year: "2022",
      title: "Best Luxury Residential Architecture",
      project: "The Crest Luxury Residences",
      category: "Residential Design Award"
    }
  ],

  mediaArticles: [
    {
      publisher: "Architecture & Design",
      title: "Crafting Neoclassical Grandeur: The Grand Royal Estate in Indirapuram",
      date: "January 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      publisher: "Architectural Practice Review",
      title: "How SRS ARCHITECTS Accelerates Delivery with Agile SCRUM Sprints",
      date: "September 2023",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
    },
    {
      publisher: "Urban Living Digest",
      title: "Designing Smart Commercial Hubs: The One Square Architecture Story",
      date: "April 2023",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
    }
  ],

  offices: [
    {
      id: "indirapuram-hq",
      city: "Indirapuram, Ghaziabad (Head Office)",
      building: "Located in: One Square",
      address: "Office No. 10F, First Floor, One Square, 68/1, Shakti Khand III, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
      phone: "073034 15617",
      phoneIntl: "+91 73034 15617",
      whatsapp: "917303415617",
      email: "contact@srsarchitects.in",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM (Open · Closes 6:30 pm)",
      ratingText: "4.7 ★★★★★ (11 Google Reviews)",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.834415865917!2d77.3697!3d28.6347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf00000000001%3A0x0!2sOne%20Square%2C%20Shakti%20Khand%20III%2C%20Indirapuram%2C%20Ghaziabad%2C%20Uttar%20Pradesh%20201014!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
    },
    {
      id: "noida-studio",
      city: "Noida Studio (NCR)",
      building: "Corporate Hub",
      address: "Sector 62, Noida, Uttar Pradesh 201309",
      phone: "073034 15617",
      phoneIntl: "+91 73034 15617",
      whatsapp: "917303415617",
      email: "noida@srsarchitects.in",
      hours: "Mon - Sat: 9:30 AM - 6:30 PM",
      ratingText: "4.7 ★★★★★ (Google Verified)",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.36!3d28.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzEyLjAiTiA3N8KwMjEnMzYuMCJF!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
    }
  ]
};
