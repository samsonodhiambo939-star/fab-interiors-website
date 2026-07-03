export interface PortfolioItem {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  images: string[];
  timeline: string;
  scope: string[];
  location: string;
  size: string;
  year: string;
  beforeImage?: string;
  afterImage?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "residential-project-a",
    title: "Residential Project A",
    category: "Residential",
    description:
      "Modern 5-bedroom residence with open-plan living, premium finishes, and landscaped gardens.",
    longDescription:
      "A stunning 5-bedroom modern residence designed for contemporary family living. The open-plan layout connects living, dining, and kitchen areas seamlessly, while floor-to-ceiling windows flood the interior with natural light. Premium finishes include Italian marble flooring, custom joinery, and a state-of-the-art home automation system. The landscaped garden features an infinity pool, outdoor kitchen, and native plantings.",
    image: "/images/project-01.jpg",
    images: ["/images/project-01.jpg"],
    timeline: "14 months",
    scope: [
      "Architecture & Design",
      "Construction",
      "Interior Design",
      "Landscaping",
      "MEP Installation",
      "Painting & Finishing",
    ],
    location: "Nairobi, Kenya",
    size: "450 sqm",
    year: "2024",
  },
  {
    slug: "commercial-complex",
    title: "Commercial Complex",
    category: "Commercial",
    description:
      "Multi-story commercial building with contemporary glass facade and modern amenities.",
    longDescription:
      "A landmark multi-story commercial development featuring a striking contemporary glass facade. The building houses premium office spaces, retail outlets, and dining establishments across multiple floors. Designed with energy-efficient systems, smart building management, and abundant natural lighting throughout common areas.",
    image: "/images/project-02.jpg",
    images: ["/images/project-02.jpg"],
    timeline: "18 months",
    scope: [
      "Architecture & Design",
      "Structural Engineering",
      "Construction",
      "MEP Systems",
      "Facade Installation",
      "Interior Fit-Out",
    ],
    location: "Nairobi, Kenya",
    size: "2,800 sqm",
    year: "2024",
  },
  {
    slug: "contemporary-home",
    title: "Contemporary Home",
    category: "Residential",
    description:
      "Contemporary 4-bedroom home featuring sustainable design and smart home integration.",
    longDescription:
      "A contemporary 4-bedroom residence that seamlessly blends sustainable design with modern luxury. Features include solar power generation, rainwater harvesting, smart home automation, and energy-efficient climate control. The interiors showcase clean lines, natural materials, and a neutral palette accented by bespoke furniture pieces.",
    image: "/images/project-03.jpg",
    images: ["/images/project-03.jpg"],
    timeline: "12 months",
    scope: [
      "Architecture",
      "Sustainable Design",
      "Construction",
      "Smart Home Integration",
      "Interior Design",
      "Landscaping",
    ],
    location: "Nairobi, Kenya",
    size: "320 sqm",
    year: "2023",
  },
  {
    slug: "retail-development",
    title: "Retail Development",
    category: "Commercial",
    description:
      "Multi-purpose commercial development with retail spaces, dining, and offices.",
    longDescription:
      "A vibrant mixed-use commercial development designed to create a destination for shopping, dining, and business. The ground floor features retail storefronts with wide pedestrian walkways, while upper levels house modern office spaces and a rooftop restaurant with panoramic views. The design emphasizes foot traffic flow and visual connectivity between all levels.",
    image: "/images/project-04.jpg",
    images: ["/images/project-04.jpg"],
    timeline: "16 months",
    scope: [
      "Master Planning",
      "Architecture",
      "Construction",
      "MEP Systems",
      "Interior Fit-Out",
      "Fire Protection Systems",
    ],
    location: "Nairobi, Kenya",
    size: "3,200 sqm",
    year: "2023",
  },
  {
    slug: "luxury-penthouse-interior",
    title: "Luxury Penthouse Interior",
    category: "Interior",
    description:
      "Premium penthouse interior design with custom furniture, ambient lighting, and luxury finishes.",
    longDescription:
      "A complete interior transformation of a premium penthouse apartment. The design concept centers on understated luxury with custom-made furniture, ambient lighting systems, and carefully curated materials including marble, brass, and rich wood veneers. Every detail was crafted to create an atmosphere of refined elegance and comfort.",
    image: "/images/project-05.jpg",
    images: ["/images/project-05.jpg"],
    timeline: "6 months",
    scope: [
      "Interior Design",
      "Custom Furniture Design",
      "Lighting Design",
      "Joinery & Cabinetry",
      "Flooring & Tiling",
      "Accessories & Styling",
    ],
    location: "Nairobi, Kenya",
    size: "200 sqm",
    year: "2024",
  },
  {
    slug: "townhouse-development",
    title: "Townhouse Development",
    category: "Architecture",
    description:
      "Master-planned residential development with modern townhouses and shared amenities.",
    longDescription:
      "A master-planned townhouse community featuring architecturally cohesive modern townhomes. Each unit features private gardens, dedicated parking, and premium interior finishes. The development includes shared amenities such as a clubhouse, swimming pool, children's play area, and landscaped communal gardens designed for community living.",
    image: "/images/project-06.jpg",
    images: ["/images/project-06.jpg"],
    timeline: "20 months",
    scope: [
      "Master Planning",
      "Architecture",
      "Construction",
      "Infrastructure",
      "Landscaping",
      "Interior Fit-Out",
    ],
    location: "Nairobi, Kenya",
    size: "5,000 sqm (total)",
    year: "2023",
  },
  {
    slug: "coastal-residence",
    title: "Coastal Residence",
    category: "Residential",
    description:
      "Coastal home design with indoor-outdoor living, natural materials, and ocean-inspired palette.",
    longDescription:
      "A breath-taking coastal residence designed for indoor-outdoor living. The home features expansive verandas, an open-plan layout that flows onto a terrace with ocean views, and material palettes inspired by the surrounding landscape — coral stone, weathered timber, and linen. Large louvered windows capture sea breezes for natural ventilation.",
    image: "/images/project-07.jpg",
    images: ["/images/project-07.jpg"],
    timeline: "15 months",
    scope: [
      "Architecture",
      "Construction",
      "Interior Design",
      "Landscaping",
      "Pool & Outdoor Living",
      "MEP Installation",
    ],
    location: "Coastal Kenya",
    size: "380 sqm",
    year: "2024",
  },
  {
    slug: "medical-facility-interior",
    title: "Medical Facility Interior",
    category: "Interior",
    description:
      "Complete interior fit-out for a private medical facility with patient-centric design.",
    longDescription:
      "A comprehensive interior fit-out for a private medical facility designed with patient comfort and clinical efficiency in mind. The design incorporates soothing color palettes, wayfinding systems, infection-control materials, and ergonomic furniture. Reception areas, consultation rooms, treatment suites, and staff areas were all custom-designed to meet healthcare standards.",
    image: "/images/project-08.jpg",
    images: ["/images/project-08.jpg"],
    timeline: "8 months",
    scope: [
      "Interior Design",
      "Medical Fit-Out",
      "MEP Systems",
      "Joinery & Cabinetry",
      "Flooring & Finishes",
      "Wayfinding & Signage",
    ],
    location: "Nairobi, Kenya",
    size: "600 sqm",
    year: "2023",
  },
  {
    slug: "industrial-facility",
    title: "Industrial Facility",
    category: "Commercial",
    description:
      "Large-scale industrial facility with warehouse space, loading bays, and office areas.",
    longDescription:
      "A large-scale industrial facility designed for operational efficiency. The complex includes a high-bay warehouse with loading docks, mezzanine-level office spaces, staff amenities, and vehicle access roads. The structural design accommodates heavy loads and industrial equipment, while the office areas provide a comfortable working environment with natural light and modern finishes.",
    image: "/images/project-09.jpg",
    images: ["/images/project-09.jpg"],
    timeline: "22 months",
    scope: [
      "Architecture",
      "Structural Engineering",
      "Construction",
      "MEP Systems",
      "Industrial Flooring",
      "Office Fit-Out",
    ],
    location: "Nairobi, Kenya",
    size: "4,500 sqm",
    year: "2024",
  },
  {
    slug: "modern-residence",
    title: "Modern Residence",
    category: "Residential",
    description:
      "Contemporary 4-bedroom home with open-plan living and sustainable design.",
    longDescription:
      "A contemporary 4-bedroom residence designed for modern living. The open-plan layout creates a seamless flow between living, dining, and kitchen areas, while large windows bring in natural light throughout the day. Sustainable design features include energy-efficient appliances, rainwater harvesting, and optimized natural ventilation. The minimalist interiors are complemented by warm natural materials and carefully selected finishes.",
    image: "/assets/modern-residence.jpg",
    images: ["/assets/modern-residence.jpg"],
    timeline: "12 months",
    scope: [
      "Architecture & Design",
      "Construction",
      "Interior Design",
      "Sustainable Design",
      "MEP Installation",
      "Landscaping",
    ],
    location: "Nairobi, Kenya",
    size: "350 sqm",
    year: "2024",
  },
  {
    slug: "commercial-plaza",
    title: "Commercial Plaza",
    category: "Commercial",
    description:
      "Multi-story commercial building with retail spaces and modern facade.",
    longDescription:
      "A striking multi-story commercial building designed to anchor the neighborhood's retail and business district. The modern facade features a combination of glass curtain walls and metal panels, creating a dynamic visual presence. Ground-floor retail spaces are designed for high foot traffic, while upper floors offer flexible office layouts. The building includes basement parking, service elevators, and a rooftop terrace.",
    image: "/assets/commercial-plaza.jpg",
    images: ["/assets/commercial-plaza.jpg"],
    timeline: "16 months",
    scope: [
      "Architecture & Design",
      "Structural Engineering",
      "Construction",
      "MEP Systems",
      "Facade Installation",
      "Interior Fit-Out",
    ],
    location: "Nairobi, Kenya",
    size: "3,000 sqm",
    year: "2024",
  },
  {
    slug: "luxury-villa",
    title: "Luxury Villa",
    category: "Residential",
    description:
      "Premium villa with infinity pool, landscaped gardens, and panoramic views.",
    longDescription:
      "An exclusive luxury villa perched on the slopes of Nairobi with breathtaking panoramic views. The design embraces indoor-outdoor living with floor-to-ceiling glass walls that open onto expansive terraces. The infinity pool appears to merge with the horizon, while the landscaped gardens feature indigenous plants, water features, and outdoor entertainment areas. The interior showcases high-end finishes including natural stone, hardwood floors, and custom lighting.",
    image: "/assets/luxury-villa.jpg",
    images: ["/assets/luxury-villa.jpg"],
    timeline: "18 months",
    scope: [
      "Architecture",
      "Construction",
      "Interior Design",
      "Landscaping",
      "Pool Construction",
      "MEP Installation",
      "Smart Home Systems",
    ],
    location: "Nairobi, Kenya",
    size: "500 sqm",
    year: "2024",
  },
  {
    slug: "office-complex",
    title: "Office Complex",
    category: "Commercial",
    description:
      "Modern office complex with collaborative workspaces and green architecture.",
    longDescription:
      "A modern office complex designed for the future of work. The building features flexible floor plates that can accommodate open-plan collaborative spaces, private offices, and meeting rooms. Green architecture principles are integrated throughout — from the green roof and solar panels to natural ventilation systems and energy-efficient glazing. The ground floor includes a cafe, gym, and landscaped courtyard for employee wellness.",
    image: "/assets/office-complex.jpg",
    images: ["/assets/office-complex.jpg"],
    timeline: "20 months",
    scope: [
      "Architecture & Design",
      "Green Building Design",
      "Construction",
      "MEP Systems",
      "Interior Fit-Out",
      "Landscaping",
    ],
    location: "Nairobi, Kenya",
    size: "4,000 sqm",
    year: "2024",
  },
  {
    slug: "three-bedroom-bungalow",
    title: "3-Bedroom Bungalow 3D",
    category: "Architecture",
    description: "3-Bedroom Bungalow 3D | Open Lounge + 3 Ensuite Bedrooms",
    longDescription:
      "A complete architectural visualization project transforming a 2D floor plan into a photorealistic 3D bungalow render. The design features an open-plan lounge flowing into a modern kitchen, three ensuite bedrooms with walk-in closets, and a covered patio overlooking the garden. The 3D render brings the 2D concept to life with realistic textures, lighting, and furnishings.",
    image: "/assets/3-bed-render.jpeg",
    images: ["/assets/3-bed-render.jpeg", "/assets/3-bed-plan.jpeg"],
    timeline: "2 weeks",
    scope: [
      "2D Floor Plan",
      "3D Architectural Rendering",
      "Interior Visualization",
      "Exterior Design",
      "Material Selection",
      "Lighting Design",
    ],
    location: "Nairobi, Kenya",
    size: "180 sqm",
    year: "2026",
    beforeImage: "/assets/3-bed-plan.jpeg",
    afterImage: "/assets/3-bed-render.jpeg",
  },
  {
    slug: "two-bedroom-layout",
    title: "2-Bedroom 3D Layout",
    category: "Architecture",
    description:
      "2-Bedroom 3D Layout | Open-Plan Living with Warm Wood Finishes",
    longDescription:
      "A 2-bedroom apartment layout transformed from 2D plan to a stunning 3D interior render. The open-plan living area combines the lounge, dining, and kitchen into one cohesive space finished with warm wood tones, neutral walls, and accent lighting. Both bedrooms feature built-in wardrobes and large windows for natural light.",
    image: "/assets/2-bed-render.jpeg",
    images: ["/assets/2-bed-render.jpeg", "/assets/2-bed-plan.jpeg"],
    timeline: "10 days",
    scope: [
      "2D Floor Plan",
      "3D Interior Rendering",
      "Space Planning",
      "Material Selection",
      "Furniture Layout",
      "Lighting Design",
    ],
    location: "Nairobi, Kenya",
    size: "90 sqm",
    year: "2026",
    beforeImage: "/assets/2-bed-plan.jpeg",
    afterImage: "/assets/2-bed-render.jpeg",
  },
  {
    slug: "mezzanine-office",
    title: "Mezzanine Office 3D",
    category: "Architecture",
    description:
      "Mezzanine Office 3D | 2-Level Layout with 11ft Ceiling Height",
    longDescription:
      "A detailed 3D section render of a mezzanine office designed for a tall commercial space. The 11ft ceiling allows for a partial second level, creating a two-storey layout within a single floor. The ground level houses workstations and a reception area, while the mezzanine level features private offices and a breakout space. The section render illustrates the vertical flow and spatial relationships.",
    image: "/assets/mezzanine-render.jpeg",
    images: ["/assets/mezzanine-render.jpeg", "/assets/mezzanine-section.jpeg"],
    timeline: "2 weeks",
    scope: [
      "Section Drawing",
      "3D Section Rendering",
      "Space Planning",
      "Vertical Circulation",
      "Office Layout Design",
      "Material Palette",
    ],
    location: "Nairobi, Kenya",
    size: "150 sqm (total)",
    year: "2026",
    beforeImage: "/assets/mezzanine-section.jpeg",
    afterImage: "/assets/mezzanine-render.jpeg",
  },
  {
    slug: "office-lower-floor",
    title: "Small Office 3D Plan",
    category: "Architecture",
    description: "Small Office 3D Plan | Reception, Boardroom + Private Office",
    longDescription:
      "A compact office floor plan brought to life with a 3D top-down render. The layout maximizes a limited footprint with an inviting reception area, a fully equipped boardroom for client meetings, a private executive office, and an open-plan workstation zone. The 3D plan view provides a clear understanding of spatial flow and furniture arrangement.",
    image: "/assets/office-render.jpeg",
    images: ["/assets/office-render.jpeg", "/assets/office-plan.jpeg"],
    timeline: "1 week",
    scope: [
      "Floor Plan Design",
      "3D Plan Rendering",
      "Space Optimization",
      "Office Layout",
      "Furniture Planning",
      "Traffic Flow Analysis",
    ],
    location: "Nairobi, Kenya",
    size: "65 sqm",
    year: "2026",
    beforeImage: "/assets/office-plan.jpeg",
    afterImage: "/assets/office-render.jpeg",
  },
  {
    slug: "renovation-project",
    title: "Renovation Project",
    category: "Renovation",
    description:
      "Complete home renovation from bare structure to modern open-plan living.",
    longDescription:
      "A full home renovation transforming a bare concrete structure into a warm, modern living space. The project involved complete interior fit-out including new partition walls, floor and wall tiling, ceiling installation, kitchen cabinetry, and painting. The open-plan kitchen features custom cabinetry, quartz countertops, and a large island that doubles as a dining area. Every finish was carefully selected to create a cohesive, contemporary aesthetic throughout the home.",
    image: "/assets/after-image.jpg",
    images: ["/assets/after-image.jpg", "/assets/open-kitchen.jpg"],
    timeline: "5 months",
    scope: [
      "Interior Design",
      "Renovation",
      "Kitchen Design & Installation",
      "Flooring & Tiling",
      "Joinery & Cabinetry",
      "Painting & Finishing",
      "MEP Systems",
    ],
    location: "Nairobi, Kenya",
    size: "180 sqm",
    year: "2024",
    beforeImage: "/assets/before-image.jpg",
    afterImage: "/assets/after-image.jpg",
  },
];

export const portfolioSlugs = portfolioItems.map((item) => item.slug);
export function getPortfolioItem(slug: string) {
  return portfolioItems.find((item) => item.slug === slug);
}
