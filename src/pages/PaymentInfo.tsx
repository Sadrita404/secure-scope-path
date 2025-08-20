import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CreditCard, QrCode } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

const PaymentInfo = () => {
  const [searchParams] = useSearchParams();
  const plan = searchParams.get('plan');
  const price = searchParams.get('price');
  
  const [formData, setFormData] = useState({
    websiteName: '',
    targetUrl: '',
    contactEmail: '',
    companyName: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    // For now, redirect to dashboard
    // Note: Payment processing requires Supabase connection
    window.location.href = '/dashboard';
  };

  return (
    <Layout>
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back Button */}
          <Link to="/pricing" className="inline-flex items-center text-cyber-green hover:text-cyber-green-bright mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Plans
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Form */}
            <div>
              <h1 className="text-3xl font-bold mb-2">Assessment Details</h1>
              <p className="text-muted-foreground mb-8">
                Provide your website information for the {plan} assessment
              </p>

              <Card className="p-6">
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="websiteName">Website/Company Name</Label>
                    <Input
                      id="websiteName"
                      placeholder="e.g., My Company Website"
                      value={formData.websiteName}
                      onChange={(e) => handleInputChange('websiteName', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="targetUrl">Target URL</Label>
                    <Input
                      id="targetUrl"
                      placeholder="https://example.com"
                      value={formData.targetUrl}
                      onChange={(e) => handleInputChange('targetUrl', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="contactEmail">Contact Email</Label>
                    <Input
                      id="contactEmail"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.contactEmail}
                      onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="companyName">Company Name (Optional)</Label>
                    <Input
                      id="companyName"
                      placeholder="Your Company Ltd."
                      value={formData.companyName}
                      onChange={(e) => handleInputChange('companyName', e.target.value)}
                    />
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Payment Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Payment Summary</h2>
              
              <Card className="p-6 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">{plan} Plan</span>
                  <span className="text-2xl font-bold text-cyber-green">{price}</span>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="text-2xl font-bold">{price}</span>
                  </div>
                </div>
              </Card>

              {/* QR Code Section */}
              <Card className="p-6 mb-6">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 bg-muted rounded-lg flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Scan QR code for quick payment
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Or use the payment button below
                  </p>
                </div>
              </Card>

              {/* Payment Button */}
              <Button 
                onClick={handlePayment}
                className="w-full btn-cyber text-lg py-6"
                disabled={!formData.websiteName || !formData.targetUrl || !formData.contactEmail}
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Proceed to Payment
              </Button>

              <p className="text-xs text-muted-foreground mt-4 text-center">
                By proceeding, you agree to our terms of service and privacy policy
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PaymentInfo;