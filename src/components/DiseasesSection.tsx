import DiseaseCard from "./DiseaseCard";
import bacterialBlightImg from "@/assets/bacterial-blight.jpg";
import brownSpotImg from "@/assets/brown-spot.jpg";
import leafSmutImg from "@/assets/leaf-smut.jpg";
import { AlertCircle, TrendingDown, Sprout } from "lucide-react";

const diseases = [
  {
    name: "Bacterial Leaf Blight",
    scientificName: "Xanthomonas oryzae pv. oryzae",
    description:
      "A serious bacterial disease that can cause significant yield losses of 20-30% in tropical and subtropical regions. It spreads rapidly through infected seeds, irrigation water, and rain splashes.",
    symptoms: [
      "Water-soaked lesions on leaf margins",
      "Yellow to white streaks along veins",
      "Wilting and drying of leaves",
      "Milky bacterial ooze from cut leaves",
    ],
    prevention: "Use certified disease-free seeds, balanced fertilization, and resistant varieties.",
    image: bacterialBlightImg,
    severity: "high" as const,
    yieldLoss: "20-30%",
  },
  {
    name: "Brown Spot",
    scientificName: "Bipolaris oryzae (Cochliobolus miyabeanus)",
    description:
      "A fungal disease affecting rice at all growth stages, particularly prevalent in nutrient-deficient soils. Historically caused the Bengal famine of 1943. Can cause 10-20% yield reduction.",
    symptoms: [
      "Circular brown spots with gray centers",
      "Yellow halos around lesions",
      "Spots on leaves, sheaths, and grains",
      "Premature leaf senescence",
    ],
    prevention: "Maintain proper soil nutrition, especially potassium and silicon levels.",
    image: brownSpotImg,
    severity: "medium" as const,
    yieldLoss: "10-20%",
  },
  {
    name: "Leaf Smut",
    scientificName: "Entyloma oryzae",
    description:
      "A fungal disease that produces black powdery spores on rice leaves, reducing photosynthetic capacity. While less destructive than other diseases, it still impacts grain quality and yield by 5-10%.",
    symptoms: [
      "Black angular spots on leaves",
      "Dark powdery spore masses",
      "Linear streaks along leaf veins",
      "Reduced grain quality",
    ],
    prevention: "Practice crop rotation and use systemic fungicides during high-risk periods.",
    image: leafSmutImg,
    severity: "low" as const,
    yieldLoss: "5-10%",
  },
];

const DiseasesSection = () => {
  return (
    <section id="diseases" className="py-24 bg-muted/30 leaf-pattern">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Disease Classification
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Diseases We Detect
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Our deep learning model identifies three major rice leaf diseases with
            high accuracy, enabling early intervention and crop protection.
          </p>
        </div>

        {/* Why Early Detection Matters */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-3 gap-6 p-6 rounded-2xl bg-card border border-border">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Global Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Rice diseases cause $5B+ annual losses worldwide, affecting 3.5 billion people who depend on rice.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <TrendingDown className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Yield Protection</h4>
                <p className="text-sm text-muted-foreground">
                  Early detection can reduce crop losses by up to 50%, saving farmers' livelihoods.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Sprout className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Sustainable Farming</h4>
                <p className="text-sm text-muted-foreground">
                  Targeted treatment reduces pesticide use by 30%, benefiting environment and farmers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Disease Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diseases.map((disease, index) => (
            <DiseaseCard
              key={disease.name}
              {...disease}
              delay={`animation-delay-${(index + 1) * 100}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseasesSection;
