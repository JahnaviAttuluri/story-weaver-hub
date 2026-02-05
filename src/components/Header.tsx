 import { BookOpen, PenLine } from "lucide-react";
 
 export function Header() {
   return (
     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
       <div className="container max-w-7xl mx-auto px-4">
         <div className="flex items-center justify-between h-16">
           <a href="/" className="flex items-center gap-2">
             <BookOpen className="w-6 h-6 text-primary" />
             <span className="font-display text-xl font-bold text-foreground">
               BookNest
             </span>
           </a>
 
           <nav className="hidden md:flex items-center gap-8">
             <a href="#recommendations" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
               Discover
             </a>
             <a href="#compose" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
               Write Stories
             </a>
           </nav>
 
           <a 
             href="#compose" 
             className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
           >
             <PenLine className="w-4 h-4" />
             <span className="hidden sm:inline">Start Writing</span>
           </a>
         </div>
       </div>
     </header>
   );
 }