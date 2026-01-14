import { Leaf, Brain, ChartLine, Github } from "lucide-react";
import heroImage from "@/assets/hero-rice-field.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Rice paddy field at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-6 py-20 md:py-32">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6 animate-slide-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent-foreground backdrop-blur-sm">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium text-primary-foreground/90">AI-Powered Agriculture</span>
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground mb-6 animate-slide-up animation-delay-100">
            Rice Leaf Disease
            <span className="block text-accent">Detection</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-4 max-w-2xl animate-slide-up animation-delay-200">
            Leveraging deep learning and computer vision to help farmers identify 
            rice leaf diseases early, protecting crops and ensuring food security 
            for millions.
          </p>

          <p className="text-base text-primary-foreground/60 mb-10 max-w-2xl animate-slide-up animation-delay-200">
            This project uses a Convolutional Neural Network (CNN) trained on 120+ images 
            to classify three major rice diseases: Bacterial Leaf Blight, Brown Spot, and Leaf Smut 
            with 85%+ accuracy using 5-fold cross-validation.
          </p>

          <div className="flex flex-wrap gap-4 animate-slide-up animation-delay-300">
            <a
              href="#diseases"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-accent text-accent-foreground font-semibold transition-all hover:shadow-glow hover:scale-105"
            >
              <Brain className="w-5 h-5" />
              Explore Diseases
            </a>
            <a
              href="#performance"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 font-semibold backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
            >
              <ChartLine className="w-5 h-5" />
              View Results
            </a>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              <a
                href="https://github.com/vinodbavage31/RiceLeaf-disease-detection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 mr-2" />
                GitHub Repo
              </a>
            </Button>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col gap-4">
          {[
            { label: "Accuracy", value: "85%+", sublabel: "5-fold CV", delay: "animation-delay-400" },
            { label: "Diseases", value: "3", sublabel: "Classes", delay: "animation-delay-500" },
            { label: "Images", value: "120", sublabel: "Dataset", delay: "animation-delay-600" },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`px-6 py-4 rounded-xl bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 animate-slide-up ${stat.delay}`}
            >
              <p className="text-3xl font-bold text-accent">{stat.value}</p>
              <p className="text-sm text-primary-foreground/70">{stat.label}</p>
              <p className="text-xs text-primary-foreground/50">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-pulse-soft">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
