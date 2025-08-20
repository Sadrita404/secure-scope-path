import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Target, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Download,
  Activity
} from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [assessmentData, setAssessmentData] = useState(null);

  // Get assessment data from URL params or localStorage
  useEffect(() => {
    const storedData = localStorage.getItem('currentAssessment');
    const urlParams = {
      url: searchParams.get('url'),
      name: searchParams.get('name'),
      plan: searchParams.get('plan'),
      email: searchParams.get('email')
    };

    if (storedData) {
      setAssessmentData(JSON.parse(storedData));
    } else if (urlParams.url) {
      setAssessmentData({
        targetUrl: urlParams.url,
        websiteName: urlParams.name || 'Assessment',
        plan: urlParams.plan || 'Standard',
        contactEmail: urlParams.email || ''
      });
    }
  }, [searchParams]);

  // Default assessment data if none provided
  const currentAssessment = {
    name: assessmentData?.websiteName || "Example Company Assessment",
    url: assessmentData?.targetUrl || "https://example.com",
    plan: assessmentData?.plan || "Both Teams",
    email: assessmentData?.contactEmail || "",
    status: "In Progress",
    progress: 65
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
            <div className="space-y-1">
              <p className="text-muted-foreground">Target: <span className="text-cyber-green font-medium">{currentAssessment.url}</span></p>
              {currentAssessment.email && (
                <p className="text-sm text-muted-foreground">Contact: {currentAssessment.email}</p>
              )}
            </div>
          </div>
          <Badge className="bg-cyber-gradient text-background w-fit mt-4 md:mt-0">
            {currentAssessment.plan}
          </Badge>
        </div>

        {/* Current Assessment */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2 text-cyber-green" />
                Current Assessment
              </CardTitle>
              <Badge variant="outline" className="text-cyber-green border-cyber-green">
                <Activity className="w-4 h-4 mr-1" />
                {currentAssessment.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{currentAssessment.name}</span>
                  <span className="text-muted-foreground">{currentAssessment.url}</span>
                </div>
                <Progress value={currentAssessment.progress} className="mb-2" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{currentAssessment.progress}% Complete</span>
                  <span>ETA: 2.5 hours</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Target className="w-4 h-4 mr-2 text-cyber-green" />
                Findings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Critical</span>
                  <span className="font-semibold text-destructive">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">High</span>
                  <span className="font-semibold text-warning">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Medium</span>
                  <span className="font-semibold text-info">12</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-cyber-green" />
                Quick Wins
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyber-green mb-1">3</div>
                <p className="text-sm text-muted-foreground">Easy fixes available</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center">
                <Clock className="w-4 h-4 mr-2 text-cyber-green" />
                Time Remaining
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning mb-1">2.5h</div>
                <p className="text-sm text-muted-foreground">Until completion</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
              <Button variant="outline" className="flex items-center">
                <AlertTriangle className="w-4 h-4 mr-2" />
                View Findings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;