import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle, Code, ShoppingCart, Globe, Search, Wrench, Plug } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Home() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description: 'Tailored websites built to match your unique business needs and brand identity.',
      image: '/assets/generated/service-web-dev.dim_400x300.png',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Website Development',
      description: 'Powerful online stores with secure payment gateways and inventory management.',
      image: '/assets/generated/service-ecommerce.dim_400x300.png',
    },
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Scalable web applications designed to streamline your business operations.',
      image: '/assets/generated/service-web-apps.dim_400x300.png',
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Boost your online visibility and rank higher in search engine results.',
      image: '/assets/generated/service-seo.dim_400x300.png',
    },
    {
      icon: Wrench,
      title: 'Website Maintenance & Support',
      description: 'Ongoing support to keep your website secure, updated, and running smoothly.',
      image: '/assets/generated/service-maintenance.dim_400x300.png',
    },
    {
      icon: Plug,
      title: 'API Integration',
      description: 'Seamlessly connect third-party services and tools to enhance functionality.',
      image: '/assets/generated/service-api.dim_400x300.png',
    },
  ];

  const whyChooseUs = [
    {
      title: 'Expert Team',
      description: 'Skilled developers with years of experience in cutting-edge technologies.',
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing ensures bug-free, high-performance solutions.',
    },
    {
      title: 'On-Time Delivery',
      description: 'We respect deadlines and deliver projects on schedule.',
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock assistance to address your concerns promptly.',
    },
  ];

  const portfolio = [
    {
      title: 'E-commerce Platform',
      description: 'Modern online store with advanced filtering and secure checkout.',
      image: '/assets/generated/portfolio-1.dim_600x400.png',
      category: 'E-commerce',
    },
    {
      title: 'Corporate Website',
      description: 'Professional business website with CMS integration.',
      image: '/assets/generated/portfolio-2.dim_600x400.png',
      category: 'Corporate',
    },
    {
      title: 'SaaS Application',
      description: 'Cloud-based software solution with real-time analytics.',
      image: '/assets/generated/portfolio-3.dim_600x400.png',
      category: 'Web App',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      text: 'Codetykoons transformed our online presence. Their team delivered a stunning website that exceeded our expectations.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      company: 'GrowthHub',
      text: 'Professional, responsive, and highly skilled. They built our e-commerce platform from scratch and it works flawlessly.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      company: 'Digital Ventures',
      text: 'Outstanding service! The web application they developed has streamlined our operations significantly.',
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/hero-bg.dim_1920x1080.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-blue-600/80" />
        <div className="container relative z-10 mx-auto px-4 py-20 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            We Build Powerful Digital Solutions
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg md:text-xl text-white/90">
            Codetykoons helps businesses grow online with custom websites, e-commerce platforms, and web applications
            that drive results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-white/90 hover:scale-105"
          >
            Get a Free Consultation
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="fade-in-section py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Comprehensive web solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/50"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="fade-in-section py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Codetykoons?</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We deliver excellence through expertise, quality, and dedication
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <CheckCircle className="h-12 w-12 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section className="fade-in-section py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Recent Work</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Explore some of our successful projects
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {portfolio.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-lg"
              >
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-48 w-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-primary px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              View All Projects
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fade-in-section py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Don't just take our word for it
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <p className="mb-4 text-muted-foreground italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="fade-in-section py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Start Your Project?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
            Let's discuss how we can help transform your business with powerful digital solutions.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary transition-all hover:bg-white/90 hover:scale-105"
          >
            Contact Us Today
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
