export interface Brand {
  id: string;
  name: string;
  logo?: string; // path to SVG/PNG
  url?: string;
}

export const brands: Brand[] = [
  { id: "brand-1", name: "Mamamy", url: "#" },
  { id: "brand-2", name: "Cetaphil Baby", url: "#" },
  { id: "brand-3", name: "Friso", url: "#" },
  { id: "brand-4", name: "Mothercare", url: "#" },
  { id: "brand-5", name: "Pigeon", url: "#" },
  { id: "brand-6", name: "Bübchen", url: "#" },
  { id: "brand-7", name: "Fitobimbi", url: "#" },
  { id: "brand-8", name: "Babylove", url: "#" },
];
