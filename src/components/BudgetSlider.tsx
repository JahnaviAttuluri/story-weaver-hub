 import { Slider } from "@/components/ui/slider";
 
 interface BudgetSliderProps {
   value: number[];
   onChange: (value: number[]) => void;
   min?: number;
   max?: number;
 }
 
 export function BudgetSlider({ value, onChange, min = 100, max = 1000 }: BudgetSliderProps) {
   return (
     <div className="space-y-4">
       <div className="flex items-center justify-between">
         <span className="text-sm font-medium text-muted-foreground">Budget Range</span>
         <span className="text-lg font-display font-semibold text-primary">
           ₹{value[0]} - ₹{value[1]}
         </span>
       </div>
       <Slider
         value={value}
         onValueChange={onChange}
         min={min}
         max={max}
         step={50}
         className="w-full"
       />
       <div className="flex justify-between text-xs text-muted-foreground">
         <span>₹{min}</span>
         <span>₹{max}</span>
       </div>
     </div>
   );
 }