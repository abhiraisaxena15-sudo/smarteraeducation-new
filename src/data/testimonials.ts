export interface Testimonial {
  name: string;
  course: string;
  university: string;
  /** public/images/students/ mein photo daalo, jaise '/images/students/rahul.jpg' (optional) */
  image?: string;
  review: string;
  rating: number;
  location?: string;
}

/**
 * Students ke reviews. Naya review add karne ke liye neeche wale
 * format mein ek aur entry jodo. List khaali karoge toh Testimonials
 * ki jagah Instagram wala section dikhega.
 *
 * Example:
 * {
 *   name: 'Student Name',
 *   course: 'MBA',
 *   university: 'Chandigarh University',
 *   image: '/images/students/student-name.jpg',
 *   review: 'Student ne jo bola, wahi likho.',
 *   rating: 5,
 *   location: 'Delhi',
 * },
 */
export const testimonials: Testimonial[] = [
  {
    name: 'Rahul Sharma',
    course: 'MBA',
    university: 'Lovely Professional University',
    image: '/images/students/rahul.webp',
    review: 'Smart Era Education made my MBA admission process incredibly smooth. Their counsellors helped me choose the right specialization and even secured a 30% scholarship. I could not have done it without their expert guidance!',
    rating: 5,
    location: 'Delhi',
  },
  {
    name: 'Priya Verma',
    course: 'B.Tech Computer Science',
    university: 'Chandigarh University',
    image: '/images/students/priya.webp',
    review: 'I was confused about which university to choose for B.Tech. The team at Smart Era patiently explained all options and helped me get into Chandigarh University with a merit scholarship. Truly grateful for their support!',
    rating: 5,
    location: 'Lucknow',
  },
  {
    name: 'Aman Gupta',
    course: 'BCA',
    university: 'Amity University',
    image: '/images/students/aman.webp',
    review: 'From application to admission, every step was handled professionally. They even assisted with my education loan paperwork. Got admission to Amity University Noida within 2 weeks of contacting them. Highly recommended!',
    rating: 5,
    location: 'Jaipur',
  },
  {
    name: 'Sneha Kapoor',
    course: 'MCA',
    university: 'Manipal University Jaipur',
    image: '/images/students/sneha.webp',
    review: 'The personalized counselling sessions were a game-changer. They understood my career goals and matched me with the perfect MCA program at Manipal University. The admission process was hassle-free and fast!',
    rating: 5,
    location: 'Mumbai',
  },
];
