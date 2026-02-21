import { useState } from 'react';
import { useSubmitContactForm } from '../hooks/useQueries';
import { Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const submitMutation = useSubmitContactForm();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = 'Project details are required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await submitMutation.mutateAsync(formData);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', phone: '', projectDetails: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitSuccess && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-green-800">
          Thank you! Your message has been sent successfully. We'll get back to you soon.
        </div>
      )}

      {submitMutation.isError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-red-800">
          Something went wrong. Please try again later.
        </div>
      )}

      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.name ? 'border-red-500' : 'border-input'
          } bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
          placeholder="Your full name"
        />
        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.email ? 'border-red-500' : 'border-input'
          } bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium">
          Phone *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className={`w-full rounded-lg border ${
            errors.phone ? 'border-red-500' : 'border-input'
          } bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
          placeholder="+1 (234) 567-890"
        />
        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="projectDetails" className="mb-2 block text-sm font-medium">
          Project Details *
        </label>
        <textarea
          id="projectDetails"
          name="projectDetails"
          value={formData.projectDetails}
          onChange={handleChange}
          rows={5}
          className={`w-full rounded-lg border ${
            errors.projectDetails ? 'border-red-500' : 'border-input'
          } bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
          placeholder="Tell us about your project requirements..."
        />
        {errors.projectDetails && <p className="mt-1 text-sm text-red-500">{errors.projectDetails}</p>}
      </div>

      <button
        type="submit"
        disabled={submitMutation.isPending}
        className="w-full rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitMutation.isPending ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}
