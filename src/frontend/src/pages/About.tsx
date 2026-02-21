import { Target, Shield, Zap, Users, Award, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering solutions that drive real business results.',
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Every solution we build is designed with security and data protection in mind.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'We optimize every aspect to ensure lightning-fast load times and smooth experiences.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We work closely with you every step of the way.',
    },
  ];

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '100+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">About Codetykoons</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-white/90">
            We are a team of passionate developers dedicated to building scalable, secure, and high-performance web
            solutions that empower businesses to thrive in the digital age.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">Our Mission</h2>
              <p className="mb-4 text-lg text-muted-foreground">
                At Codetykoons, we believe that every business deserves a powerful digital presence. Our mission is to
                transform ideas into reality by creating custom web solutions that are not only visually stunning but
                also functionally robust.
              </p>
              <p className="mb-4 text-lg text-muted-foreground">
                We specialize in building <strong>scalable</strong> applications that grow with your business,{' '}
                <strong>secure</strong> platforms that protect your data, and <strong>high-performance</strong> websites
                that deliver exceptional user experiences.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a startup looking to establish your online presence or an established company seeking to
                modernize your digital infrastructure, we have the expertise to bring your vision to life.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div key={index} className="rounded-xl border border-border bg-card p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-8 w-8" />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Track Record</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Numbers that speak to our commitment and success
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary md:text-5xl">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Our Approach</h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              A proven process that delivers exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                1
              </div>
              <h3 className="mb-3 text-xl font-semibold">Discovery & Planning</h3>
              <p className="text-muted-foreground">
                We start by understanding your business goals, target audience, and technical requirements to create a
                comprehensive project roadmap.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                2
              </div>
              <h3 className="mb-3 text-xl font-semibold">Design & Development</h3>
              <p className="text-muted-foreground">
                Our team crafts beautiful, user-friendly designs and develops robust, scalable solutions using the
                latest technologies and best practices.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-8">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-xl">
                3
              </div>
              <h3 className="mb-3 text-xl font-semibold">Testing & Launch</h3>
              <p className="text-muted-foreground">
                Rigorous testing ensures everything works flawlessly before launch. Post-launch, we provide ongoing
                support and maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">Why Businesses Trust Us</h2>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <Award className="mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Quality Guaranteed</h3>
              <p className="text-white/90">Every project meets our high standards of excellence</p>
            </div>
            <div>
              <TrendingUp className="mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Growth Focused</h3>
              <p className="text-white/90">Solutions designed to scale with your business</p>
            </div>
            <div>
              <Users className="mx-auto mb-4 h-12 w-12" />
              <h3 className="mb-2 text-xl font-semibold">Collaborative Partnership</h3>
              <p className="text-white/90">We work as an extension of your team</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
