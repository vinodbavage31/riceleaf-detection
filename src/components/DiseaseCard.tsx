import { AlertTriangle, TrendingDown } from "lucide-react";

interface DiseaseCardProps {
  name: string;
  scientificName?: string;
  description: string;
  symptoms: string[];
  prevention?: string;
  image: string;
  severity: "high" | "medium" | "low";
  yieldLoss?: string;
  delay?: string;
}

const severityConfig = {
  high: {
    color: "bg-leafsmut/10 text-leafsmut border-leafsmut/30",
    label: "High Impact",
  },
  medium: {
    color: "bg-brownspot/10 text-brownspot border-brownspot/30",
    label: "Medium Impact",
  },
  low: {
    color: "bg-bacterial/10 text-bacterial border-bacterial/30",
    label: "Moderate Impact",
  },
};

const DiseaseCard = ({
  name,
  scientificName,
  description,
  symptoms,
  prevention,
  image,
  severity,
  yieldLoss,
  delay = "",
}: DiseaseCardProps) => {
  const config = severityConfig[severity];

  return (
    <article
      className={`group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 animate-slide-up ${delay}`}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={`${name} disease on rice leaf`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Severity Badge */}
        <div className="absolute top-4 right-4">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border ${config.color}`}
          >
            <AlertTriangle className="w-3 h-3" />
            {config.label}
          </span>
        </div>

        {/* Yield Loss Badge */}
        {yieldLoss && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-background/80 backdrop-blur-sm text-foreground border border-border">
              <TrendingDown className="w-3 h-3 text-destructive" />
              {yieldLoss} yield loss
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-card-foreground mb-1">
          {name}
        </h3>
        {scientificName && (
          <p className="text-xs italic text-muted-foreground mb-3">
            {scientificName}
          </p>
        )}
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
          {description}
        </p>

        {/* Symptoms */}
        <div className="space-y-2 mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Key Symptoms
          </h4>
          <ul className="space-y-1.5">
            {symptoms.map((symptom, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-sm text-card-foreground"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                {symptom}
              </li>
            ))}
          </ul>
        </div>

        {/* Prevention */}
        {prevention && (
          <div className="pt-4 border-t border-border">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">
              Prevention Tip
            </h4>
            <p className="text-sm text-muted-foreground">{prevention}</p>
          </div>
        )}
      </div>
    </article>
  );
};

export default DiseaseCard;
