import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const technologies = [
  {
    name: "Python 3.x",
    description: "Core programming language for ML pipeline",
    category: "Language",
    usage: "Data processing, model training, evaluation scripts",
  },
  {
    name: "TensorFlow/Keras",
    description: "Deep learning framework",
    category: "ML Framework",
    usage: "CNN architecture, transfer learning, model compilation",
  },
  {
    name: "NumPy",
    description: "Numerical computing library",
    category: "Data Processing",
    usage: "Array operations, mathematical computations",
  },
  {
    name: "Pandas",
    description: "Data manipulation & analysis",
    category: "Data Processing",
    usage: "Dataset loading, preprocessing, result analysis",
  },
  {
    name: "Matplotlib/Seaborn",
    description: "Data visualization libraries",
    category: "Visualization",
    usage: "Training curves, confusion matrices, EDA plots",
  },
  {
    name: "Scikit-learn",
    description: "ML utilities & metrics",
    category: "ML Framework",
    usage: "Cross-validation, classification reports, metrics",
  },
];

const TechStackSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Built With
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Technology Stack
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Industry-standard tools and frameworks powering our disease detection
            system, chosen for reliability, performance, and reproducibility.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              asChild
              className="bg-foreground text-background hover:bg-foreground/90 gap-2"
            >
              <a
                href="https://github.com/vinodbavage31/RiceLeaf-disease-detection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View Source Code
              </a>
            </Button>
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group p-6 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-card transition-all duration-300 animate-scale-in animation-delay-${(index + 1) * 100}`}
            >
              <span className="text-xs font-medium uppercase tracking-wider text-accent mb-2 block">
                {tech.category}
              </span>
              <h3 className="font-semibold text-lg text-card-foreground group-hover:text-accent transition-colors mb-2">
                {tech.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {tech.description}
              </p>
              <div className="pt-3 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Used for: </span>
                  {tech.usage}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="max-w-3xl mx-auto mt-12">
          <div className="p-6 rounded-2xl bg-card border border-border">
            <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
              <ExternalLink className="w-4 h-4 text-accent" />
              Project Environment
            </h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Runtime:</span> Google Colab / Jupyter Notebook
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">GPU:</span> NVIDIA T4 (for training acceleration)
                </p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">
                  <span className="font-medium text-foreground">Framework:</span> TensorFlow 2.x with Keras API
                </p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Validation:</span> 5-fold Stratified Cross-Validation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
