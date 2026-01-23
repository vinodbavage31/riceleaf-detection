import { Leaf, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

/* Medium Icon SVG */
const MediumIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 1043.63 592.71"
    className={className}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M588.67 296.36c0 163.7-131.85 296.35-294.33 296.35C131.85 592.71 0 460.06 0 296.36 0 132.66 131.85 0 294.34 0c162.48 0 294.33 132.66 294.33 296.36zM911.64 296.36c0 154.05-65.93 279.02-147.16 279.02-81.23 0-147.16-124.97-147.16-279.02S683.25 17.34 764.48 17.34c81.23 0 147.16 124.97 147.16 279.02zM1043.63 296.36c0 138.02-23.65 249.9-52.84 249.9-29.19 0-52.84-111.88-52.84-249.9s23.65-249.9 52.84-249.9c29.19 0 52.84 111.88 52.84 249.9z" />
  </svg>
);

const FooterSection = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand & Author */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <Leaf className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg">Rice Leaf Detection</h3>
              <p className="text-sm text-background/60">Built by Vinod Bavage</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/vinodbavage31"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="GitHub - Vinod Bavage"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/vinodbavage/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="LinkedIn - Vinod Bavage"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            {/* Medium Social Icon */}
            <a
              href="https://medium.com/@vinodbavage31/detecting-rice-leaf-diseases-with-ai-how-i-built-a-92-accurate-classification-system-2771ceb83dfb"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-black text-white flex items-center justify-center hover:opacity-80 transition"
              aria-label="Medium Blog"
            >
              <MediumIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          {/* Portfolio Button */}
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base gap-2 hover-scale"
          >
            <a
              href="https://vinod-portfolio.pages.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Portfolio
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>

          {/* Medium Button */}
          <Button
            asChild
            size="lg"
            className="bg-black hover:bg-black/90 text-white font-semibold px-8 py-6 text-base gap-2 hover-scale"
          >
            <a
              href="https://medium.com/@vinodbavage31/detecting-rice-leaf-diseases-with-ai-how-i-built-a-92-accurate-classification-system-2771ceb83dfb"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Read Medium Blog"
            >
              View Blog
              <MediumIcon className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center">
          <p className="text-sm text-background/50">
            © {new Date().getFullYear()} Rice Leaf Disease Detection Project by Vinod Bavage.
            Built with deep learning for agricultural innovation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
