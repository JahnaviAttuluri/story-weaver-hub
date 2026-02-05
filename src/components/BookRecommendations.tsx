 import { useState, useMemo } from "react";
 import { books, genres, interests } from "@/data/books";
 import { GenreFilter } from "./GenreFilter";
 import { BudgetSlider } from "./BudgetSlider";
 import { BookCard } from "./BookCard";
 import { Filter, Sparkles } from "lucide-react";
 
 export function BookRecommendations() {
   const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
   const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
   const [budgetRange, setBudgetRange] = useState<number[]>([100, 1000]);
 
   const toggleGenre = (genre: string) => {
     setSelectedGenres((prev) =>
       prev.includes(genre)
         ? prev.filter((g) => g !== genre)
         : [...prev, genre]
     );
   };
 
   const toggleInterest = (interest: string) => {
     setSelectedInterests((prev) =>
       prev.includes(interest)
         ? prev.filter((i) => i !== interest)
         : [...prev, interest]
     );
   };
 
   const filteredBooks = useMemo(() => {
     return books.filter((book) => {
       const matchesGenre =
         selectedGenres.length === 0 || selectedGenres.includes(book.genre);
       const matchesBudget =
         book.price >= budgetRange[0] && book.price <= budgetRange[1];
       return matchesGenre && matchesBudget;
     });
   }, [selectedGenres, budgetRange]);
 
   return (
     <section id="recommendations" className="py-20 bg-background">
       <div className="container max-w-7xl mx-auto px-4">
         {/* Section Header */}
         <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
             <Sparkles className="w-4 h-4 text-accent" />
             Personalized For You
           </div>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Book Recommendations
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Filter by your favorite genres and budget to find the perfect read
           </p>
         </div>
 
         {/* Filters */}
         <div className="bg-card rounded-2xl p-8 book-card-shadow mb-12 space-y-8">
           <div className="flex items-center gap-2 text-foreground font-semibold">
             <Filter className="w-5 h-5" />
             <span>Filter Your Recommendations</span>
           </div>
 
           <div className="space-y-4">
             <h3 className="text-sm font-medium text-muted-foreground">Select Genres</h3>
             <GenreFilter
               genres={genres}
               selectedGenres={selectedGenres}
               onToggle={toggleGenre}
             />
           </div>
 
           <div className="space-y-4">
             <h3 className="text-sm font-medium text-muted-foreground">Your Interests</h3>
             <GenreFilter
               genres={interests}
               selectedGenres={selectedInterests}
               onToggle={toggleInterest}
             />
           </div>
 
           <div className="max-w-md">
             <BudgetSlider
               value={budgetRange}
               onChange={setBudgetRange}
               min={100}
               max={1000}
             />
           </div>
         </div>
 
         {/* Results */}
         <div className="mb-6">
           <p className="text-muted-foreground">
             Showing <span className="font-semibold text-foreground">{filteredBooks.length}</span> books
           </p>
         </div>
 
         {filteredBooks.length > 0 ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
             {filteredBooks.map((book, index) => (
               <BookCard key={book.id} book={book} index={index} />
             ))}
           </div>
         ) : (
           <div className="text-center py-20 bg-card rounded-2xl">
             <p className="text-muted-foreground text-lg">
               No books match your filters. Try adjusting your preferences.
             </p>
           </div>
         )}
       </div>
     </section>
   );
 }