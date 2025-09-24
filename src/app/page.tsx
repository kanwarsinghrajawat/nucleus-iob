import { Metadata } from "next";
import { homepageContent } from "@/content/homepage";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nucleus IOB - The Internet of Blockchains",
  description:
    "Connecting AI & Blockchain for a Harmonized Future. The intelligent heart of cross-chain interoperability powered by AIIP & PoHG.",
  openGraph: {
    title: "Nucleus IOB - The Internet of Blockchains",
    description:
      "Connecting AI & Blockchain for a Harmonized Future. The intelligent heart of cross-chain interoperability powered by AIIP & PoHG.",
  },
};

export default function HomePage() {
  const {
    hero,
    coreComponents,
    memoryConcept,
    crossChain,
    iobExplanation,
    community,
    finalCta,
  } = homepageContent;

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
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={hero.cta.primary.href}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg btn-primary-enhanced text-white hover:scale-105 transition-all duration-300"
            >
              {hero.cta.primary.text} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={hero.cta.secondary.href}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors"
            >
              {hero.cta.secondary.text}
            </Link>
          </div>
        </div>
      </section>

      {/* Core Components Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {coreComponents.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {coreComponents.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreComponents.components.map((component, index) => (
              <div
                key={index}
                className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 card-enhanced rounded-lg p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">{component.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold heading-elegant">
                      {component.title}
                    </h3>
                  </div>
                </div>
                <p className="text-elegant text-muted-foreground">
                  {component.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memory Concept Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 frosted-glass">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <span className="text-6xl text-primary mb-6 block">
                {memoryConcept.icon}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {memoryConcept.title}
            </h2>
            <p className="text-elegant text-muted-foreground mb-10 max-w-2xl mx-auto">
              {memoryConcept.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {memoryConcept.features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center card-enhanced rounded-lg p-6"
                >
                  <div className="mb-4">
                    <span className="text-4xl block mb-3">{feature.icon}</span>
                    <h3 className="text-lg font-semibold heading-elegant">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-elegant text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Chain Compatibility Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-4">
              {crossChain.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {crossChain.description}
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Connected Blockchains
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {crossChain.blockchains.map((blockchain, index) => (
                <div
                  key={index}
                  className="text-center p-4 hover:shadow-md transition-shadow card-enhanced rounded-lg"
                >
                  <div className="text-2xl mb-2">{blockchain.icon}</div>
                  <div className="text-sm font-medium">{blockchain.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Use Cases
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {crossChain.useCases.map((useCase, index) => (
                <div
                  key={index}
                  className="text-center p-4 hover:shadow-md transition-shadow card-enhanced rounded-lg"
                >
                  <div className="text-sm font-medium">{useCase}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What is IOB Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-4">
              {iobExplanation.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {iobExplanation.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Key Features</h3>
              <ul className="space-y-4">
                {iobExplanation.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-2xl mt-1 flex-shrink-0">
                      {feature.icon}
                    </span>
                    <span className="text-elegant">{feature.title}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-8">
              <div className="text-center">
                <span className="text-6xl block mb-4">🌐</span>
                <h4 className="text-lg font-semibold mb-2">
                  {iobExplanation.highlight.title}
                </h4>
                <p className="text-muted-foreground text-elegant">
                  {iobExplanation.highlight.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display mb-4">
            {community.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {community.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={community.cta.primary.href}
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg btn-primary-enhanced text-white hover:scale-105 transition-all duration-300"
            >
              {community.cta.primary.text}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={community.cta.secondary.href}
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors"
            >
              {community.cta.secondary.text}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display mb-4">
            {finalCta.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            {finalCta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={finalCta.cta.primary.href}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg btn-primary-enhanced text-white hover:scale-105 transition-all duration-300"
            >
              {finalCta.cta.primary.text}{" "}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href={finalCta.cta.secondary.href}
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg border border-border bg-background hover:bg-muted transition-colors"
            >
              {finalCta.cta.secondary.text}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
