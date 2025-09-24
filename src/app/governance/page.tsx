import { Metadata } from "next";
import { governanceContent } from "@/content/governance";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Shield,
  Brain,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Governance - Nucleus IOB",
  description:
    "Learn about Proof of Harmony & Governance (PoHG) - our revolutionary consensus mechanism that combines AI intelligence with human wisdom for balanced decision-making.",
  openGraph: {
    title: "Governance - Nucleus IOB",
    description:
      "Learn about Proof of Harmony & Governance (PoHG) - our revolutionary consensus mechanism that combines AI intelligence with human wisdom for balanced decision-making.",
  },
};

export default function GovernancePage() {
  const {
    hero,
    overview,
    validatorTypes,
    proposalLifecycle,
    votingCriteria,
    activeProposals,
    getInvolved,
    tokenomics,
    cta,
  } = governanceContent;

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

      {/* Overview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {overview.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {overview.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {overview.process.map((step, index) => (
              <div key={index} className="card-enhanced rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-primary font-bold text-lg">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold heading-elegant">
                    {step.title}
                  </h3>
                </div>
                <p className="text-elegant text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Validator Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {validatorTypes.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {validatorTypes.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {validatorTypes.validators.map((validator, index) => (
              <div key={index} className="card-enhanced rounded-lg p-8">
                <div className="text-center mb-6">
                  <span className="text-5xl block mb-4">{validator.icon}</span>
                  <h3 className="text-2xl font-semibold heading-elegant mb-2">
                    {validator.name}
                  </h3>
                  <div className="text-primary font-medium mb-4">
                    {validator.role}
                  </div>
                  <p className="text-elegant text-muted-foreground">
                    {validator.description}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                    Responsibilities
                  </h4>
                  {validator.responsibilities.map(
                    (responsibility, respIndex) => (
                      <div key={respIndex} className="flex items-start gap-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm text-elegant">
                          {responsibility}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposal Lifecycle Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {proposalLifecycle.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {proposalLifecycle.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {proposalLifecycle.stages.map((stage, index) => (
              <div key={index} className="card-enhanced rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold heading-elegant mb-2">
                    {stage.stage}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Clock className="h-4 w-4" />
                    <span>{stage.duration}</span>
                  </div>
                </div>
                <p className="text-elegant text-muted-foreground mb-4">
                  {stage.description}
                </p>
                <div className="text-sm text-primary font-medium">
                  {stage.requirements}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voting Criteria Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {votingCriteria.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {votingCriteria.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {votingCriteria.criteria.map((criterion, index) => (
              <div key={index} className="card-enhanced rounded-lg p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{criterion.icon}</span>
                  <h3 className="text-xl font-semibold heading-elegant">
                    {criterion.title}
                  </h3>
                </div>
                <p className="text-elegant text-muted-foreground">
                  {criterion.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Proposals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {activeProposals.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {activeProposals.description}
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {activeProposals.proposals.map((proposal, index) => (
              <div key={index} className="card-enhanced rounded-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold heading-elegant mb-2">
                      {proposal.title}
                    </h3>
                    <p className="text-elegant text-muted-foreground">
                      {proposal.description}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      proposal.status === "Voting"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                        : proposal.status === "Review"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                          : "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400"
                    }`}
                  >
                    {proposal.status}
                  </span>
                </div>
                {proposal.status === "Voting" && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Votes For: {proposal.votesFor}%</span>
                      <span>Votes Against: {proposal.votesAgainst}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${proposal.votesFor}%` }}
                      />
                    </div>
                  </div>
                )}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>ID: {proposal.id}</span>
                  <span>Ends: {proposal.endDate}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {getInvolved.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {getInvolved.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getInvolved.ways.map((way, index) => (
              <div
                key={index}
                className="card-enhanced rounded-lg p-6 text-center"
              >
                <div className="mb-4">
                  <span className="text-4xl">{way.icon}</span>
                </div>
                <h3 className="text-xl font-semibold heading-elegant mb-3">
                  {way.title}
                </h3>
                <p className="text-elegant text-muted-foreground mb-4">
                  {way.description}
                </p>
                <button className="text-primary hover:text-primary/80 transition-colors font-medium">
                  {way.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-6">
              {tokenomics.title}
            </h2>
            <p className="text-elegant text-muted-foreground max-w-2xl mx-auto">
              {tokenomics.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tokenomics.aspects.map((aspect, index) => (
              <div
                key={index}
                className="card-enhanced rounded-lg p-6 text-center"
              >
                <div className="mb-4">
                  <span className="text-4xl">{aspect.icon}</span>
                </div>
                <h3 className="text-xl font-semibold heading-elegant mb-3">
                  {aspect.title}
                </h3>
                <p className="text-elegant text-muted-foreground">
                  {aspect.description}
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
