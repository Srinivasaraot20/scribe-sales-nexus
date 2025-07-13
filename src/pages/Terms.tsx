import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, ShoppingCart, RefreshCw, Shield, Users, Gavel } from 'lucide-react';

export function Terms() {
  const lastUpdated = "January 1, 2025";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing and using our website, you accept and agree to be bound by these Terms of Service",
        "If you do not agree to these terms, please do not use our website or services",
        "These terms apply to all visitors, users, and customers of our website",
        "We reserve the right to update these terms at any time without prior notice",
        "Your continued use of the website constitutes acceptance of any changes",
        "These terms are governed by the laws of India"
      ]
    },
    {
      title: "Use of Website",
      icon: Users,
      content: [
        "You must be at least 18 years old to make purchases on our website",
        "You are responsible for maintaining the confidentiality of your account information",
        "You agree to provide accurate, current, and complete information during registration",
        "You may not use our website for any unlawful or unauthorized purpose",
        "You agree not to interfere with or disrupt the website's functionality",
        "We reserve the right to terminate accounts that violate these terms"
      ]
    },
    {
      title: "Orders and Payment",
      icon: ShoppingCart,
      content: [
        "All orders are subject to acceptance and availability of products",
        "We reserve the right to refuse or cancel any order at our discretion",
        "Prices are listed in Indian Rupees and include applicable taxes",
        "Payment must be made in full before shipment of products",
        "We accept major credit cards, debit cards, UPI, and other payment methods",
        "You are responsible for any payment processing fees charged by your bank"
      ]
    },
    {
      title: "Shipping and Delivery",
      icon: RefreshCw,
      content: [
        "We ship to addresses within India only",
        "Delivery times are estimates and may vary based on location and availability",
        "Risk of loss and title for products pass to you upon delivery",
        "We are not responsible for delays caused by shipping carriers",
        "Additional charges may apply for remote or difficult-to-reach locations",
        "Damaged or lost packages should be reported within 48 hours of delivery"
      ]
    },
    {
      title: "Returns and Refunds",
      icon: RefreshCw,
      content: [
        "Returns are accepted within 30 days of delivery for most products",
        "Items must be in original condition with no markings or damage",
        "Customers are responsible for return shipping costs unless item is defective",
        "Refunds will be processed within 5-7 business days after we receive the return",
        "Refunds will be issued to the original payment method",
        "Certain items may be non-returnable as specified in product descriptions"
      ]
    },
    {
      title: "Intellectual Property",
      icon: Shield,
      content: [
        "All content on this website is owned by BookStore or our content suppliers",
        "You may not reproduce, distribute, or create derivative works without permission",
        "Product images, descriptions, and reviews are protected by copyright",
        "Trademarks and logos displayed are the property of their respective owners",
        "Unauthorized use of our intellectual property may result in legal action",
        "You retain ownership of any content you submit, but grant us license to use it"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: Gavel,
      content: [
        "Our liability is limited to the maximum extent permitted by law",
        "We are not liable for indirect, incidental, or consequential damages",
        "Our total liability shall not exceed the amount paid for the specific product",
        "We do not warrant that our website will be error-free or uninterrupted",
        "You use our website and services at your own risk",
        "These limitations apply regardless of the legal theory of liability"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground mb-2">
              Please read these terms carefully before using our website and services.
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Welcome to BookStore. These Terms of Service ("Terms") govern your use of our 
                website and services. By accessing or using our website, you agree to be bound 
                by these Terms and our Privacy Policy.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Please read these Terms carefully before using our services. If you do not agree 
                with any part of these Terms, you may not access or use our website. We reserve 
                the right to modify these Terms at any time, and such modifications will be 
                effective immediately upon posting.
              </p>
            </CardContent>
          </Card>

          {/* Terms Sections */}
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

          {/* Additional Clauses */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The information on this website is provided on an "as is" basis. To the fullest 
                extent permitted by law, BookStore excludes all representations, warranties, 
                conditions, and terms (whether express or implied by statute, common law, or 
                otherwise) other than those expressly set out in these Terms.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                BookStore shall not be liable for any loss or damage (whether direct, indirect, 
                consequential, or otherwise) that may arise from your use of the website or 
                reliance on the information contained within it.
              </p>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: srinurao1902@gmail.com</p>
                <p>Phone: +91-9876543210</p>
                <p>Address: 123 Education Street, New Delhi, India 110001</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}