import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, BookOpen, CreditCard, Truck, RefreshCw, Shield, Users, Phone } from 'lucide-react';
import { useState } from 'react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown } from 'lucide-react';

export function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const helpCategories = [
    {
      title: 'Getting Started',
      icon: BookOpen,
      color: 'bg-blue-500/10 text-blue-600',
      articles: [
        'How to create an account',
        'Browsing and searching for books',
        'Understanding our book categories',
        'Setting up your profile'
      ]
    },
    {
      title: 'Orders & Payment',
      icon: CreditCard,
      color: 'bg-green-500/10 text-green-600',
      articles: [
        'How to place an order',
        'Payment methods accepted',
        'Order confirmation and tracking',
        'Modifying or canceling orders'
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: Truck,
      color: 'bg-purple-500/10 text-purple-600',
      articles: [
        'Delivery times and areas',
        'Shipping charges and policies',
        'Tracking your package',
        'Delivery issues and solutions'
      ]
    },
    {
      title: 'Returns & Refunds',
      icon: RefreshCw,
      color: 'bg-orange-500/10 text-orange-600',
      articles: [
        'Return policy and process',
        'Refund timeline and methods',
        'Exchanging damaged items',
        'Return shipping procedures'
      ]
    },
    {
      title: 'Account & Security',
      icon: Shield,
      color: 'bg-red-500/10 text-red-600',
      articles: [
        'Password reset and recovery',
        'Updating account information',
        'Privacy and data protection',
        'Account security best practices'
      ]
    },
    {
      title: 'Contact & Support',
      icon: Phone,
      color: 'bg-teal-500/10 text-teal-600',
      articles: [
        'How to contact customer support',
        'Support hours and response times',
        'Escalating support issues',
        'Feedback and suggestions'
      ]
    }
  ];

  const faqs = [
    {
      id: 'shipping',
      question: 'How long does shipping take?',
      answer: 'We typically deliver within 3-7 business days depending on your location. Metro cities usually receive orders within 3-4 days, while other locations may take 5-7 days. Express delivery options are available for faster shipping.'
    },
    {
      id: 'payment',
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit and debit cards, UPI payments, net banking, and popular digital wallets like Paytm, PhonePe, and Google Pay. We also offer Cash on Delivery (COD) for orders above ₹500.'
    },
    {
      id: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy for all books. Items must be in original condition with no markings or damages. Return shipping is free for defective or incorrect items. For other returns, a small shipping fee may apply.'
    },
    {
      id: 'tracking',
      question: 'How can I track my order?',
      answer: 'Once your order is shipped, you\'ll receive a tracking number via SMS and email. You can use this number to track your package on our website or the courier partner\'s website. You can also check order status in your account dashboard.'
    },
    {
      id: 'cancellation',
      question: 'Can I cancel my order?',
      answer: 'Yes, you can cancel your order before it ships. Once shipped, cancellation is not possible, but you can return the item after delivery. Refunds for cancelled orders are processed within 3-5 business days.'
    },
    {
      id: 'bulk',
      question: 'Do you offer bulk discounts?',
      answer: 'Yes, we offer attractive discounts for bulk orders (10+ books). Educational institutions and coaching centers can contact our sales team for special pricing. Discounts vary based on quantity and book selection.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Help Center</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Find answers to your questions and get the help you need
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Help Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.title} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${category.color}`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-3">{category.title}</h3>
                    <ul className="space-y-2">
                      {category.articles.slice(0, 3).map((article, index) => (
                        <li key={index} className="text-sm text-muted-foreground hover:text-primary cursor-pointer">
                          • {article}
                        </li>
                      ))}
                      {category.articles.length > 3 && (
                        <li className="text-sm text-primary font-medium">
                          + {category.articles.length - 3} more articles
                        </li>
                      )}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-foreground text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.id}>
                <Collapsible
                  open={openSections.includes(faq.id)}
                  onOpenChange={() => toggleSection(faq.id)}
                >
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-left text-lg">{faq.question}</CardTitle>
                        <ChevronDown className={`h-5 w-5 transition-transform ${
                          openSections.includes(faq.id) ? 'rotate-180' : ''
                        }`} />
                      </div>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <Card className="max-w-2xl mx-auto text-center">
          <CardContent className="p-8">
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Still need help?
            </h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button>Contact Support</Button>
              <Button variant="outline">Send Email</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}