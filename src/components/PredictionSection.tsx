import { useState, useRef } from "react";
import { Upload, Leaf, AlertCircle, CheckCircle2, Info, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";

interface PredictionResult {
  disease: string;
  confidence: number;
  description: string;
  treatment: string;
}

const diseaseInfo: Record<string, { description: string; treatment: string }> = {
  "Bacterial Leaf Blight": {
    description: "Caused by Xanthomonas oryzae, characterized by water-soaked lesions that turn yellow to white as they develop. Can cause 20-30% yield loss if untreated.",
    treatment: "Use resistant varieties, apply copper-based bactericides, and ensure proper field drainage. Avoid nitrogen over-fertilization."
  },
  "Brown Spot": {
    description: "Caused by Cochliobolus miyabeanus, showing circular to oval brown spots with gray centers on leaves. Often indicates nutrient deficiency in soil.",
    treatment: "Apply fungicides like mancozeb, ensure balanced fertilization (especially potassium), and use disease-free certified seeds."
  },
  "Leaf Smut": {
    description: "Caused by Entyloma oryzae, appearing as angular black or dark brown spots on leaf blades. Reduces photosynthetic capacity and grain quality.",
    treatment: "Use resistant varieties, apply systemic fungicides like propiconazole, and practice crop rotation with non-host crops."
  }
};

const PredictionSection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<PredictionResult | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Invalid file type",
          description: "Please upload an image file.",
          variant: "destructive"
        });
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const analyzeImage = async () => {
    if (!selectedImage) return;

    setIsAnalyzing(true);
    
    // Simulate model prediction with random result
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const diseases = ["Bacterial Leaf Blight", "Brown Spot", "Leaf Smut"];
    const randomDisease = diseases[Math.floor(Math.random() * diseases.length)];
    const confidence = 75 + Math.random() * 20; // Random confidence between 75-95%
    
    setResult({
      disease: randomDisease,
      confidence: Math.round(confidence * 10) / 10,
      description: diseaseInfo[randomDisease].description,
      treatment: diseaseInfo[randomDisease].treatment
    });
    
    setIsAnalyzing(false);
    
    toast({
      title: "Analysis Complete",
      description: `Detected: ${randomDisease}`,
    });
  };

  const resetPrediction = () => {
    setSelectedImage(null);
    setResult(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section id="predict" className="py-24 bg-muted/30">
      <div className="container px-6">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium mb-4">
            AI Prediction Demo
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Analyze Your Rice Leaf
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Upload an image of a rice leaf to detect potential diseases using our trained CNN model.
            The model analyzes visual patterns to classify the disease type.
          </p>
        </div>

        {/* How It Works */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-4 p-6 rounded-2xl bg-card border border-border">
            <div className="text-center p-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-accent">1</span>
              </div>
              <h4 className="font-medium text-foreground mb-1">Upload Image</h4>
              <p className="text-sm text-muted-foreground">
                Upload a clear photo of the affected rice leaf
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-accent">2</span>
              </div>
              <h4 className="font-medium text-foreground mb-1">AI Analysis</h4>
              <p className="text-sm text-muted-foreground">
                CNN extracts features and classifies the disease
              </p>
            </div>
            <div className="text-center p-4">
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
                <span className="font-bold text-accent">3</span>
              </div>
              <h4 className="font-medium text-foreground mb-1">Get Results</h4>
              <p className="text-sm text-muted-foreground">
                Receive disease prediction with treatment advice
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Upload Area */}
            <Card className="p-6 border-2 border-dashed border-border hover:border-primary/50 transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="image-upload"
              />
              
              {!selectedImage ? (
                <label
                  htmlFor="image-upload"
                  className="flex flex-col items-center justify-center h-64 cursor-pointer"
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Upload className="w-8 h-8 text-primary" />
                  </div>
                  <p className="text-foreground font-medium mb-2">
                    Drop your image here
                  </p>
                  <p className="text-muted-foreground text-sm mb-4">
                    or click to browse
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Supports: JPG, PNG, WebP (max 10MB)
                  </p>
                </label>
              ) : (
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                    <img
                      src={selectedImage}
                      alt="Selected rice leaf"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={analyzeImage}
                      disabled={isAnalyzing}
                      className="flex-1"
                    >
                      {isAnalyzing ? (
                        <>
                          <Leaf className="w-4 h-4 mr-2 animate-spin" />
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <Leaf className="w-4 h-4 mr-2" />
                          Analyze
                        </>
                      )}
                    </Button>
                    <Button variant="outline" onClick={resetPrediction}>
                      Reset
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            {/* Results Area */}
            <Card className="p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                Prediction Results
              </h3>
              
              {!result ? (
                <div className="flex flex-col items-center justify-center h-56 text-muted-foreground">
                  <AlertCircle className="w-12 h-12 mb-4 opacity-50" />
                  <p className="text-center">
                    Upload and analyze an image to see the prediction results
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-primary/10 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-foreground">{result.disease}</p>
                      <p className="text-sm text-muted-foreground">
                        Confidence: {result.confidence}%
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">About This Disease</h4>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Recommended Treatment</h4>
                    <p className="text-sm text-muted-foreground">{result.treatment}</p>
                  </div>
                </div>
              )}
              
              <div className="mt-6 p-3 bg-muted rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground">
                    <strong>Demo Mode:</strong> This demo uses simulated predictions. 
                    For production use, connect your deployed TensorFlow model API.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* GitHub CTA */}
          <div className="text-center mt-8">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <a
                href="https://github.com/vinodbavage31/RiceLeaf-disease-detection"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
                View Model Training Code on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PredictionSection;
