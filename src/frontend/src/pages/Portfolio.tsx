import { ExternalLink, Code } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'E-commerce Fashion Store',
      description:
        'A modern online fashion store with advanced product filtering, wishlist functionality, and secure checkout. Built with React and integrated with Stripe for payments.',
      image: '/assets/generated/portfolio-1.dim_600x400.png',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      features: [
        'Product catalog with 1000+ items',
        'Advanced search and filtering',
        'Secure payment processing',
        'Order tracking system',
      ],
    },
    {
      title: 'Corporate Business Website',
      description:
        'Professional corporate website for a consulting firm featuring a custom CMS, blog, team profiles, and contact forms. Optimized for SEO and mobile devices.',
      image: '/assets/generated/portfolio-2.dim_600x400.png',
      category: 'Corporate',
      technologies: ['WordPress', 'PHP', 'MySQL', 'JavaScript'],
      features: [
        'Custom WordPress theme',
        'Blog with categories',
        'Team member profiles',
        'Contact form integration',
      ],
    },
    {
      title: 'SaaS Project Management Tool',
      description:
        'Cloud-based project management application with real-time collaboration, task tracking, and analytics dashboard. Supports teams of all sizes.',
      image: '/assets/generated/portfolio-3.dim_600x400.png',
      category: 'Web Application',
      technologies: ['React', 'TypeScript', 'Firebase', 'Material-UI'],
      features: [
        'Real-time collaboration',
        'Task management',
        'Analytics dashboard',
        'Team workspace',
      ],
    },
    {
      title: 'Restaurant Booking Platform',
      description:
        'Online reservation system for restaurants with table management, menu display, and customer reviews. Integrated with Google Maps for location services.',
      image: '/assets/generated/portfolio-1.dim_600x400.png',
      category: 'Web Application',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Google Maps API'],
      features: [
        'Table reservation system',
        'Menu management',
        'Customer reviews',
        'Location integration',
      ],
    },
    {
      title: 'Real Estate Listing Website',
      description:
        'Property listing platform with advanced search filters, virtual tours, and agent profiles. Features include mortgage calculator and neighborhood information.',
      image: '/assets/generated/portfolio-2.dim_600x400.png',
      category: 'E-commerce',
      technologies: ['Next.js', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
      features: [
        'Property search & filters',
        'Virtual tour integration',
        'Mortgage calculator',
        'Agent profiles',
      ],
    },
    {
      title: 'Educational Learning Platform',
      description:
        'Online learning platform with video courses, quizzes, progress tracking, and certificates. Supports multiple instructors and course categories.',
      image: '/assets/generated/portfolio-3.dim_600x400.png',
      category: 'Web Application',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS S3'],
      features: [
        'Video course hosting',
        'Interactive quizzes',
        'Progress tracking',
        'Certificate generation',
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Portfolio</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-white/90">
            Explore our successful projects and see how we've helped businesses achieve their digital goals
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-primary px-6 py-2 text-sm font-medium text-white">All Projects</button>
            <button className="rounded-full border border-border px-6 py-2 text-sm font-medium hover:bg-accent">
              E-commerce
            </button>
            <button className="rounded-full border border-border px-6 py-2 text-sm font-medium hover:bg-accent">
              Corporate
            </button>
            <button className="rounded-full border border-border px-6 py-2 text-sm font-medium hover:bg-accent">
              Web Applications
            </button>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-border bg-card transition-all hover:shadow-xl"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute bottom-4 left-4 right-4 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <button className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-medium text-primary">
                      <ExternalLink className="h-4 w-4" />
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                  <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <Code className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">150+</div>
              <div className="text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">100+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">98%</div>
              <div className="text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
