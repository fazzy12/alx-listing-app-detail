import { PropertyProps, ReviewProps } from '@/interfaces';


// export const PROPERTYLISTINGSAMPLE: PropertyProps []  =  [
//   {
//     name: "Villa Ocean Breeze",
//     address: {
//       state: "Seminyak",
//       city: "Bali",
//       country: "Indonesia"
//     },
//     rating: 4.89,
//     category: ["Luxury Villa", "Pool", "Free Parking"],
//     price: 3200,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-6"
//     },
//     image: "https://example.com/image1.jpg",
//     discount: ""
//   },
//   {
//     name: "Mountain Escape Chalet",
//     address: {
//       state: "Aspen",
//       city: "Colorado",
//       country: "USA"
//     },
//     rating: 4.70,
//     category: ["Mountain View", "Fireplace", "Self Checkin"],
//     price: 1800,
//     offers: {
//       bed: "4",
//       shower: "2",
//       occupants: "5-7"
//     },
//     image: "https://example.com/image2.jpg",
//     discount: "30"
//   },
//   {
//     name: "Cozy Desert Retreat",
//     address: {
//       state: "Palm Springs",
//       city: "California",
//       country: "USA"
//     },
//     rating: 4.92,
//     category: ["Desert View", "Pet Friendly", "Self Checkin"],
//     price: 1500,
//     offers: {
//       bed: "2",
//       shower: "1",
//       occupants: "2-3"
//     },
//     image: "https://example.com/image3.jpg",
//     discount: ""
//   },
//   {
//     name: "City Lights Penthouse",
//     address: {
//       state: "New York",
//       city: "New York",
//       country: "USA"
//     },
//     rating: 4.85,
//     category: ["City View", "Free WiFi", "24h Checkin"],
//     price: 4500,
//     offers: {
//       bed: "2",
//       shower: "2",
//       occupants: "2-4"
//     },
//     image: "https://example.com/image4.jpg",
//     discount: "15"
//   },
//   {
//     name: "Riverside Cabin",
//     address: {
//       state: "Queenstown",
//       city: "Otago",
//       country: "New Zealand"
//     },
//     rating: 4.77,
//     category: ["Riverside", "Private Dock", "Free Kayaks"],
//     price: 2800,
//     offers: {
//       bed: "3",
//       shower: "2",
//       occupants: "4-6"
//     },
//     image: "https://example.com/image5.jpg",
//     discount: "20"
//   },
//   {
//     name: "Modern Beachfront Villa",
//     address: {
//       state: "Sidemen",
//       city: "Bali",
//       country: "Indonesia"
//     },
//     rating: 4.95,
//     category: ["Beachfront", "Private Pool", "Chef Service"],
//     price: 5000,
//     offers: {
//       bed: "5",
//       shower: "4",
//       occupants: "8-10"
//     },
//     image: "https://example.com/image6.jpg",
//     discount: ""
//   },
//   {
//     name: "Lakeside Chalet",
//     address: {
//       state: "Banff",
//       city: "Alberta",
//       country: "Canada"
//     },
//     rating: 4.65,
//     category: ["Lakeside", "Mountain View", "Hiking Trails"],
//     price: 2300,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-5"
//     },
//     image: "https://example.com/image7.jpg",
//     discount: "10"
//   },
//   {
//     name: "Tropical Garden Villa",
//     address: {
//       state: "Koh Samui",
//       city: "Surat Thani",
//       country: "Thailand"
//     },
//     rating: 4.80,
//     category: ["Garden", "Free Parking", "Self Checkin"],
//     price: 2750,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "5-6"
//     },
//     image: "https://example.com/image8.jpg",
//     discount: "25"
//   },
//   {
//     name: "Urban Loft",
//     address: {
//       state: "Berlin",
//       city: "Berlin",
//       country: "Germany"
//     },
//     rating: 4.60,
//     category: ["City Center", "Free WiFi", "24h Checkin"],
//     price: 2000,
//     offers: {
//       bed: "2",
//       shower: "1",
//       occupants: "2-3"
//     },
//     image: "https://example.com/image9.jpg",
//     discount: ""
//   },
//   {
//     name: "Secluded Forest Cabin",
//     address: {
//       state: "Whistler",
//       city: "British Columbia",
//       country: "Canada"
//     },
//     rating: 4.72,
//     category: ["Secluded", "Hot Tub", "Self Checkin"],
//     price: 2600,
//     offers: {
//       bed: "4",
//       shower: "2",
//       occupants: "5-7"
//     },
//     image: "https://example.com/image10.jpg",
//     discount: "40"
//   },
//   {
//     name: "Cliffside Villa",
//     address: {
//       state: "Amalfi",
//       city: "Salerno",
//       country: "Italy"
//     },
//     rating: 4.93,
//     category: ["Cliffside", "Infinity Pool", "Sea View"],
//     price: 6000,
//     offers: {
//       bed: "4",
//       shower: "4",
//       occupants: "6-8"
//     },
//     image: "https://example.com/image11.jpg",
//     discount: "50"
//   },
//   {
//     name: "Coastal Escape Villa",
//     address: {
//       state: "Noosa",
//       city: "Queensland",
//       country: "Australia"
//     },
//     rating: 4.83,
//     category: ["Beachfront", "Pet Friendly", "Free Parking"],
//     price: 3400,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-6"
//     },
//     image: "https://example.com/image12.jpg",
//     discount: ""
//   },
//   {
//     name: "Historical Villa",
//     address: {
//       state: "Florence",
//       city: "Tuscany",
//       country: "Italy"
//     },
//     rating: 4.67,
//     category: ["Historical", "Free Breakfast", "Self Checkin"],
//     price: 2700,
//     offers: {
//       bed: "2",
//       shower: "2",
//       occupants: "2-4"
//     },
//     image: "https://example.com/image13.jpg",
//     discount: "35"
//   },
//   {
//     name: "Downtown Apartment",
//     address: {
//       state: "Tokyo",
//       city: "Tokyo",
//       country: "Japan"
//     },
//     rating: 4.81,
//     category: ["City Center", "Free WiFi", "Public Transport"],
//     price: 2200,
//     offers: {
//       bed: "1",
//       shower: "1",
//       occupants: "2"
//     },
//     image: "https://example.com/image14.jpg",
//     discount: ""
//   },
//   {
//     name: "Luxury Safari Lodge",
//     address: {
//       state: "Serengeti",
//       city: "Mara",
//       country: "Tanzania"
//     },
//     rating: 4.97,
//     category: ["Safari", "Guided Tours", "Free Breakfast"],
//     price: 4500,
//     offers: {
//       bed: "4",
//       shower: "4",
//       occupants: "6-8"
//     },
//     image: "https://example.com/image15.jpg",
//     discount: "20"
//   },
//   {
//     name: "Countryside Cottage",
//     address: {
//       state: "Cotswolds",
//       city: "Gloucestershire",
//       country: "UK"
//     },
//     rating: 4.58,
//     category: ["Countryside", "Fireplace", "Self Checkin"],
//     price: 1800,
//     offers: {
//       bed: "2",
//       shower: "1",
//       occupants: "2-4"
//     },
//     image: "https://example.com/image16.jpg",
//     discount: "25"
//   },
//   {
//     name: "Riverfront Mansion",
//     address: {
//       state: "Paris",
//       city: "Île-de-France",
//       country: "France"
//     },
//     rating: 4.86,
//     category: ["Riverfront", "Private Garden", "Self Checkin"],
//     price: 5000,
//     offers: {
//       bed: "4",
//       shower: "3",
//       occupants: "6-8"
//     },
//     image: "https://example.com/image17.jpg",
//     discount: "30"
//   },
//   {
//     name: "Ski Chalet",
//     address: {
//       state: "Zermatt",
//       city: "Valais",
//       country: "Switzerland"
//     },
//     rating: 4.75,
//     category: ["Mountain View", "Ski Access", "Fireplace"],
//     price: 3900,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-5"
//     },
//     image: "https://example.com/image18.jpg",
//     discount: ""
//   },
//   {
//     name: "Island Paradise Villa",
//     address: {
//       state: "Mahe",
//       city: "Victoria",
//       country: "Seychelles"
//     },
//     rating: 4.98,
//     category: ["Beachfront", "Private Pool", "Chef Service"],
//     price: 6500,
//     offers: {
//       bed: "5",
//       shower: "5",
//       occupants: "8-10"
//     },
//     image: "https://example.com/image19.jpg",
//     discount: "60"
//   },
//   {
//     name: "Clifftop Retreat",
//     address: {
//       state: "Cape Town",
//       city: "Western Cape",
//       country: "South Africa"
//     },
//     rating: 4.78,
//     category: ["Ocean View", "Private Pool", "Self Checkin"],
//     price: 4100,
//     offers: {
//       bed: "3",
//       shower: "3",
//       occupants: "4-5"
//     },
//     image: "https://example.com/image20.jpg",
//     discount: ""
//   }
// ];


export const SAMPLE_REVIEWS: ReviewProps[] = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "https://i.pravatar.cc/150?img=1", 
    rating: 5,
    comment: "The place was clean, modern, and in a perfect location. Highly recommend the private pool!",
  },
  {
    id: 2,
    name: "Maria Sanchez",
    avatar: "https://i.pravatar.cc/150?img=2", 
    rating: 4,
    comment: "A lovely stay, though the check-in process was a bit slow. Still a beautiful villa.",
  },
  {
    id: 3,
    name: "Ben Lee",
    avatar: "https://i.pravatar.cc/150?img=3", 
    rating: 5,
    comment: "Fantastic amenities and great communication with the host. Perfect getaway.",
  },
];

const DUMMY_IMAGE_GRID = [
  "https://images.unsplash.com/photo-1564013799919-ab681e85536e?fit=crop&w=1200&h=800",
  "https://images.unsplash.com/photo-1570191959738-d68a9ce257e8?fit=crop&w=600&h=400",
  "https://images.unsplash.com/photo-1540518614376-a6703b905a90?fit=crop&w=600&h=400",
  "https://images.unsplash.com/photo-1560448204-63519c362534?fit=crop&w=600&h=400",
];


// Define a reusable host object
const DUMMY_HOST_INFO = {
    name: "The Super Host Team",
    about: "A super host team with over 5 years of experience, dedicated to providing seamless stays and high-quality properties worldwide. We are always available for any assistance you may require during your trip."
};

// Define a reusable description string
const DUMMY_DESCRIPTION = "This exquisite property offers unparalleled views and amenities, designed for a luxurious and comfortable stay. Enjoy a spacious layout, modern furnishings, and a prime location near all major attractions. Perfect for any traveler looking for a high-end experience.";

export const PROPERTYLISTINGSAMPLE: PropertyProps[]  =  [
  {
    id: 1, 
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Private Pool", "Free Parking", "Chef Service", "Beach Access", "Free WiFi", "Hot Tub"],
    pricePerNight: 3200, // Renamed from price
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image1.jpg",
    discount: "10",
    images: DUMMY_IMAGE_GRID, // New field
    description: DUMMY_DESCRIPTION, // New field
    host: DUMMY_HOST_INFO, // New field
    reviews: SAMPLE_REVIEWS, // New field
  },
  {
    id: 2, 
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin", "Ski Access", "Hot Tub"],
    pricePerNight: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://example.com/image2.jpg",
    discount: "30",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 3, 
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    pricePerNight: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://example.com/image3.jpg",
    discount: "",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 4, 
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    pricePerNight: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://example.com/image4.jpg",
    discount: "15",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 5, 
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    pricePerNight: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://example.com/image5.jpg",
    discount: "20",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 6, 
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    pricePerNight: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://example.com/image6.jpg",
    discount: "",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 7, 
    name: "Lakeside Chalet",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    pricePerNight: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://example.com/image7.jpg",
    discount: "10",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 8, 
    name: "Tropical Garden Villa",
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    pricePerNight: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "https://example.com/image8.jpg",
    discount: "25",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 9, 
    name: "Urban Loft",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    pricePerNight: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://example.com/image9.jpg",
    discount: "",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 10, 
    name: "Secluded Forest Cabin",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    pricePerNight: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://example.com/image10.jpg",
    discount: "40",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 11, 
    name: "Cliffside Villa",
    address: { state: "Amalfi", city: "Salerno", country: "Italy" },
    rating: 4.93,
    category: ["Cliffside", "Infinity Pool", "Sea View"],
    pricePerNight: 6000,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://example.com/image11.jpg",
    discount: "50",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 12, 
    name: "Coastal Escape Villa",
    address: { state: "Noosa", city: "Queensland", country: "Australia" },
    rating: 4.83,
    category: ["Beachfront", "Pet Friendly", "Free Parking"],
    pricePerNight: 3400,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://example.com/image12.jpg",
    discount: "",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 13, 
    name: "Historical Villa",
    address: { state: "Florence", city: "Tuscany", country: "Italy" },
    rating: 4.67,
    category: ["Historical", "Free Breakfast", "Self Checkin"],
    pricePerNight: 2700,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://example.com/image13.jpg",
    discount: "35",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 14, 
    name: "Downtown Apartment",
    address: { state: "Tokyo", city: "Tokyo", country: "Japan" },
    rating: 4.81,
    category: ["City Center", "Free WiFi", "Public Transport"],
    pricePerNight: 2200,
    offers: { bed: "1", shower: "1", occupants: "2" },
    image: "https://example.com/image14.jpg",
    discount: "",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 15, 
    name: "Luxury Safari Lodge",
    address: { state: "Serengeti", city: "Mara", country: "Tanzania" },
    rating: 4.97,
    category: ["Safari", "Guided Tours", "Free Breakfast"],
    pricePerNight: 4500,
    offers: { bed: "4", shower: "4", occupants: "6-8" },
    image: "https://example.com/image15.jpg",
    discount: "20",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 16, 
    name: "Countryside Cottage",
    address: { state: "Cotswolds", city: "Gloucestershire", country: "UK" },
    rating: 4.58,
    category: ["Countryside", "Fireplace", "Self Checkin"],
    pricePerNight: 1800,
    offers: { bed: "2", shower: "1", occupants: "2-4" },
    image: "https://example.com/image16.jpg",
    discount: "25",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 17, 
    name: "Riverfront Mansion",
    address: { state: "Paris", city: "Île-de-France", country: "France" },
    rating: 4.86,
    category: ["Riverfront", "Private Garden", "Self Checkin"],
    pricePerNight: 5000,
    offers: { bed: "4", shower: "3", occupants: "6-8" },
    image: "https://example.com/image17.jpg",
    discount: "30",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 18, 
    name: "Ski Chalet",
    address: { state: "Zermatt", city: "Valais", country: "Switzerland" },
    rating: 4.75,
    category: ["Mountain View", "Ski Access", "Fireplace"],
    pricePerNight: 3900,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://example.com/image18.jpg",
    discount: "",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 19, 
    name: "Island Paradise Villa",
    address: { state: "Mahe", city: "Victoria", country: "Seychelles" },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    pricePerNight: 6500,
    offers: { bed: "5", shower: "5", occupants: "8-10" },
    image: "https://example.com/image19.jpg",
    discount: "60",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  },
  {
    id: 20, 
    name: "Clifftop Retreat",
    address: { state: "Cape Town", city: "Western Cape", country: "South Africa" },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    pricePerNight: 4100,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://example.com/image20.jpg",
    discount: "",
    images: DUMMY_IMAGE_GRID,
    description: DUMMY_DESCRIPTION,
    host: DUMMY_HOST_INFO,
    reviews: SAMPLE_REVIEWS,
  }
];



export const HERO_IMAGE_URL = "/assets/images/hero.jpg";