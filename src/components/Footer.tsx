 import { BookOpen, Heart } from "lucide-react";
 
 export function Footer() {
   return (
     <footer className="bg-card border-t border-border py-12">
       <div className="container max-w-7xl mx-auto px-4">
         <div className="flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="flex items-center gap-2">
             <BookOpen className="w-5 h-5 text-primary" />
             <span className="font-display text-lg font-bold text-foreground">
               BookNest
             </span>
           </div>
 
           <p className="text-sm text-muted-foreground flex items-center gap-1">
             Made with <Heart className="w-4 h-4 text-primary fill-primary" /> for book lovers
           </p>
 
           <nav className="flex items-center gap-6 text-sm text-muted-foreground">
             <a href="#" className="hover:text-primary transition-colors">About</a>
             <a href="#" className="hover:text-primary transition-colors">Contact</a>
             <a href="#" className="hover:text-primary transition-colors">Privacy</a>
           </nav>
         </div>
       </div>
     </footer>
   );
 }