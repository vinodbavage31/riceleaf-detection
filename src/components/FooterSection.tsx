import { Leaf, Github, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

          {/* Links */}
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
          </div>
        </div>

        {/* Portfolio Button */}
        <div className="flex justify-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-base gap-2 hover-scale"
          >
            <a
              href="https://vinodbavageportfolio.lovable.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Built by Vinod Bavage | View Portfolio
              <ExternalLink className="w-4 h-4" />
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
