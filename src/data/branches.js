// Shared by OfficeLocations (map list) and the per-branch contact page
// (app/contact-us/branch/[slug]) so both work off the same source of truth.
export const branches = [
  {
    slug: "chinchwad-haveli-pune",
    name: "Chinchwad (Municipal Corporation), Haveli, Pune",
    city: "Chinchwad",
    address:
      "Office No. 3, 4, 5, 6, Vishal Arcade, <br />Chapekar Chowk, Opp. to Sonigara Jwellers, Pimpri <br />Chinchwad (Municipal Corporation), Haveli, Pune, 411033.",
    mapQuery:
      "Office No. 3, 4, 5, 6, Vishal Arcade, Chapekar Chowk, Opp. to Sonigara Jwellers, Pimpri Chinchwad, Haveli, Pune, 411033",
    officeLabel: "Chinchwad, Pune, Maharashtra",
    lat: 18.63345478248213,
    lng: 73.77792507519445,
    phone: "020 2735 0055",
    whatsapp: "+91 91755 35507",
    email: "care@payyouadvisory.com",
    hours: "Open Now (Closes 5:00 PM)",
  },
  {
    slug: "bhigwan-chowk-baramati-pune",
    name: "Bhigwan Chowk, Baramati, Pune",
    city: "Baramati",
    address: "Bhigwan Chowk, Baramati, Dist Pune Pin - 413102",
    mapQuery: "Bhigwan Chowk, Baramati, Dist Pune, 413102",
    officeLabel: "Baramati, Pune, Maharashtra",
    lat: 18.1500939,
    lng: 74.5751186,
    phone: "+91 91755 35507",
    whatsapp: "+91 91755 35507",
    email: "care@payyouadvisory.com",
    hours: "Open Now (Closes 5:00 PM)",
  },
  {
    slug: "laxminagar-phaltan-satara",
    name: "Laxminagar, Phaltan Satara",
    city: "Phaltan",
    address: "Plot No-92, Laxminagar, Phaltan Dist Satara - 415523",
    mapQuery: "Plot No-92, Laxminagar, Phaltan, Dist Satara, 415523",
    officeLabel: "Phaltan, Satara, Maharashtra",
    // Approximate (town-level) — the precise "Laxminagar" locality isn't resolvable via
    // OpenStreetMap's geocoder; refine with an exact pin if you have one.
    lat: 17.9907746,
    lng: 74.4298834,
    phone: "+91 84248 12345",
    whatsapp: "+91 84248 12345",
    email: "care@payyouadvisory.com",
    hours: "Open Now (Closes 5:00 PM)",
  },
];
