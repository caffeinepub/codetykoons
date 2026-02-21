import { Check, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form',
        '1 month support',
        'Social media integration',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$2,499',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 15 pages',
        'Custom design',
        'Advanced SEO optimization',
        'CMS integration',
        '3 months support',
        'Blog functionality',
        'Analytics setup',
        'Performance optimization',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$4,999+',
      description: 'For large-scale projects',
      features: [
        'Unlimited pages',
        'Premium custom design',
        'Full SEO package',
        'Advanced CMS',
        '6 months support',
        'E-commerce functionality',
        'API integrations',
        'Priority support',
        'Custom features',
      ],
      popular: false,
    },
  ];

  const addons = [
    {
      name: 'E-commerce Setup',
      price: '$1,500',
      description: 'Complete online store with payment gateway',
    },
    {
      name: 'Custom Web Application',
      price: '$3,000+',
      description: 'Tailored web app for your business needs',
    },
    {
      name: 'SEO Package',
      price: '$500/mo',
      description: 'Ongoing SEO optimization and monitoring',
    },
    {
      name: 'Maintenance Plan',
      price: '$200/mo',
      description: 'Regular updates, backups, and support',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Transparent Pricing</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-white/90">
            Choose the perfect plan for your business. All plans include responsive design and quality assurance.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl border ${
                  plan.popular ? 'border-primary shadow-xl scale-105' : 'border-border'
                } bg-card p-8 transition-all hover:shadow-lg`}
              >
                {plan.popular && (
                  <div className="absolute right-0 top-0 bg-primary px-4 py-1 text-xs font-semibold text-white">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {!plan.price.includes('+') && <span className="text-muted-foreground"> one-time</span>}
                </div>
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`block w-full rounded-lg py-3 text-center font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Additional Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Enhance your website with these optional add-ons
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addons.map((addon, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6">
                <h3 className="mb-2 text-lg font-semibold">{addon.name}</h3>
                <div className="mb-3 text-2xl font-bold text-primary">{addon.price}</div>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-6">
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold">What's included in the support period?</h3>
              <p className="text-muted-foreground">
                Support includes bug fixes, minor content updates, and technical assistance. Major feature additions are
                quoted separately.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold">Can I upgrade my plan later?</h3>
              <p className="text-muted-foreground">
                Absolutely! You can upgrade your plan at any time. We'll credit your initial payment toward the upgrade.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold">What's the typical project timeline?</h3>
              <p className="text-muted-foreground">
                Starter projects take 2-3 weeks, Professional 4-6 weeks, and Enterprise 8-12 weeks depending on
                complexity.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-2 text-lg font-semibold">Do you offer payment plans?</h3>
              <p className="text-muted-foreground">
                Yes, we offer flexible payment plans for Professional and Enterprise packages. Contact us to discuss
                options.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Not Sure Which Plan is Right?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Schedule a free consultation and we'll help you choose the perfect solution for your needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-white/90 hover:scale-105"
          >
            Get Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
