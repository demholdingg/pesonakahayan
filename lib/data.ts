export interface BusinessPillar {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  iconName: "Zap" | "Truck" | "Network";
  badge: string;
  heroImage: string;
  stats: {
    value: string;
    label: string;
  }[];
  capabilities: {
    title: string;
    description: string;
    details: string[];
  }[];
  solutions: string[];
  equipmentList?: string[];
  targetSectors: string[];
}

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    id: "pltd-power-generation",
    slug: "pltd-power-generation",
    title: "PLTD Power Generation",
    shortTitle: "Power Generation",
    tagline: "Diesel Power Plants & Reliable Multi-Megawatt Industrial Energy Solutions",
    description:
      "Integrated diesel power generation solutions for mining operations, smelters, manufacturing facilities, and remote regional electrification built to rigorous reliability standards.",
    longDescription:
      "The PLTD Power Generation division of PT Teknika Pesona Kahayan delivers turnkey power solutions spanning plant engineering, procurement, and construction (EPC), multi-megawatt diesel genset supply, long-term operation and maintenance (O&M), and Independent Power Producer (IPP) / Power Purchase Agreement (PPA) schemes. We ensure resilient, fuel-optimized, and continuous power supply for critical industrial assets across Indonesia.",
    iconName: "Zap",
    badge: "Power & Energy Pillar",
    heroImage: "/images/hero/hero-genset.jpg",
    stats: [
      { value: "50+ MW", label: "Total Installed & Managed Capacity" },
      { value: "99.8%", label: "Target Availability Factor" },
      { value: "24/7", label: "Continuous Monitoring & Rapid Response" },
      { value: "ISO Certified", label: "Certified Quality & HSE Standards" },
    ],
    capabilities: [
      {
        title: "Multi-Megawatt Power Plant Generation",
        description:
          "Engineering, construction, and full management of diesel power plants for public utilities, remote industrial estates, mining operations, and palm oil mills.",
        details: [
          "Power Purchase Agreement (PPA) & Independent Power Producer (IPP) schemes",
          "Multi-Unit PLTD Construction & Commissioning",
          "Synchronizing Switchboards & Automated Load Sharing Systems",
          "Step-Up Transformers & Medium Voltage Substation Integration",
        ],
      },
      {
        title: "High-Capacity Diesel Genset Supply & Rental",
        description:
          "Supply and deployment of silent canopy and open-type industrial diesel generators ranging from 250 kVA up to 2,500+ kVA from top global engine manufacturers.",
        details: [
          "Perkins, Cummins, MTU, Caterpillar, and Mitsubishi engines",
          "Acoustic Silent Canopies engineered for low noise (<70 dB at 7m)",
          "Daily fuel storage tanks & automated fuel transfer systems",
          "Advanced digital control & synchronizing panels (Deepsea / ComAp)",
        ],
      },
      {
        title: "Comprehensive Operation & Maintenance (O&M)",
        description:
          "Full operational staffing and engineering management backed by performance guarantees, scheduled preventive servicing, overhauls, and genuine OEM parts.",
        details: [
          "Certified electrical engineers & licensed operators",
          "Predictive, preventive, and corrective maintenance programs",
          "Top overhaul, major overhaul, and alternator rewinding capabilities",
          "Regular oil analysis and emission compliance monitoring",
        ],
      },
      {
        title: "Mini-Grid & Hybrid Power Integration",
        description:
          "Development of self-sustained mini-grids and hybrid power integrations (diesel-solar PV) for improved fuel efficiency and eco-friendly remote energy.",
        details: [
          "Microgrid synchronization and smart load controllers",
          "Island-mode solutions for off-grid operations",
          "Remote fuel consumption telemetry and digital monitoring",
          "Strict adherence to environmental and noise regulations",
        ],
      },
    ],
    solutions: [
      "Mining & Smelter Captive Power Plants",
      "Palm Oil Mill (PKS) Independent Energy Supply",
      "Regional Utility Grid Support in Remote Areas",
      "Emergency Standby & Mission-Critical Facility Backup",
      "Temporary High-Voltage Power for Large Civil Infrastructure",
    ],
    equipmentList: [
      "Perkins Silent Generator Sets (250 - 2,000 kVA)",
      "Cummins Heavy-Duty Power Generators (500 - 2,500 kVA)",
      "MTU High-Performance Continuous Power Systems",
      "Kubota Compact Industrial Power Units",
      "Medium Voltage Synchronizing Panels & Switchboards",
      "Trailer-Mounted Mobile Power Station Units",
    ],
    targetSectors: [
      "Mining & Mineral Processing",
      "Plantations & Agro-Industrial Mills",
      "National & Regional Electrical Utilities",
      "Heavy Manufacturing & Smelters",
      "Port & Dam Infrastructure Construction",
    ],
  },
  {
    id: "material-equipment-handling",
    slug: "material-equipment-handling",
    title: "Material Equipment Handling",
    shortTitle: "Equipment Handling",
    tagline: "Unit Supply, Fleet Rental & Integrated Industrial Material Handling",
    description:
      "Comprehensive fleet of material handling machinery, heavy earthmoving equipment, crane systems, and specialized industrial attachments to optimize logistics, warehousing, and construction.",
    longDescription:
      "The Material Equipment Handling division delivers total logistics and heavy equipment solutions through new unit supply, flexible short- and long-term fleet rentals, Full Maintenance Contracts (FMC), and certified operators. We partner with world-renowned OEMs to provide maximum machine reliability and minimal downtime.",
    iconName: "Truck",
    badge: "Fleet & Logistics Pillar",
    heroImage: "/images/hero/hero-material-handling.jpg",
    stats: [
      { value: "500+", label: "Active Machinery & Fleet Units" },
      { value: "100%", label: "Licensed SIO Operators & Certified Units" },
      { value: "98.5%", label: "Fleet Operational Readiness Rate" },
      { value: "Nationwide", label: "Service Network & Spare Parts Depots" },
    ],
    capabilities: [
      {
        title: "Material Handling & Warehouse Equipment",
        description:
          "Diesel forklifts, lithium-ion electric forklifts, reach trucks, pallet movers, and stackers designed for maximum throughput in modern warehousing.",
        details: [
          "Diesel Forklifts from 2.5 Tons up to 16 Tons capacity",
          "Eco-friendly Lithium-ion Electric Counterbalance Forklifts",
          "High-Reach Trucks for high-density racking up to 12.5 meters",
          "Electric Pallet Movers & Order Pickers for e-commerce logistics",
        ],
      },
      {
        title: "Heavy Duty Machinery & Earthmoving Fleet",
        description:
          "Heavy-duty excavators, wheel loaders, bulldozers, and motor graders built for civil construction, mining infrastructure, and agriculture.",
        details: [
          "Excavators in small, medium, and heavy tonnage classes",
          "Wheel Loaders with large bucket capacities (1.8 - 3.5 m³)",
          "Bulldozers, Motor Graders, and Vibratory Soil Compactors",
          "Crawler Dumpers engineered for peatland and wetland transport",
        ],
      },
      {
        title: "Aerial Work Platforms (AWP) & Crane Systems",
        description:
          "Certified height access solutions and heavy lifting cranes compliant with international safety standards.",
        details: [
          "Articulated & Telescopic Boom Lifts reaching up to 40m+",
          "Electric & Rough-Terrain Scissor Lifts for plant maintenance",
          "Mobile Cranes & Truck-Mounted Cranes for heavy lifting",
          "Tower Cranes & Overhead Workshop Crane Systems",
        ],
      },
      {
        title: "Specialized Industrial Attachments",
        description:
          "Custom attachments for handling specific industrial materials with maximum precision and zero product damage.",
        details: [
          "Paper Roll Clamps & Bale Clamps for paper and textile mills",
          "Side Shifters, Fork Positioners, and Hinged Forks",
          "Drum Clamps, Tire Handlers, and Forklift Buckets",
          "Safety Personnel Man Cages & Jib Boom Attachments",
        ],
      },
    ],
    solutions: [
      "Long-Term Fleet Rental with Dedicated On-Site Support",
      "Full Maintenance Contracts (FMC) with Rapid Backup Units",
      "Procurement of Brand-New & Refurbished Certified Units",
      "Provision of Licensed Heavy Equipment Operators (SIO Kemnaker)",
      "Integrated Warehouse & Distribution Center Fleet Management",
    ],
    equipmentList: [
      "LiuGong & Zoomlion Heavy Wheel Loaders",
      "Develon, Kobelco & Zoomlion Hydraulic Excavators",
      "Heli & EP Equipment Forklifts (Diesel & Lithium Electric)",
      "Zoomlion Boom Lifts & Electric Scissor Lifts",
      "Nichiyu & EP Electric Reach Trucks",
      "Caterpillar Bulldozers & Motor Graders",
    ],
    targetSectors: [
      "Logistics Warehouses & Supply Chain Hubs",
      "Manufacturing, Food & Beverage, and Chemicals",
      "Civil Construction, Toll Roads & Seaports",
      "Oil Palm Plantations & Forestry",
      "Steel, Paper & Heavy Industrial Facilities",
    ],
  },
  {
    id: "ftth-telecom-infrastructure",
    slug: "ftth-telecom-infrastructure",
    title: "FTTH Telecom Infrastructure",
    shortTitle: "FTTH Telecom",
    tagline: "End-to-End Fiber Optic Network Engineering, Deployment & Maintenance",
    description:
      "Comprehensive turnkey fiber optic infrastructure services (FTTH/FTTx) for telecom carriers, national ISPs, residential developers, and modern industrial estates.",
    longDescription:
      "The FTTH Telecom Infrastructure division delivers full-lifecycle telecommunication network deployment: route survey and Right of Way (ROW) permitting, pole installation and civil works, aerial and underground cable rollout (subduct/microtrenching/HDD), passive ODC/ODP installations, precision fusion splicing, two-way OTDR testing, and 24/7 emergency restoration services.",
    iconName: "Network",
    badge: "Digital Telecom Pillar",
    heroImage: "/images/hero/hero-services.jpg",
    stats: [
      { value: "1,500+ KM", label: "Fiber Optic Cables Deployed" },
      { value: "50,000+", label: "Homepass & Home Connected Ports" },
      { value: "< 0.05 dB", label: "Average Splicing Loss Standard" },
      { value: "24/7", label: "SLA Emergency Restoration Team" },
    ],
    capabilities: [
      {
        title: "Network Survey, Planning & Permitting (ROW)",
        description:
          "Detailed geospatial surveys, GIS-based FTTx topology design, Bill of Quantities (BOQ), and Right of Way (ROW) permit processing.",
        details: [
          "High-Level Design (HLD) & Low-Level Design (LLD) FTTx Architecture",
          "Existing pole route surveys, underground utility tracing, and ODP mapping",
          "Permitting with regional government agencies, public works, and estate managers",
          "Carrier-grade As-Built Drawing (ABD) documentation and GIS tagging",
        ],
      },
      {
        title: "Civil Works & Outside Plant (OSP) Deployment",
        description:
          "Physical construction of aerial and underground telecommunications corridors engineered for long-term climate resilience.",
        details: [
          "Installation of 7m and 9m steel and concrete poles with guy wire supports",
          "Aerial fiber optic cable stringing (ADSS / Figure-8) with carrier-grade hardware",
          "Underground deployment via manual trenching, microtrenching, and HDD boring",
          "Installation of HDPE subducts, prefabricated handholes, and manholes",
        ],
      },
      {
        title: "Passive Equipment Installation & Precision Splicing",
        description:
          "Deployment of optical distribution enclosures and core-to-core fiber fusion splicing utilizing calibrated high-precision equipment.",
        details: [
          "Installation & termination of Optical Distribution Cabinets (ODC 144 / 288 core)",
          "Mounting & configuration of Optical Distribution Points (ODP pole & wall mount)",
          "Low-loss fusion splicing with calibrated automated machines",
          "Waterproof optical joint closure installations (dome and in-line types)",
        ],
      },
      {
        title: "Testing, Commissioning & Managed Maintenance",
        description:
          "Rigorous end-to-end quality validation with calibrated instruments, coupled with rapid-response corrective maintenance under strict SLAs.",
        details: [
          "Bi-directional Optical Time-Domain Reflectometer (OTDR) measurement",
          "Optical Power Meter (OPM) & Optical Loss Test Set (OLTS) validation",
          "Home Pass to Home Connected fulfillment (drop cable, rosette, and ONT)",
          "24/7 emergency fiber-cut restoration and network maintenance",
        ],
      },
    ],
    solutions: [
      "Large-Scale FTTH Rollouts for Mobile & Fixed-Broadband Telecom Operators",
      "Last-Mile Optical Fiber Connections for Internet Service Providers (ISPs)",
      "FTTx Connectivity Infrastructure for Residential Housing & Smart Townships",
      "High-Capacity Backbone & Dedicated Fiber for Modern Industrial Parks",
      "Municipal Smart City Backbone & CCTV Surveillance Networks",
    ],
    equipmentList: [
      "Fujikura & Sumitomo High-Precision Core-Alignment Fusion Splicers",
      "Exfo & Anritsu OTDR Units with Certified Calibration Standards",
      "Optical Power Meters (OPM) & Visual Fault Locators (VFL)",
      "Aerial Bucket Trucks & Pole Transportation Logistics",
      "Horizontal Directional Drilling (HDD) & Microtrenching Machinery",
      "Certified ODC Cabinets, ODP Enclosures, and Waterproof Joint Closures",
    ],
    targetSectors: [
      "Cellular & Fixed-Broadband Telecommunications Carriers",
      "National & Regional Internet Service Providers (ISPs)",
      "Residential Real Estate Developers & Smart Cities",
      "Industrial Estate & Free Trade Zone Managers",
      "Government Agencies & Public Infrastructure Projects",
    ],
  },
];

export const COMPANY_STATS = [
  {
    number: "3",
    label: "Core Business Pillars",
    description: "PLTD Power Generation, Material Handling, FTTH Telecom",
  },
  {
    number: "50+ MW",
    label: "Managed Power Capacity",
    description: "Continuous and reliable energy for industrial and utility needs",
  },
  {
    number: "500+",
    label: "Heavy Equipment & Fleet Units",
    description: "High operational readiness for logistics and construction",
  },
  {
    number: "1,500+ KM",
    label: "Fiber Optic Deployed",
    description: "Accelerating high-speed digital connectivity nationwide",
  },
  {
    number: "3 ISO",
    label: "Quality Certifications",
    description: "ISO 9001:2015, ISO 14001:2015, and ISO 27001:2022",
  },
];

export const WHY_CHOOSE_US = [
  {
    title: "Integrated Three-Pillar Synergy",
    description:
      "A trusted, single-source partner delivering turnkey solutions across captive power generation (PLTD), heavy fleet management (Material Handling), and digital connectivity (FTTH).",
  },
  {
    title: "HSE Compliance & International Standards",
    description:
      "Committed to zero-accident operations with rigorous health and safety (K3/HSE) protocols, backed by ISO 9001 (Quality), ISO 14001 (Environment), and ISO 27001 (Information Security).",
  },
  {
    title: "Certified Technicians & Licensed Operators",
    description:
      "Staffed by seasoned engineers, certified optical technicians, and licensed equipment operators (SIO/SILO) ensuring technical accuracy and operational reliability.",
  },
  {
    title: "Rapid Response & 24/7 Field Support",
    description:
      "Dedicated emergency response and continuous field maintenance teams standing by 24/7 to minimize downtime for mission-critical operations.",
  },
];
