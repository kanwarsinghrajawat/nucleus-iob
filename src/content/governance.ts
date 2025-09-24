export const governanceContent = {
  hero: {
    title: "Proof of Harmony &",
    titleHighlight: "Governance",
    description:
      "A revolutionary consensus mechanism that combines AI intelligence with human wisdom for balanced, transparent decision-making across the Internet of Blockchains.",
  },
  overview: {
    title: "How PoHG Works",
    description:
      "Our unique governance system uses three distinct validator types to ensure balanced decision-making and network security.",
    process: [
      {
        step: "1",
        title: "Proposal Submission",
        description:
          "Community members submit proposals for network improvements, protocol changes, or ecosystem development",
      },
      {
        step: "2",
        title: "AI Analysis",
        description:
          "Nucleus validators analyze proposals using AI to assess technical feasibility, impact, and alignment with network goals",
      },
      {
        step: "3",
        title: "Human Review",
        description:
          "Genesis validators provide human perspective, considering community needs, ethical implications, and long-term vision",
      },
      {
        step: "4",
        title: "Security Validation",
        description:
          "Jericho validators ensure proposals meet security standards and don't compromise network integrity",
      },
      {
        step: "5",
        title: "Community Voting",
        description:
          "Token holders vote on proposals, with voting power determined by stake and participation in the network",
      },
      {
        step: "6",
        title: "Implementation",
        description:
          "Approved proposals are implemented with full transparency and community oversight",
      },
    ],
  },
  validatorTypes: {
    title: "Validator Roles",
    description:
      "Three distinct validator types working in harmony to maintain network integrity and make informed decisions",
    validators: [
      {
        icon: "🧠",
        name: "Nucleus Validators",
        role: "AI Intelligence",
        description:
          "AI-powered validators that analyze proposals, assess technical feasibility, and provide data-driven insights for decision-making.",
        responsibilities: [
          "Technical proposal analysis",
          "AI-powered impact assessment",
          "Data-driven recommendations",
          "Network optimization insights",
        ],
        color: "blue",
      },
      {
        icon: "🛡️",
        name: "Genesis Validators",
        role: "Human Wisdom",
        description:
          "Human validators who bring community perspective, ethical considerations, and long-term vision to governance decisions.",
        responsibilities: [
          "Community representation",
          "Ethical considerations",
          "Long-term strategic planning",
          "Human-centered decision making",
        ],
        color: "green",
      },
      {
        icon: "🔒",
        name: "Jericho Validators",
        role: "Security Guardians",
        description:
          "Security-focused validators that ensure all proposals meet security standards and maintain network integrity.",
        responsibilities: [
          "Security assessment",
          "Risk evaluation",
          "Network integrity protection",
          "Compliance verification",
        ],
        color: "purple",
      },
    ],
  },
  proposalLifecycle: {
    title: "Proposal Lifecycle",
    description:
      "From idea to implementation - how proposals move through our governance system",
    stages: [
      {
        stage: "Draft",
        description:
          "Community members create and refine proposals in our governance forum",
        duration: "7 days",
        requirements: "Community feedback and refinement",
      },
      {
        stage: "Review",
        description:
          "Validators analyze proposals for technical feasibility, security, and community impact",
        duration: "14 days",
        requirements: "Validator consensus on proposal viability",
      },
      {
        stage: "Voting",
        description:
          "Token holders vote on proposals with their stake-weighted voting power",
        duration: "7 days",
        requirements: "Minimum participation threshold met",
      },
      {
        stage: "Implementation",
        description:
          "Approved proposals are implemented with full transparency and community oversight",
        duration: "Variable",
        requirements: "Successful deployment and testing",
      },
    ],
  },
  votingCriteria: {
    title: "Voting Criteria",
    description:
      "How we ensure fair, transparent, and effective governance decisions",
    criteria: [
      {
        icon: "⚖️",
        title: "Stake-Weighted Voting",
        description:
          "Voting power is determined by the amount of Shiloh tokens staked, ensuring those with more skin in the game have proportional influence",
      },
      {
        icon: "👥",
        title: "Participation Rewards",
        description:
          "Active voters receive rewards, encouraging participation and ensuring diverse community input in governance decisions",
      },
      {
        icon: "🔍",
        title: "Transparency",
        description:
          "All votes, proposals, and decisions are recorded on-chain and publicly accessible, ensuring complete transparency",
      },
      {
        icon: "⏰",
        title: "Time-Locked Decisions",
        description:
          "Important decisions have mandatory waiting periods to prevent rushed or manipulated voting",
      },
    ],
  },
  activeProposals: {
    title: "Active Proposals",
    description: "Current proposals under consideration by the community",
    proposals: [
      {
        id: "P-001",
        title: "Cross-Chain Fee Optimization",
        description:
          "Proposal to optimize cross-chain transaction fees and improve network efficiency",
        status: "Voting",
        votesFor: 65,
        votesAgainst: 35,
        endDate: "2024-01-15",
      },
      {
        id: "P-002",
        title: "New Blockchain Integration",
        description:
          "Integration of Solana blockchain into the Nucleus IOB ecosystem",
        status: "Review",
        votesFor: 0,
        votesAgainst: 0,
        endDate: "2024-01-20",
      },
      {
        id: "P-003",
        title: "AI Memory Storage Upgrade",
        description:
          "Enhancement of the infinite memory storage system with improved compression algorithms",
        status: "Draft",
        votesFor: 0,
        votesAgainst: 0,
        endDate: "2024-01-25",
      },
    ],
  },
  getInvolved: {
    title: "Get Involved",
    description:
      "Participate in governance and help shape the future of the Internet of Blockchains",
    ways: [
      {
        icon: "💬",
        title: "Join Discussions",
        description:
          "Participate in governance discussions on our forum and social channels",
        action: "Visit Forum",
      },
      {
        icon: "📝",
        title: "Submit Proposals",
        description:
          "Submit your own proposals for network improvements and ecosystem development",
        action: "Submit Proposal",
      },
      {
        icon: "🗳️",
        title: "Vote on Proposals",
        description:
          "Stake your tokens and vote on proposals that matter to you",
        action: "Start Voting",
      },
      {
        icon: "🛡️",
        title: "Become a Validator",
        description: "Apply to become a validator and help secure the network",
        action: "Apply Now",
      },
    ],
  },
  tokenomics: {
    title: "Shiloh Token Economics",
    description:
      "Understanding the role of Shiloh tokens in governance and network security",
    aspects: [
      {
        icon: "🗳️",
        title: "Governance Rights",
        description:
          "Holders can vote on proposals and participate in network governance decisions",
      },
      {
        icon: "🛡️",
        title: "Staking Rewards",
        description:
          "Stake tokens to earn rewards while securing the network and participating in consensus",
      },
      {
        icon: "⚡",
        title: "Network Fees",
        description:
          "Tokens are used to pay for cross-chain transactions and network services",
      },
      {
        icon: "🎯",
        title: "Validator Requirements",
        description:
          "Minimum stake requirements for becoming a validator and participating in consensus",
      },
    ],
  },
  cta: {
    title: "Shape the Future",
    description:
      "Join the governance process and help build the Internet of Blockchains. Your voice matters in creating a more connected, intelligent, and harmonious blockchain ecosystem.",
    buttons: [
      {
        text: "Start Participating",
        href: "/governance/participate",
        primary: true,
      },
      {
        text: "View Active Proposals",
        href: "/governance/proposals",
        primary: false,
      },
    ],
  },
};
