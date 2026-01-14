import { useEffect, useState, useRef } from "react";
import { Target, Layers, Database, Cpu, CheckCircle2, Award, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  {
    icon: Target,
    value: 85,
    suffix: "%+",
    label: "Model Accuracy",
    description: "Average accuracy across all disease classes using stratified 5-fold cross-validation",
  },
  {
    icon: Layers,
    value: 5,
    suffix: "-Fold",
    label: "Cross-Validation",
    description: "Stratified k-fold splits ensuring robust and unbiased model evaluation",
  },
  {
    icon: Database,
    value: 120,
    suffix: "",
    label: "Training Images",
    description: "Balanced dataset with 40 images per disease class for fair learning",
  },
  {
    icon: Cpu,
    value: 3,
    suffix: "",
    label: "Disease Classes",
    description: "Bacterial Leaf Blight, Brown Spot, and Leaf Smut classification",
  },
];

const metrics = [
  { name: "Precision", value: "0.84", description: "Positive prediction accuracy" },
  { name: "Recall", value: "0.85", description: "True positive detection rate" },
  { name: "F1-Score", value: "0.84", description: "Harmonic mean of precision & recall" },
];

const AnimatedNumber = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const duration = 2000;
          const increment = value / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-5xl md:text-6xl font-bold text-accent">
      {count}
      {suffix}
    </div>
  );
};

const StatsSection = () => {
  return (
    <section id="performance" className="py-24 bg-primary text-primary-foreground">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground/80 text-sm font-medium mb-4">
            Model Performance
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Results & Metrics
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-6">
            Our CNN model trained with transfer learning achieves robust
            performance validated through rigorous 5-fold stratified cross-validation,
            ensuring reliable predictions across all disease categories.
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
          >
            <a
              href="https://github.com/vinodbavage31/RiceLeaf-disease-detection"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View Complete Results on GitHub
            </a>
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 animate-slide-up animation-delay-${(index + 1) * 100}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/20 text-accent mb-6">
                <stat.icon className="w-7 h-7" />
              </div>
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              <h3 className="text-lg font-semibold mt-2 mb-1">{stat.label}</h3>
              <p className="text-sm text-primary-foreground/60">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed Metrics */}
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold">Classification Metrics (Macro Average)</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              {metrics.map((metric) => (
                <div key={metric.name} className="text-center p-4 rounded-xl bg-primary-foreground/5">
                  <p className="text-3xl font-bold text-accent mb-1">{metric.value}</p>
                  <p className="font-medium text-primary-foreground">{metric.name}</p>
                  <p className="text-xs text-primary-foreground/60 mt-1">{metric.description}</p>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-primary-foreground mb-1">What These Metrics Mean</p>
                  <p className="text-sm text-primary-foreground/70">
                    High precision (0.84) means few false positives—when the model predicts a disease, it's usually correct.
                    High recall (0.85) means the model catches most actual disease cases. The balanced F1-score (0.84)
                    indicates reliable overall performance suitable for agricultural deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
