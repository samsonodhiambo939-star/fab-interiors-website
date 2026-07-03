export interface Testimonial {
  name: string;
  role: string;
  project: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "James Mwangi",
    role: "Homeowner",
    project: "Residential Project A",
    quote:
      "From the first consultation to the final handover, FAB INTERIORS exceeded every expectation. Their in-house team meant we never had to chase different contractors. The quality of workmanship is outstanding.",
    rating: 5,
  },
  {
    name: "Sarah Wanjiku",
    role: "Property Developer",
    project: "Townhouse Development",
    quote:
      "We've worked with many contractors over the years, but FAB INTERIORS stands out for their professionalism and attention to detail. They delivered our townhouse project on time and within budget.",
    rating: 5,
  },
  {
    name: "David Kamau",
    role: "Business Owner",
    project: "Commercial Complex",
    quote:
      "Having one team handle everything from architecture to finishing made a huge difference. Communication was seamless, and the result is a commercial space that perfectly serves our needs.",
    rating: 5,
  },
  {
    name: "Grace Ochieng",
    role: "Interior Design Client",
    project: "Luxury Penthouse Interior",
    quote:
      "The interior design team transformed our penthouse into something truly special. Every piece of furniture was custom-made, and the lighting design creates such an amazing atmosphere.",
    rating: 5,
  },
  {
    name: "Peter Njoroge",
    role: "Medical Director",
    project: "Medical Facility Interior",
    quote:
      "A medical facility requires specialized knowledge, and FAB INTERIORS delivered. They understood our infection control requirements and created a warm, welcoming environment for our patients.",
    rating: 5,
  },
];
