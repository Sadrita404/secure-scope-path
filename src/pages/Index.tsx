import Layout from "@/components/Layout";
import { Shield, Zap, Target, CheckCircle, ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-cyber.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Cybersecurity Shield" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/60" />
        </div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Defend Smarter with{" "}
              <span className="text-glow bg-gradient-to-r from-cyber-green to-cyber-green-bright bg-clip-text text-transparent">
                Authorized
              </span>{" "}
              Red & Blue Team Assessments
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl">
              Instantly scope an assessment, run a <strong className="text-cyber-green">Free</strong> baseline scan, 
              and see results in a real-time dashboard.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/pricing" className="btn-cyber">
                <Play className="w-5 h-5 mr-2" />
                Start Free Scan
              </Link>
              <Link to="/pricing" className="btn-outline">
                View Pricing
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            How It <span className="text-cyber-green">Works</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyber-gradient rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-4">1. Enter URL & Scope</h3>
              <p className="text-muted-foreground">
                Provide the target domain and proof of authorization.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyber-gradient rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-4">2. Choose Assessment</h3>
              <p className="text-muted-foreground">
                Red, Blue, or Both; confirm timeline & terms.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 bg-cyber-gradient rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-xl font-semibold mb-4">3. Track Results</h3>
              <p className="text-muted-foreground">
                Watch progress in your dashboard with a live status feed and green-line trend graph.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Ethics */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cyber-gradient rounded-3xl mb-8">
              <CheckCircle className="w-10 h-10 text-background" />
            </div>
            <h2 className="text-4xl font-bold mb-6">Trust & Ethics</h2>
            <p className="text-xl text-muted-foreground mb-8">
              All assessments are <strong className="text-cyber-green">consent-based</strong> and{" "}
              <strong className="text-cyber-green">fully authorized</strong>. We never run activities 
              outside approved scope. Reports include remediation guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-24 bg-card/20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Simple <span className="text-cyber-green">Pricing</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="card-cyber text-center">
              <h3 className="text-2xl font-bold mb-4 text-cyber-green">Free</h3>
              <p className="text-3xl font-bold mb-2">₹0</p>
              <p className="text-muted-foreground mb-6">Baseline checks & sample report</p>
            </div>

            <div className="card-cyber text-center">
              <h3 className="text-2xl font-bold mb-4">Red Team</h3>
              <p className="text-3xl font-bold mb-2">₹1,500</p>
              <p className="text-muted-foreground mb-6">Adversarial simulation</p>
            </div>

            <div className="card-cyber text-center">
              <h3 className="text-2xl font-bold mb-4">Blue Team</h3>
              <p className="text-3xl font-bold mb-2">₹1,500</p>
              <p className="text-muted-foreground mb-6">Defensive evaluation</p>
            </div>

            <div className="card-cyber text-center border-2 border-cyber-green">
              <h3 className="text-2xl font-bold mb-4 text-cyber-green">Both</h3>
              <p className="text-3xl font-bold mb-2">₹2,500</p>
              <p className="text-muted-foreground mb-6">Combined assessment</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/pricing" className="btn-cyber">
              View Plans
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;