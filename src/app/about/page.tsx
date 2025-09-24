import { Metadata } from "next";
import { aboutContent } from "@/content/about";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - Nucleus IOB",
  description:
    "Learn about Nucleus IOB's mission to empower AI with transparency, accountability, and personalized intelligence through infinite memory and cross-chain harmony.",
  openGraph: {
    title: "About - Nucleus IOB",
    description:
      "Learn about Nucleus IOB's mission to empower AI with transparency, accountability, and personalized intelligence through infinite memory and cross-chain harmony.",
  },
};

export default function AboutPage() {
  const {
    hero,
    mission,
    aiipModules,
    differentiation,
    technicalFoundation,
    cta,
  } = aboutContent;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 gradient-bg">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 border border-primary/20">
              <span className="text-lg">{hero.tokenBadge.icon}</span>
              {hero.tokenBadge.text}
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display tracking-tight">
            {hero.title}{" "}
            <span className="text-gradient">{hero.titleHighlight}</span>
          </h1>
          <p className="mt-8 text-elegant text-muted-foreground max-w-3xl mx-auto">
            {hero.description}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display mb-8 text-center">
              {mission.title}
            </h2>
            <p className="text-elegant text-muted-foreground mb-8 text-center">
              {mission.description}
            </p>
            <p className="text-elegant text-muted-foreground mb-12 text-center">
              {mission.additionalText}
            </p>

            <div className="card-enhanced rounded-lg p-8 text-center">
              <div className="mb-6">
                <span className="text-6xl text-primary block mb-4">
                  {mission.vision.icon}
                </span>
                <h3 className="text-2xl font-semibold heading-elegant mb-4">
                  {mission.vision.title}
                </h3>
                <p className="text-elegant text-muted-foreground">
                  {mission.vision.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIIP Modules Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {aiipModules.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
              {aiipModules.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiipModules.modules.map((module, index) => (
              <div
                key={index}
                className="card-enhanced rounded-lg p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">{module.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold heading-elegant">
                    {module.title}
                  </h3>
                </div>
                <p className="text-elegant text-muted-foreground">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display mb-8 text-center">
              {differentiation.title}
            </h2>
            <p className="text-elegant text-muted-foreground mb-8 text-center">
              {differentiation.description}
            </p>

            <div className="card-enhanced rounded-lg p-8 mb-12">
              <blockquote className="text-xl font-medium text-center text-primary mb-8">
                "{differentiation.quote}"
              </blockquote>
            </div>

            <div className="space-y-6">
              {differentiation.points.map((point, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-elegant text-muted-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technical Foundation Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {technicalFoundation.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-3xl mx-auto">
              {technicalFoundation.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {technicalFoundation.features.map((feature, index) => (
              <div key={index} className="card-enhanced rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{feature.icon}</span>
                  <h3 className="text-lg font-semibold heading-elegant">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="card-enhanced rounded-lg p-8 text-center">
            <div className="mb-6">
              <span className="text-6xl text-primary block mb-4">
                {technicalFoundation.highlight.icon}
              </span>
              <h3 className="text-2xl font-semibold heading-elegant mb-4">
                {technicalFoundation.highlight.title}
              </h3>
              <p className="text-elegant text-muted-foreground">
                {technicalFoundation.highlight.description}
              </p>
            </div>
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
