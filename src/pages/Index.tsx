import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BookRecommendations } from "@/components/BookRecommendations";
import { StoryComposer } from "@/components/StoryComposer";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
        <BookRecommendations />
        <section id="compose">
          <StoryComposer />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
