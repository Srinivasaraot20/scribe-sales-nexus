import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, Users, Database, Phone } from 'lucide-react';

export function Privacy() {
  const lastUpdated = "January 1, 2025";

  const sections = [
    {
      title: "Information We Collect",
      icon: Database,
      content: [
        "Personal information such as name, email address, and phone number when you create an account",
        "Billing and shipping addresses for order processing and delivery",
        "Payment information (processed securely through our payment partners)",
        "Order history and preferences to improve your shopping experience",
        "Device and browser information for security and optimization purposes",
        "Cookies and similar technologies to enhance website functionality"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Eye,
      content: [
        "Process and fulfill your orders, including payment processing and delivery",
        "Communicate with you about your orders, account, and customer service",
        "Send you promotional materials and updates (with your consent)",
        "Improve our website, products, and services based on your usage patterns",
        "Prevent fraud and ensure the security of our platform",
        "Comply with legal obligations and protect our legal rights"
      ]
    },
    {
      title: "Information Sharing",
      icon: Users,
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted service providers who help us operate our business",
        "Payment processors receive necessary information to process your transactions securely",
        "Shipping partners receive delivery information to fulfill your orders",
        "We may disclose information when required by law or to protect our rights",
        "In case of business merger or acquisition, information may be transferred to the new entity"
      ]
    },
    {
      title: "Data Security",
      icon: Shield,
      content: [
        "We use industry-standard encryption to protect your personal information",
        "Secure Socket Layer (SSL) technology protects data transmission",
        "Regular security audits and updates to maintain protection standards",
        "Access to personal information is limited to authorized personnel only",
        "We maintain physical, electronic, and procedural safeguards",
        "Immediate notification procedures in case of any security breaches"
      ]
    },
    {
      title: "Your Privacy Rights",
      icon: Lock,
      content: [
        "Access and review the personal information we have about you",
        "Request correction of inaccurate or incomplete information",
        "Request deletion of your personal information (subject to legal requirements)",
        "Opt-out of marketing communications at any time",
        "Request a copy of your personal information in a portable format",
        "File complaints with relevant data protection authorities"
      ]
    },
    {
      title: "Contact Information",
      icon: Phone,
      content: [
        "If you have questions about this Privacy Policy, please contact us:",
        "Email: srinurao1902@gmail.com",
        "Phone: +91-9876543210",
        "Address: 123 Education Street, New Delhi, India 110001",
        "We will respond to privacy-related inquiries within 30 days",
        "You can also reach out through our Help Center for general questions"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                At BookStore, we are committed to protecting your privacy and ensuring the security 
                of your personal information. This Privacy Policy describes how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By using our website and services, you consent to the collection and use of your 
                information as outlined in this policy. We encourage you to read this policy 
                carefully and contact us if you have any questions.
              </p>
            </CardContent>
          </Card>

          {/* Privacy Sections */}
          <div className="space-y-6">
            {sections.map((section) => {
              const IconComponent = section.icon;
              return (
                <Card key={section.title}>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <div className="bg-primary/10 p-2 rounded-lg">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <span>{section.title}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.content.map((item, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Additional Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use cookies and similar tracking technologies to enhance your browsing experience, 
                analyze website traffic, and understand user preferences. Cookies are small data files 
                stored on your device that help us remember your preferences and improve our services.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                You can control cookie settings through your browser preferences. However, disabling 
                certain cookies may affect the functionality of our website. We use both session 
                cookies (which expire when you close your browser) and persistent cookies (which 
                remain on your device for a set period).
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Changes to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our 
                practices, technology, legal requirements, or other factors. We will notify you 
                of any material changes by posting the updated policy on our website and updating 
                the "Last updated" date. We encourage you to review this policy periodically to 
                stay informed about how we protect your information.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}