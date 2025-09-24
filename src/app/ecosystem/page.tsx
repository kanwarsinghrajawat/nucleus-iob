import { Metadata } from "next";
import { ecosystemContent } from "@/content/ecosystem";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecosystem - Nucleus IOB",
  description:
    "Explore the growing ecosystem of projects, integrations, and community resources building on the Internet of Blockchains.",
  openGraph: {
    title: "Ecosystem - Nucleus IOB",
    description:
      "Explore the growing ecosystem of projects, integrations, and community resources building on the Internet of Blockchains.",
  },
};

export default function EcosystemPage() {
  const {
    hero,
    projects,
    integrationTypes,
    quickstarts,
    community,
    stats,
    cta,
  } = ecosystemContent;

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

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {projects.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {projects.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.projects.map((project, index) => (
              <div
                key={index}
                className="card-enhanced rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold heading-elegant">
                      {project.name}
                    </h3>
                    <span
                      className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        project.status === "Live"
                          ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                          : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
                <p className="text-elegant text-muted-foreground mb-3">
                  {project.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  {project.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {integrationTypes.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {integrationTypes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {integrationTypes.types.map((type, index) => (
              <div key={index} className="card-enhanced rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{type.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold heading-elegant">
                      {type.title}
                    </h3>
                    <p className="text-elegant text-muted-foreground">
                      {type.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {type.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-elegant">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quickstarts Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {quickstarts.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {quickstarts.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickstarts.guides.map((guide, index) => (
              <div
                key={index}
                className="card-enhanced rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-semibold heading-elegant mb-3">
                  {guide.title}
                </h3>
                <p className="text-elegant text-muted-foreground mb-4">
                  {guide.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {guide.duration}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      guide.difficulty === "Beginner"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        : guide.difficulty === "Intermediate"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                    }`}
                  >
                    {guide.difficulty}
                  </span>
                </div>
                <Link
                  href={guide.href}
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
                >
                  Get Started <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {community.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {community.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {community.resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                target={resource.href.startsWith("http") ? "_blank" : undefined}
                className="card-enhanced rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </span>
                  <h3 className="text-xl font-semibold heading-elegant">
                    {resource.title}
                  </h3>
                </div>
                <p className="text-elegant text-muted-foreground">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {stats.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {stats.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.metrics.map((metric, index) => (
              <div
                key={index}
                className="card-enhanced rounded-lg p-8 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">
                  {metric.number}
                </div>
                <div className="text-xl font-semibold heading-elegant mb-2">
                  {metric.label}
                </div>
                <div className="text-elegant text-muted-foreground">
                  {metric.description}
                </div>
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
                target={button.href.startsWith("http") ? "_blank" : undefined}
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
