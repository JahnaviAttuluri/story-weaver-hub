 export interface Book {
   id: string;
   title: string;
   author: string;
   genre: string;
   price: number;
   rating: number;
   coverUrl: string;
   description: string;
   criticReviews: CriticReview[];
 }
 
 export interface CriticReview {
   criticName: string;
   publication: string;
   quote: string;
   rating: number;
 }
 
 export const genres = [
   "Fiction",
   "Mystery",
   "Romance",
   "Science Fiction",
   "Fantasy",
   "Thriller",
   "Biography",
   "Self-Help",
   "History",
   "Poetry"
 ];
 
 export const interests = [
   "Adventure",
   "Love Stories",
   "Dark & Twisty",
   "Mind-Bending",
   "Historical",
   "Inspirational",
   "Philosophical",
   "Light Reads",
   "Epic Sagas",
   "True Stories"
 ];
 
 export const books: Book[] = [
   {
     id: "1",
     title: "The Midnight Library",
     author: "Matt Haig",
     genre: "Fiction",
     price: 399,
     rating: 4.5,
     coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=450&fit=crop",
     description: "Between life and death there is a library. When Nora finds herself there, she has a chance to try out different lives.",
     criticReviews: [
       {
         criticName: "Sarah Waters",
         publication: "The Guardian",
         quote: "A beautiful, poignant book that explores the roads not taken with warmth and wisdom.",
         rating: 5
       },
       {
         criticName: "Anil Menon",
         publication: "The Hindu Literary Review",
         quote: "Haig crafts an existential journey that resonates deeply with modern anxieties.",
         rating: 4
       }
     ]
   },
   {
     id: "2",
     title: "Project Hail Mary",
     author: "Andy Weir",
     genre: "Science Fiction",
     price: 549,
     rating: 4.8,
     coverUrl: "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?w=300&h=450&fit=crop",
     description: "A lone astronaut must save humanity from extinction in this gripping space adventure.",
     criticReviews: [
       {
         criticName: "Priya Sharma",
         publication: "India Today",
         quote: "Weir proves once again he's the master of making science thrilling and accessible.",
         rating: 5
       },
       {
         criticName: "James Rollins",
         publication: "New York Times",
         quote: "Brilliant, surprising, and utterly impossible to put down.",
         rating: 5
       }
     ]
   },
   {
     id: "3",
     title: "The Silent Patient",
     author: "Alex Michaelides",
     genre: "Thriller",
     price: 350,
     rating: 4.3,
     coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=450&fit=crop",
     description: "A woman shoots her husband and then never speaks again. The psychotherapist trying to uncover the truth becomes obsessed.",
     criticReviews: [
       {
         criticName: "Kiran Desai",
         publication: "Scroll.in",
         quote: "A psychological thriller that grips you from the first page and doesn't let go.",
         rating: 4
       },
       {
         criticName: "Stephen King",
         publication: "Entertainment Weekly",
         quote: "An unforgettable—and Hollywood-ready—parsec of shock.",
         rating: 4
       }
     ]
   },
   {
     id: "4",
     title: "Atomic Habits",
     author: "James Clear",
     genre: "Self-Help",
     price: 499,
     rating: 4.7,
     coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=300&h=450&fit=crop",
     description: "Tiny changes, remarkable results. Learn how small habits can lead to incredible transformations.",
     criticReviews: [
       {
         criticName: "Devdutt Pattanaik",
         publication: "Economic Times",
         quote: "A practical guide that distills behavioral science into actionable wisdom.",
         rating: 5
       },
       {
         criticName: "Mark Manson",
         publication: "Forbes",
         quote: "The most comprehensive and practical guide on how to create good habits.",
         rating: 5
       }
     ]
   },
   {
     id: "5",
     title: "The Seven Moons of Maali Almeida",
     author: "Shehan Karunatilaka",
     genre: "Fiction",
     price: 599,
     rating: 4.4,
     coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop",
     description: "A Booker Prize winner set in war-torn Sri Lanka, where a dead photographer tries to solve his own murder.",
     criticReviews: [
       {
         criticName: "Amitav Ghosh",
         publication: "The Wire",
         quote: "A dazzling, inventive novel that reimagines what fiction can do.",
         rating: 5
       },
       {
         criticName: "Nilanjana Roy",
         publication: "Financial Times",
         quote: "Karunatilaka writes with fierce wit and profound humanity.",
         rating: 4
       }
     ]
   },
   {
     id: "6",
     title: "The House in the Cerulean Sea",
     author: "TJ Klune",
     genre: "Fantasy",
     price: 425,
     rating: 4.6,
     coverUrl: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?w=300&h=450&fit=crop",
     description: "A magical story about finding family in unexpected places and the courage to stand up for what's right.",
     criticReviews: [
       {
         criticName: "Samantha Shannon",
         publication: "The Bookseller",
         quote: "Warm, wise, and wonderfully weird. A hug of a book.",
         rating: 5
       },
       {
         criticName: "Rashmi Bansal",
         publication: "Mint Lounge",
         quote: "A heartwarming tale that celebrates difference and found family.",
         rating: 4
       }
     ]
   },
   {
     id: "7",
     title: "A Gentleman in Moscow",
     author: "Amor Towles",
     genre: "History",
     price: 475,
     rating: 4.5,
     coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=450&fit=crop",
     description: "A count is sentenced to house arrest in a luxury hotel. Over 30 years, he finds purpose in the smallest moments.",
     criticReviews: [
       {
         criticName: "William Boyd",
         publication: "The Telegraph",
         quote: "An elegant, irresistible novel about a man who makes the best of his circumstances.",
         rating: 5
       },
       {
         criticName: "Shashi Tharoor",
         publication: "Open Magazine",
         quote: "Towles writes with grace and wit that recalls the best of classic literature.",
         rating: 4
       }
     ]
   },
   {
     id: "8",
     title: "Beach Read",
     author: "Emily Henry",
     genre: "Romance",
     price: 299,
     rating: 4.2,
     coverUrl: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=450&fit=crop",
     description: "Two writers with opposite styles swap genres for the summer and maybe fall in love.",
     criticReviews: [
       {
         criticName: "Durjoy Datta",
         publication: "Hindustan Times",
         quote: "A delightful rom-com that delivers genuine emotional depth.",
         rating: 4
       },
       {
         criticName: "Christina Lauren",
         publication: "USA Today",
         quote: "Witty, sexy, and absolutely unputdownable.",
         rating: 4
       }
     ]
   }
 ];