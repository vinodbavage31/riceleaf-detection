import { Database, Layers, Cpu, CheckCircle2, ArrowRight, Github, FileText, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: Database,
    title: "Data Collection & Exploratory Data Analysis",
    description:
      "The foundation of any ML project begins with quality data. We collected rice leaf images organized by disease class and performed comprehensive EDA to understand data characteristics, identify potential biases, and ensure dataset quality.",
    details: [
      "120 total images across 3 classes",
      "40 images per disease category",
      "Visualized class distribution",
      "Analyzed image dimensions & quality",
      "Identified data augmentation needs",
    ],
    insights: "The balanced dataset with 40 images per class helps prevent model bias toward any particular disease, ensuring fair predictions across all categories.",
  },
  {
    icon: Layers,
    title: "Image Preprocessing & Data Augmentation",
    description:
      "Raw images require standardization before feeding into neural networks. We applied systematic preprocessing and augmentation techniques to enhance model generalization and prevent overfitting on our limited dataset.",
    details: [
      "Resized to 224×224 pixels",
      "Pixel normalization (0-1 range)",
      "Random horizontal/vertical flips",
      "Rotation (±20°) augmentation",
      "Zoom & shift transformations",
    ],
    insights: "Data augmentation artificially expands our training set by creating varied versions of each image, helping the model learn rotation-invariant and position-invariant features.",
  },
  {
    icon: Cpu,
    title: "CNN Model Architecture & Transfer Learning",
    description:
      "We leveraged transfer learning using a pre-trained convolutional neural network, fine-tuning it for our specific rice leaf disease classification task. This two-stage training approach combines the power of pre-learned features with domain-specific optimization.",
    details: [
      "Base: Pre-trained CNN backbone",
      "Stage 1: Frozen base, train head",
      "Stage 2: Fine-tune all layers",
      "Adam optimizer with lr scheduling",
      "Early stopping to prevent overfitting",
    ],
    insights: "Transfer learning dramatically reduces training time and data requirements by utilizing features learned from millions of images, then adapting them to our agricultural domain.",
  },
  {
    icon: CheckCircle2,
    title: "Model Evaluation & Cross-Validation",
    description:
      "Rigorous evaluation ensures model reliability. We employed 5-fold stratified cross-validation, providing robust performance estimates and reducing the risk of overly optimistic results from a single train-test split.",
    details: [
      "5-fold stratified CV",
      "Precision, Recall, F1-Score metrics",
      "Confusion matrix analysis",
      "Classification report per class",
      "Accuracy: 85%+ average",
    ],
    insights: "Stratified k-fold ensures each fold maintains the same class distribution as the full dataset, giving us reliable performance estimates across all disease categories.",
  },
];

const MethodologySection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-4">
            Technical Approach
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Methodology & Pipeline
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            A systematic, reproducible approach combining data science best practices with
            state-of-the-art deep learning techniques for accurate disease classification.
          </p>
          
          {/* GitHub Repository Button */}
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold gap-2"
          >
            <a
              href="https://github.com/vinodbavage31/RiceLeaf-disease-detection"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              View Full Code on GitHub
            </a>
          </Button>
        </div>

        {/* Pipeline Overview */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex flex-wrap items-center justify-center gap-3 p-6 rounded-2xl bg-muted/50 border border-border">
            {[
              { icon: FileText, label: "Data" },
              { icon: Layers, label: "Preprocess" },
              { icon: Cpu, label: "Train" },
              { icon: BarChart3, label: "Evaluate" },
              { icon: Zap, label: "Deploy" },
            ].map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border">
                  <item.icon className="w-4 h-4 text-accent" />
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
                {index < 4 && (
                  <ArrowRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className={`relative flex gap-6 md:gap-10 pb-12 animate-slide-up animation-delay-${(index + 1) * 100}`}
            >
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground shadow-soft">
                  <step.icon className="w-6 h-6" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-4" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-accent">
                    Step {index + 1}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Details Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {step.details.map((detail) => (
                    <span
                      key={detail}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                    >
                      {detail}
                    </span>
                  ))}
                </div>

                {/* Insight Box */}
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20">
                  <p className="text-sm text-foreground/80">
                    <span className="font-semibold text-accent">💡 Key Insight:</span>{" "}
                    {step.insights}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
