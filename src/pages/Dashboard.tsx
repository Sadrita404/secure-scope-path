import Layout from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Download, 
  Clock,
  Target,
  Activity,
  TrendingDown
} from "lucide-react";

const Dashboard = () => {
  // Mock data for the green-line graph
  const riskData = [
    { time: "00:00", risk: 85, coverage: 10 },
    { time: "02:00", risk: 78, coverage: 25 },
    { time: "04:00", risk: 65, coverage: 45 },
    { time: "06:00", risk: 52, coverage: 70 },
    { time: "08:00", risk: 38, coverage: 85 },
    { time: "10:00", risk: 28, coverage: 95 },
  ];

  const statusSteps = [
    { name: "Queued", status: "completed", time: "10:30 AM" },
    { name: "Initialized", status: "completed", time: "10:32 AM" },
    { name: "In Progress", status: "current", time: "10:35 AM" },
    { name: "Analysis", status: "pending", time: "~12:00 PM" },
    { name: "Report Ready", status: "pending", time: "~12:30 PM" },
    { name: "Completed", status: "pending", time: "~1:00 PM" },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Assessment Dashboard</h1>
              <p className="text-muted-foreground">example.com • Red + Blue Team Assessment</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="border-cyber-green text-cyber-green">
                Both Plan
              </Badge>
              <Badge variant="secondary">
                Active
              </Badge>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Overall Progress</span>
              <span className="text-sm text-muted-foreground">~2h remaining</span>
            </div>
            <Progress value={65} className="h-2" />
          </div>
          
          <p className="text-sm text-muted-foreground">
            Assessment Window: Today 10:30 AM - 6:00 PM IST
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Status Timeline */}
          <div className="lg:col-span-1">
            <Card className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-cyber-green" />
                  Live Status Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {statusSteps.map((step, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        step.status === 'completed' 
                          ? 'bg-cyber-green' 
                          : step.status === 'current'
                          ? 'bg-cyber-green animate-pulse'
                          : 'bg-muted'
                      }`} />
                      <div className="flex-1">
                        <p className={`font-medium ${
                          step.status === 'completed' || step.status === 'current'
                            ? 'text-foreground'
                            : 'text-muted-foreground'
                        }`}>
                          {step.name}
                        </p>
                        <p className="text-sm text-muted-foreground">{step.time}</p>
                        {step.status === 'current' && (
                          <p className="text-xs text-cyber-green mt-1">
                            authorized checks executing within scope
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <Card className="card-cyber">
                <CardContent className="p-4 text-center">
                  <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-warning" />
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Key Findings</p>
                </CardContent>
              </Card>
              
              <Card className="card-cyber">
                <CardContent className="p-4 text-center">
                  <TrendingDown className="w-8 h-8 mx-auto mb-2 text-cyber-green" />
                  <p className="text-2xl font-bold">68%</p>
                  <p className="text-sm text-muted-foreground">Risk Reduction</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Graph and Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Risk Trend Graph */}
            <Card className="card-cyber">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <TrendingDown className="w-5 h-5 mr-2 text-cyber-green" />
                    Risk Trend Over Time
                  </span>
                  <div className="flex items-center space-x-2">
                    <button className="text-sm px-3 py-1 bg-cyber-green text-background rounded-lg">
                      Risk Score
                    </button>
                    <button className="text-sm px-3 py-1 bg-muted text-muted-foreground rounded-lg">
                      Coverage %
                    </button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={riskData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                      <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                      <YAxis stroke="hsl(var(--muted-foreground))" />
                      <Tooltip 
                        contentStyle={{
                          backgroundColor: "hsl(var(--card))",
                          border: "1px solid hsl(var(--border))",
                          borderRadius: "8px"
                        }}
                      />
                      <Line 
                        type="monotone" 
                        dataKey="risk" 
                        stroke="hsl(var(--cyber-green))" 
                        strokeWidth={3}
                        dot={{ fill: "hsl(var(--cyber-green))", strokeWidth: 2, r: 4 }}
                        activeDot={{ r: 6, fill: "hsl(var(--cyber-green-bright))" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            {/* Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="card-cyber">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Severity Mix</p>
                      <div className="mt-2 space-y-1">
                        <div className="flex justify-between text-sm">
                          <span>High</span>
                          <span className="text-danger">2</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Medium</span>
                          <span className="text-warning">5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Low</span>
                          <span className="text-info">5</span>
                        </div>
                      </div>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-warning" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-cyber">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">Quick Wins</p>
                      <p className="text-2xl font-bold mt-1">3</p>
                      <p className="text-xs text-cyber-green mt-1">Top priority fixes</p>
                    </div>
                    <Target className="w-8 h-8 text-cyber-green" />
                  </div>
                </CardContent>
              </Card>

              <Card className="card-cyber">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">ETA to Report</p>
                      <p className="text-2xl font-bold mt-1">~2h</p>
                      <p className="text-xs text-muted-foreground mt-1">remaining</p>
                    </div>
                    <Clock className="w-8 h-8 text-info" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results & Reports */}
            <Card className="card-cyber">
              <CardHeader>
                <CardTitle>Results & Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <button className="flex items-center justify-center p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </button>
                  <button className="flex items-center justify-center p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors">
                    <Shield className="w-5 h-5 mr-2" />
                    View Executive Summary
                  </button>
                  <button className="flex items-center justify-center p-4 border border-border rounded-xl hover:bg-muted/50 transition-colors">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    View Technical Notes
                  </button>
                  <button className="flex items-center justify-center p-4 border border-cyber-green text-cyber-green rounded-xl hover:bg-cyber-green/10 transition-colors">
                    <Target className="w-5 h-5 mr-2" />
                    Schedule Re-test
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;