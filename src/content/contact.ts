export const contactContent = {
  hero: {
    title: "Get in",
    titleHighlight: "Touch",
    description:
      "Ready to join the Internet of Blockchains revolution? We'd love to hear from you. Let's discuss partnerships, integrations, and the future of AI-powered blockchain interoperability.",
  },
  form: {
    title: "Send us a Message",
    fields: [
      {
        name: "firstName",
        label: "First Name",
        placeholder: "John",
        required: true,
      },
      {
        name: "lastName",
        label: "Last Name",
        placeholder: "Doe",
        required: true,
      },
      {
        name: "email",
        label: "Email",
        placeholder: "john@example.com",
        required: true,
        type: "email",
      },
      {
        name: "company",
        label: "Company/Project",
        placeholder: "Your Company or Project Name",
        required: false,
      },
      {
        name: "partnership",
        label: "Partnership Type",
        type: "select",
        required: false,
        options: [
          { value: "", label: "Select partnership type" },
          { value: "technical", label: "Technical Integration" },
          { value: "strategic", label: "Strategic Partnership" },
          { value: "developer", label: "Developer Support" },
          { value: "investment", label: "Investment & Funding" },
          { value: "other", label: "Other" },
        ],
      },
      {
        name: "subject",
        label: "Subject",
        placeholder: "How can we help?",
        required: true,
      },
      {
        name: "message",
        label: "Message",
        placeholder:
          "Tell us about your project, integration needs, or how we can collaborate...",
        required: true,
        type: "textarea",
        rows: 6,
      },
    ],
    submitText: "Send Message",
  },
  contactInfo: {
    title: "Contact Information",
    items: [
      {
        icon: "📧",
        title: "Email",
        description: "fromtheblocktotheblockchains@gmail.com",
        href: "mailto:fromtheblocktotheblockchains@gmail.com",
      },
      {
        icon: "🌐",
        title: "Website",
        description: "NucleusIOB.com",
        href: "https://nucleusiob.com",
      },
      {
        icon: "👥",
        title: "Social Media",
        description:
          "@NucleusIOB on X, $IOBC Token Official on Telegram, YouTube",
        href: "https://t.me/+LFOdtfLvIbBiYmZh",
      },
      {
        icon: "⏰",
        title: "Response Time",
        description: "We respond within 24 hours",
        href: "#",
      },
    ],
  },
  socialMedia: {
    title: "Follow Us",
    description: "Stay updated with the latest news and developments",
    platforms: [
      {
        name: "X (Twitter)",
        handle: "@NucleusIOB",
        icon: "𝕏",
        href: "https://x.com/NucleusIOB",
      },
      {
        name: "Telegram",
        handle: "$IOBC Token Official",
        icon: "📱",
        href: "https://t.me/+LFOdtfLvIbBiYmZh",
      },
      {
        name: "YouTube",
        handle: "Nucleus IOB",
        icon: "📺",
        href: "https://www.youtube.com/@nucleusiob",
      },
      {
        name: "GitHub",
        handle: "NucleusIOB",
        icon: "💻",
        href: "https://github.com/NucleusIOB",
      },
    ],
  },
  partnershipTypes: {
    title: "Partnership Opportunities",
    description:
      "Explore different ways to collaborate with the Nucleus IOB ecosystem",
    types: [
      {
        icon: "🌐",
        title: "Technical Integration",
        description: "Integrate your project with the Internet of Blockchains",
      },
      {
        icon: "🤝",
        title: "Strategic Partnership",
        description: "Long-term collaboration and ecosystem development",
      },
      {
        icon: "💬",
        title: "Developer Support",
        description: "Get help building on our platform",
      },
      {
        icon: "💰",
        title: "Investment & Funding",
        description: "Explore investment opportunities in the ecosystem",
      },
    ],
  },
  faq: {
    title: "Frequently Asked Questions",
    description: "Quick answers to common questions about Nucleus IOB",
    questions: [
      {
        question: "How does the infinite memory system work?",
        answer:
          "Our Memory Plane provides infinite storage with infinite recall, allowing AI agents to remember everything you choose to share with them, secured on-chain and accessible only to you or those you authorize.",
      },
      {
        question: "What blockchains are currently supported?",
        answer:
          "We support XRP, Stellar (XLM), Hedera (HBAR), Polkadot (DOT), Cardano (ADA), Ethereum, and Meta. More chains are being added regularly based on community needs.",
      },
      {
        question: "How is PoHG different from other governance systems?",
        answer:
          "Proof of Harmony & Governance combines AI intelligence with human wisdom, using three distinct validator types (Nucleus, Genesis, Jericho) to ensure balanced, transparent decision-making.",
      },
      {
        question: "Can I integrate my existing project?",
        answer:
          "Absolutely! We provide comprehensive APIs, SDKs, and integration guides to help you connect your existing blockchain infrastructure to the Internet of Blockchains.",
      },
      {
        question: "What is the Shiloh token used for?",
        answer:
          "Shiloh (SHILOH) is the native token of the Nucleus IOB ecosystem, used for governance voting, network fees, staking, and accessing premium features of the platform.",
      },
      {
        question: "How can I get involved as a developer?",
        answer:
          "Join our developer community on GitHub, Telegram, and X. We offer comprehensive documentation, testnet access, and developer support to help you build on our platform.",
      },
    ],
  },
  cta: {
    title: "Ready to Join the Revolution?",
    description:
      "Be part of the Internet of Blockchains. Connect with us today to explore partnerships, integrations, and the future of AI-powered blockchain interoperability.",
    buttons: [
      {
        text: "Start a Conversation",
        href: "#contact-form",
        primary: true,
      },
      {
        text: "Explore Ecosystem",
        href: "/ecosystem",
        primary: false,
      },
    ],
  },
};
