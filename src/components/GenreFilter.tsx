 import { cn } from "@/lib/utils";
 
 interface GenreFilterProps {
   genres: string[];
   selectedGenres: string[];
   onToggle: (genre: string) => void;
 }
 
 export function GenreFilter({ genres, selectedGenres, onToggle }: GenreFilterProps) {
   return (
     <div className="flex flex-wrap gap-3">
       {genres.map((genre) => (
         <button
           key={genre}
           onClick={() => onToggle(genre)}
           className={cn(
             "genre-chip",
             selectedGenres.includes(genre) && "genre-chip-active"
           )}
         >
           {genre}
         </button>
       ))}
     </div>
   );
 }