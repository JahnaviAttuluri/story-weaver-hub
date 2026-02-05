 import { useState } from "react";
 import { Textarea } from "@/components/ui/textarea";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { PenLine, Sparkles, Save } from "lucide-react";
 import { useToast } from "@/hooks/use-toast";
 
 export function StoryComposer() {
   const [title, setTitle] = useState("");
   const [story, setStory] = useState("");
   const [isSaving, setIsSaving] = useState(false);
   const { toast } = useToast();
 
   const handleSave = () => {
     if (!title.trim() || !story.trim()) {
       toast({
         title: "Missing content",
         description: "Please add both a title and story content.",
         variant: "destructive",
       });
       return;
     }
 
     setIsSaving(true);
     // Simulate save
     setTimeout(() => {
       setIsSaving(false);
       toast({
         title: "Story saved!",
         description: "Your creative masterpiece has been saved.",
       });
     }, 1000);
   };
 
   const wordCount = story.trim() ? story.trim().split(/\s+/).length : 0;
 
   return (
     <section className="py-20 bg-cream paper-texture">
       <div className="container max-w-4xl mx-auto px-4">
         <div className="text-center mb-12 animate-fade-in">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
             <PenLine className="w-4 h-4" />
             Your Creative Space
           </div>
           <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
             Compose Your Story
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Let your imagination run wild. Write your own tales, share your thoughts, 
             or craft the story you've always wanted to read.
           </p>
         </div>
 
         <div className="bg-card rounded-2xl p-8 book-card-shadow space-y-6 animate-scale-in">
           <div className="space-y-2">
             <label htmlFor="story-title" className="text-sm font-medium text-foreground">
               Story Title
             </label>
             <Input
               id="story-title"
               placeholder="Give your story a captivating title..."
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className="font-display text-lg border-border focus:border-primary"
             />
           </div>
 
           <div className="space-y-2">
             <label htmlFor="story-content" className="text-sm font-medium text-foreground">
               Your Story
             </label>
             <Textarea
               id="story-content"
               placeholder="Once upon a time, in a land far away..."
               value={story}
               onChange={(e) => setStory(e.target.value)}
               className="min-h-[300px] resize-none border-border focus:border-primary leading-relaxed"
             />
           </div>
 
           <div className="flex items-center justify-between pt-4 border-t border-border">
             <div className="flex items-center gap-4 text-sm text-muted-foreground">
               <span>{wordCount} words</span>
               <span className="flex items-center gap-1">
                 <Sparkles className="w-4 h-4 text-accent" />
                 Keep writing!
               </span>
             </div>
             <Button
               onClick={handleSave}
               disabled={isSaving}
               className="gap-2"
             >
               <Save className="w-4 h-4" />
               {isSaving ? "Saving..." : "Save Story"}
             </Button>
           </div>
         </div>
       </div>
     </section>
   );
 }