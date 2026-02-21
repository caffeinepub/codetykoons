import { Code, ShoppingCart, Globe, Search, Wrench, Plug, ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export default function Services() {
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description:
        'We create bespoke websites tailored to your unique business requirements. From simple landing pages to complex multi-page sites, our custom solutions are designed to reflect your brand identity and engage your target audience effectively.',
      features: [
        'Responsive design for all devices',
        'Custom UI/UX design',
        'Content Management System (CMS)',
        'Performance optimization',
        'Cross-browser compatibility',
      ],
      image: '/assets/generated/service-web-dev.dim_400x300.png',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Website Development',
      description:
        'Launch your online store with our comprehensive e-commerce solutions. We build secure, scalable platforms with intuitive shopping experiences, secure payment gateways, inventory management, and powerful admin dashboards.',
      features: [
        'Secure payment gateway integration',
        'Product catalog management',
        'Shopping cart & checkout',
        'Order tracking system',
        'Customer account management',
      ],
      image: '/assets/generated/service-ecommerce.dim_400x300.png',
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description:
        'Transform your business processes with custom web applications. We develop scalable, cloud-based solutions that streamline operations, improve efficiency, and provide real-time insights into your business performance.',
      features: [
        'Custom business logic',
        'Real-time data processing',
        'User authentication & authorization',
        'Database design & optimization',
        'API development',
      ],
      image: '/assets/generated/service-web-apps.dim_400x300.png',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        'Increase your online visibility and drive organic traffic with our comprehensive SEO services. We optimize your website structure, content, and technical elements to rank higher in search engine results and attract qualified leads.',
      features: [
        'Keyword research & strategy',
        'On-page SEO optimization',
        'Technical SEO audit',
        'Content optimization',
        'Performance monitoring',
      ],
      image: '/assets/generated/service-seo.dim_400x300.png',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance & Support',
      description:
        'Keep your website running smoothly with our ongoing maintenance and support services. We handle updates, security patches, backups, and troubleshooting so you can focus on growing your business.',
      features: [
        'Regular security updates',
        'Performance monitoring',
        'Content updates',
        'Bug fixes & troubleshooting',
        '24/7 technical support',
      ],
      image: '/assets/generated/service-maintenance.dim_400x300.png',
    },
    {
      icon: Plug,
      title: 'API Integration',
      description:
        'Extend your website functionality by integrating third-party services and APIs. From payment processors to CRM systems, we seamlessly connect your website with the tools you need to run your business efficiently.',
      features: [
        'Third-party API integration',
        'Custom API development',
        'Payment gateway setup',
        'CRM & marketing tool integration',
        'Data synchronization',
      ],
      image: '/assets/generated/service-api.dim_400x300.png',
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Services</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-white/90">
            Comprehensive web development solutions designed to help your business succeed online
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 gap-12 lg:grid-cols-2 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-8 w-8" />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                    <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={isEven ? 'lg:col-start-2' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="overflow-hidden rounded-xl border border-border shadow-lg">
                      <img src={service.image} alt={service.title} className="h-full w-full object-cover" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-primary/90 hover:scale-105"
          >
            Contact Us Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
