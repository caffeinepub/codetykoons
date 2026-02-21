import { Mail, Phone, MapPin, MessageSquare } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl">Get In Touch</h1>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-white/90">
            Ready to start your project? We'd love to hear from you. Fill out the form below or reach out directly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Contact Information</h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Have a question or want to discuss your project? We're here to help. Reach out through any of these
                channels.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <a
                      href="mailto:info@codetykoons.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@codetykoons.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone</h3>
                    <a
                      href="tel:+1234567890"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-600">
                    <SiWhatsapp className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">WhatsApp</h3>
                    <a
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-green-600 transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Location</h3>
                    <p className="text-muted-foreground">
                      123 Tech Street
                      <br />
                      San Francisco, CA 94102
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 rounded-xl border border-border bg-card p-6">
                <div className="mb-4 flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="rounded-xl border border-border bg-card p-8">
                <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="overflow-hidden rounded-xl border border-border">
            <div className="h-96 bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map integration placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
