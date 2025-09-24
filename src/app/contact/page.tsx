import { Metadata } from "next";
import { contactContent } from "@/content/contact";
import { ArrowRight, Mail, Globe, Users, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact - Nucleus IOB",
  description:
    "Get in touch with the Nucleus IOB team. Ready to join the Internet of Blockchains revolution? Let's discuss partnerships, integrations, and the future of AI-powered blockchain interoperability.",
  openGraph: {
    title: "Contact - Nucleus IOB",
    description:
      "Get in touch with the Nucleus IOB team. Ready to join the Internet of Blockchains revolution? Let's discuss partnerships, integrations, and the future of AI-powered blockchain interoperability.",
  },
};

export default function ContactPage() {
  const { hero, form, contactInfo, socialMedia, partnershipTypes, faq, cta } =
    contactContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </h1>
          <p className="mt-8 text-elegant text-muted-foreground max-w-3xl mx-auto">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-display mb-6">
                {form.title}
              </h2>
            </div>

            <div className="card-enhanced rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium mb-2"
                    >
                      {form.fields[0].label}{" "}
                      {form.fields[0].required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder={form.fields[0].placeholder}
                      required={form.fields[0].required}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium mb-2"
                    >
                      {form.fields[1].label}{" "}
                      {form.fields[1].required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      placeholder={form.fields[1].placeholder}
                      required={form.fields[1].required}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {form.fields[2].label}{" "}
                      {form.fields[2].required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder={form.fields[2].placeholder}
                      required={form.fields[2].required}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium mb-2"
                    >
                      {form.fields[3].label}{" "}
                      {form.fields[3].required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      placeholder={form.fields[3].placeholder}
                      required={form.fields[3].required}
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="partnership"
                    className="block text-sm font-medium mb-2"
                  >
                    {form.fields[4].label}{" "}
                    {form.fields[4].required && (
                      <span className="text-red-500">*</span>
                    )}
                  </label>
                  <select
                    id="partnership"
                    name="partnership"
                    required={form.fields[4].required}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  >
                    {form.fields[4].options?.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    {form.fields[5].label}{" "}
                    {form.fields[5].required && (
                      <span className="text-red-500">*</span>
                    )}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder={form.fields[5].placeholder}
                    required={form.fields[5].required}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    {form.fields[6].label}{" "}
                    {form.fields[6].required && (
                      <span className="text-red-500">*</span>
                    )}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={form.fields[6].rows}
                    placeholder={form.fields[6].placeholder}
                    required={form.fields[6].required}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-vertical"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary-enhanced text-white py-3 px-6 rounded-lg font-medium hover:scale-105 transition-all duration-300"
                >
                  {form.submitText}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {contactInfo.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.items.map((item, index) => (
              <div
                key={index}
                className="card-enhanced rounded-lg p-6 text-center"
              >
                <div className="mb-4">
                  {item.icon === "📧" && (
                    <Mail className="h-8 w-8 mx-auto text-primary" />
                  )}
                  {item.icon === "🌐" && (
                    <Globe className="h-8 w-8 mx-auto text-primary" />
                  )}
                  {item.icon === "👥" && (
                    <Users className="h-8 w-8 mx-auto text-primary" />
                  )}
                  {item.icon === "⏰" && (
                    <Clock className="h-8 w-8 mx-auto text-primary" />
                  )}
                </div>
                <h3 className="text-lg font-semibold heading-elegant mb-2">
                  {item.title}
                </h3>
                <p className="text-elegant text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {socialMedia.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {socialMedia.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMedia.platforms.map((platform, index) => (
              <Link
                key={index}
                href={platform.href}
                target="_blank"
                className="card-enhanced rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {platform.icon}
                  </span>
                </div>
                <h3 className="text-lg font-semibold heading-elegant mb-2">
                  {platform.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {platform.handle}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {partnershipTypes.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {partnershipTypes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partnershipTypes.types.map((type, index) => (
              <div
                key={index}
                className="card-enhanced rounded-lg p-6 text-center"
              >
                <div className="mb-4">
                  <span className="text-4xl">{type.icon}</span>
                </div>
                <h3 className="text-lg font-semibold heading-elegant mb-3">
                  {type.title}
                </h3>
                <p className="text-elegant text-muted-foreground">
                  {type.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {faq.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {faq.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faq.questions.map((item, index) => (
              <div key={index} className="card-enhanced rounded-lg p-6">
                <h3 className="text-lg font-semibold heading-elegant mb-3">
                  {item.question}
                </h3>
                <p className="text-elegant text-muted-foreground">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display mb-4">
            {cta.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {cta.buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className={`inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg transition-all duration-300 ${
                  button.primary
                    ? "btn-primary-enhanced text-white hover:scale-105"
                    : "border border-border bg-background hover:bg-muted"
                }`}
              >
                {button.text}
                {button.primary && <ArrowRight className="ml-2 h-4 w-4" />}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
