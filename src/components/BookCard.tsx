 import { Star } from "lucide-react";
 import { Book } from "@/data/books";
 import { Card, CardContent } from "@/components/ui/card";
 import { useState } from "react";
 
 interface BookCardProps {
   book: Book;
   index: number;
 }
 
 export function BookCard({ book, index }: BookCardProps) {
   const [showReviews, setShowReviews] = useState(false);
 
   return (
     <Card 
       className="group overflow-hidden bg-card book-card-shadow hover:shadow-xl transition-all duration-500 animate-fade-in"
       style={{ animationDelay: `${index * 100}ms` }}
     >
       <div className="relative aspect-[2/3] overflow-hidden">
         <img
           src={book.coverUrl}
           alt={book.title}
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
         />
         <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
           ₹{book.price}
         </div>
       </div>
       <CardContent className="p-5 space-y-3">
         <div>
           <h3 className="font-display text-xl font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
             {book.title}
           </h3>
           <p className="text-muted-foreground text-sm">{book.author}</p>
         </div>
         
         <div className="flex items-center gap-2">
           <div className="flex items-center gap-1">
             {[...Array(5)].map((_, i) => (
               <Star
                 key={i}
                 className={`w-4 h-4 ${
                   i < Math.floor(book.rating)
                     ? "fill-accent text-accent"
                     : "text-muted"
                 }`}
               />
             ))}
           </div>
           <span className="text-sm font-medium text-muted-foreground">
             {book.rating}
           </span>
         </div>
 
         <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium">
           {book.genre}
         </span>
 
         <p className="text-sm text-muted-foreground line-clamp-2">
           {book.description}
         </p>
 
         <button
           onClick={() => setShowReviews(!showReviews)}
           className="text-primary text-sm font-medium hover:underline transition-all"
         >
           {showReviews ? "Hide Reviews" : "Read Critic Reviews"}
         </button>
 
         {showReviews && (
           <div className="space-y-4 pt-3 border-t border-border animate-fade-in">
             {book.criticReviews.map((review, idx) => (
               <div key={idx} className="space-y-2">
                 <p className="critic-quote text-sm">"{review.quote}"</p>
                 <div className="flex items-center justify-between">
                   <div>
                     <p className="text-xs font-semibold text-foreground">{review.criticName}</p>
                     <p className="text-xs text-muted-foreground">{review.publication}</p>
                   </div>
                   <div className="flex items-center gap-1">
                     <Star className="w-3 h-3 fill-accent text-accent" />
                     <span className="text-xs font-medium">{review.rating}/5</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
         )}
       </CardContent>
     </Card>
   );
 }