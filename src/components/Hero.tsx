 import { BookOpen, Sparkles } from "lucide-react";
 import heroImage from "@/assets/hero-bookshop.jpg";
 
 export function Hero() {
   return (
     <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
       {/* Background Image with Overlay */}
       <div className="absolute inset-0">
         <img
           src={heroImage}
           alt="Cozy bookshop"
           className="w-full h-full object-cover"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
       </div>
 
       {/* Content */}
       <div className="relative z-10 container max-w-5xl mx-auto px-4 text-center py-20">
         <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm text-primary rounded-full text-sm font-medium mb-6 animate-fade-in">
           <Sparkles className="w-4 h-4" />
           Discover Your Next Great Read
         </div>
         
         <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
           Find Books You'll
           <span className="text-primary block mt-2">Love to Read</span>
         </h1>
         
         <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
           Personalized recommendations based on your interests, favorite genres, 
           and budget. Explore curated selections with reviews from renowned critics.
         </p>
 
         <div className="flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
           <a 
             href="#recommendations" 
             className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:opacity-90 transition-opacity"
           >
             <BookOpen className="w-5 h-5" />
             Explore Books
           </a>
         </div>
       </div>
     </section>
   );
 }