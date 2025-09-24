import { Metadata } from "next";
import { technicalContent } from "@/content/technical";
import { ArrowRight, Code, Database, Shield, Cpu } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Technical Architecture - Nucleus IOB",
  description:
    "Deep dive into the technical foundation of the Internet of Blockchains - from AI-powered interoperability to infinite memory storage systems.",
  openGraph: {
    title: "Technical Architecture - Nucleus IOB",
    description:
      "Deep dive into the technical foundation of the Internet of Blockchains - from AI-powered interoperability to infinite memory storage systems.",
  },
};

export default function TechnicalPage() {
  const {
    hero,
    components,
    architecture,
    security,
    memorySystem,
    apis,
    examples,
    resources,
    cta,
  } = technicalContent;

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

      {/* Components Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {components.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {components.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {components.components.map((component, index) => (
              <div key={index} className="card-enhanced rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{component.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold heading-elegant">
                      {component.title}
                    </h3>
                    <p className="text-elegant text-muted-foreground">
                      {component.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {component.technicalDetails.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-elegant">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {architecture.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {architecture.description}
            </p>
          </div>

          <div className="space-y-8">
            {architecture.layers.map((layer, index) => (
              <div key={index} className="card-enhanced rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold heading-elegant">
                      {layer.layer}
                    </h3>
                    <p className="text-elegant text-muted-foreground">
                      {layer.description}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {layer.components.map((component, compIndex) => (
                    <div key={compIndex} className="flex items-start gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-elegant">{component}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {security.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {security.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {security.features.map((feature, index) => (
              <div key={index} className="card-enhanced rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{feature.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold heading-elegant">
                      {feature.title}
                    </h3>
                    <p className="text-elegant text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <Shield className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-elegant">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory System Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {memorySystem.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {memorySystem.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {memorySystem.components.map((component, index) => (
              <div key={index} className="card-enhanced rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-4xl">{component.icon}</span>
                  <div>
                    <h3 className="text-2xl font-semibold heading-elegant">
                      {component.title}
                    </h3>
                    <p className="text-elegant text-muted-foreground">
                      {component.description}
                    </p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {component.technicalDetails.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start gap-3">
                      <Database className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-elegant">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APIs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {apis.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {apis.description}
            </p>
          </div>

          <div className="space-y-12">
            {apis.categories.map((category, index) => (
              <div key={index} className="card-enhanced rounded-lg p-8">
                <h3 className="text-2xl font-semibold heading-elegant mb-4">
                  {category.category}
                </h3>
                <p className="text-elegant text-muted-foreground mb-6">
                  {category.description}
                </p>
                <div className="space-y-6">
                  {category.endpoints.map((endpoint, endpointIndex) => (
                    <div
                      key={endpointIndex}
                      className="border border-border rounded-lg p-6"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <h4 className="text-xl font-semibold heading-elegant">
                          {endpoint.name}
                        </h4>
                        <span className="text-sm text-muted-foreground">
                          {endpoint.endpoint}
                        </span>
                      </div>
                      <p className="text-elegant text-muted-foreground mb-4">
                        {endpoint.description}
                      </p>
                      <div className="flex gap-2">
                        {endpoint.methods.map((method, methodIndex) => (
                          <span
                            key={methodIndex}
                            className={`px-2 py-1 text-xs font-medium rounded ${
                              method === "POST"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                                : method === "GET"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                                  : method === "PUT"
                                    ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                                    : "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400"
                            }`}
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Examples Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {examples.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {examples.description}
            </p>
          </div>

          <div className="space-y-8">
            {examples.examples.map((example, index) => (
              <div key={index} className="card-enhanced rounded-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <Code className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold heading-elegant">
                      {example.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{example.language}</span>
                      <span>•</span>
                      <span>{example.description}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-foreground whitespace-pre-wrap">
                    <code>{example.code}</code>
                  </pre>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {resources.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {resources.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {resources.resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.href}
                target={resource.href.startsWith("http") ? "_blank" : undefined}
                className="card-enhanced rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {resource.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold heading-elegant mb-3">
                  {resource.title}
                </h3>
                <p className="text-elegant text-muted-foreground">
                  {resource.description}
                </p>
              </Link>
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
