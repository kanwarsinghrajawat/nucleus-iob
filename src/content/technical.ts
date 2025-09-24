export const technicalContent = {
  hero: {
    title: "Technical",
    titleHighlight: "Architecture",
    description:
      "Deep dive into the technical foundation of the Internet of Blockchains - from AI-powered interoperability to infinite memory storage systems.",
  },
  components: {
    title: "Technical Components",
    description:
      "The core technical building blocks that power the Nucleus IOB ecosystem",
    components: [
      {
        icon: "🧠",
        title: "Nucleus AI Node",
        description:
          "The intelligent heart of the network that orchestrates cross-chain communication and decision-making",
        technicalDetails: [
          "Machine learning algorithms for optimal routing",
          "Real-time decision making capabilities",
          "Cross-chain message processing",
          "AI-powered consensus participation",
        ],
        color: "blue",
      },
      {
        icon: "🛡️",
        title: "Genesis Wallet & ID",
        description:
          "Secure identity management and wallet infrastructure with cross-chain compatibility",
        technicalDetails: [
          "Multi-signature wallet support",
          "Cross-chain identity verification",
          "Secure key management",
          "Biometric authentication integration",
        ],
        color: "green",
      },
      {
        icon: "🔒",
        title: "Jericho Security Layer",
        description:
          "Multi-layered security system ensuring data integrity and privacy across all chains",
        technicalDetails: [
          "End-to-end encryption",
          "Zero-knowledge proof integration",
          "Multi-factor authentication",
          "Quantum-resistant cryptography",
        ],
        color: "purple",
      },
      {
        icon: "👥",
        title: "PoHG Consensus",
        description:
          "Proof of Harmony & Governance - AI + human hybrid consensus mechanism",
        technicalDetails: [
          "Hybrid AI-human validation",
          "Stake-weighted voting",
          "Time-locked decision making",
          "Transparent governance records",
        ],
        color: "orange",
      },
    ],
  },
  architecture: {
    title: "Architecture Layers",
    description:
      "The layered architecture that enables seamless cross-chain interoperability",
    layers: [
      {
        layer: "Application Layer",
        description: "User-facing applications and interfaces",
        components: [
          "Web3 wallets and dApps",
          "AI agent interfaces",
          "Cross-chain dashboards",
          "Mobile applications",
        ],
        color: "blue",
      },
      {
        layer: "AI Interoperability Protocol (AIIP)",
        description:
          "The common language for AI agents and blockchain communication",
        components: [
          "Gateway for message routing",
          "Translator for format conversion",
          "Memory Plane for data storage",
          "Policy engine for access control",
        ],
        color: "green",
      },
      {
        layer: "Cross-Chain Adapter",
        description:
          "Protocol-specific adapters for different blockchain networks",
        components: [
          "XRP Ledger adapter",
          "Ethereum Virtual Machine adapter",
          "Polkadot parachain adapter",
          "Custom protocol adapters",
        ],
        color: "purple",
      },
      {
        layer: "Blockchain Networks",
        description: "Supported blockchain networks and their native protocols",
        components: [
          "XRP, Stellar, Hedera",
          "Polkadot, Cardano, Ethereum",
          "Meta and other emerging chains",
          "Custom blockchain implementations",
        ],
        color: "orange",
      },
    ],
  },
  security: {
    title: "Security Features",
    description:
      "Comprehensive security measures protecting the entire ecosystem",
    features: [
      {
        icon: "🔐",
        title: "End-to-End Encryption",
        description:
          "All data transmission and storage is encrypted using industry-standard protocols",
        details: [
          "AES-256 encryption for data at rest",
          "TLS 1.3 for data in transit",
          "Perfect forward secrecy",
          "Quantum-resistant algorithms",
        ],
      },
      {
        icon: "🛡️",
        title: "Multi-Layer Access Control",
        description:
          "Granular permission system with role-based access control",
        details: [
          "Role-based permissions",
          "Time-based access controls",
          "Geographic restrictions",
          "Device authentication",
        ],
      },
      {
        icon: "🔍",
        title: "Audit & Compliance",
        description:
          "Regular security audits and compliance with industry standards",
        details: [
          "Third-party security audits",
          "Penetration testing",
          "Compliance with GDPR, CCPA",
          "SOC 2 Type II certification",
        ],
      },
      {
        icon: "⚡",
        title: "Real-Time Monitoring",
        description:
          "Continuous monitoring and threat detection across the entire network",
        details: [
          "Anomaly detection algorithms",
          "Real-time threat intelligence",
          "Automated incident response",
          "24/7 security operations center",
        ],
      },
    ],
  },
  memorySystem: {
    title: "Infinite Memory System",
    description:
      "Technical deep dive into our revolutionary memory storage and recall system",
    components: [
      {
        icon: "💾",
        title: "Memory Plane Architecture",
        description: "Distributed storage system with infinite scalability",
        technicalDetails: [
          "Sharded storage across multiple chains",
          "Redundant data replication",
          "Compression algorithms for efficiency",
          "Indexed search capabilities",
        ],
      },
      {
        icon: "🔑",
        title: "Key Management System",
        description: "Secure key generation and management for memory access",
        technicalDetails: [
          "Hierarchical key derivation",
          "Hardware security module integration",
          "Key rotation policies",
          "Backup and recovery procedures",
        ],
      },
      {
        icon: "🔍",
        title: "Contextual Search Engine",
        description: "AI-powered search and retrieval system",
        technicalDetails: [
          "Semantic search algorithms",
          "Natural language processing",
          "Context-aware results",
          "Federated search across chains",
        ],
      },
      {
        icon: "🛡️",
        title: "Privacy & Access Control",
        description: "Granular privacy controls and access management",
        technicalDetails: [
          "Zero-knowledge proofs",
          "Differential privacy techniques",
          "User-controlled data sharing",
          "Audit trails for access",
        ],
      },
    ],
  },
  apis: {
    title: "Developer APIs",
    description: "Comprehensive APIs for building on the Nucleus IOB platform",
    categories: [
      {
        category: "Core APIs",
        description: "Essential APIs for basic platform integration",
        endpoints: [
          {
            name: "Authentication API",
            description: "User authentication and authorization",
            endpoint: "/api/v1/auth",
            methods: ["POST", "GET", "DELETE"],
          },
          {
            name: "Cross-Chain API",
            description: "Cross-chain transaction and data transfer",
            endpoint: "/api/v1/crosschain",
            methods: ["POST", "GET"],
          },
          {
            name: "Memory API",
            description: "Memory storage and retrieval operations",
            endpoint: "/api/v1/memory",
            methods: ["POST", "GET", "PUT", "DELETE"],
          },
        ],
      },
      {
        category: "AI APIs",
        description: "AI-specific APIs for agent integration",
        endpoints: [
          {
            name: "AI Agent API",
            description: "AI agent registration and management",
            endpoint: "/api/v1/agents",
            methods: ["POST", "GET", "PUT", "DELETE"],
          },
          {
            name: "Message Processing API",
            description: "AI message processing and routing",
            endpoint: "/api/v1/messages",
            methods: ["POST", "GET"],
          },
          {
            name: "Policy Engine API",
            description: "Policy management and enforcement",
            endpoint: "/api/v1/policies",
            methods: ["POST", "GET", "PUT", "DELETE"],
          },
        ],
      },
    ],
  },
  examples: {
    title: "Code Examples",
    description: "Practical examples for common integration scenarios",
    examples: [
      {
        title: "Cross-Chain Token Transfer",
        language: "JavaScript",
        description: "Transfer tokens between different blockchain networks",
        code: `// Initialize the Nucleus IOB SDK
import { NucleusIOB } from '@nucleusiob/sdk';

const nucleus = new NucleusIOB({
  apiKey: 'your-api-key',
  network: 'mainnet'
});

// Transfer tokens from Ethereum to XRP
const transfer = await nucleus.transfer({
  from: {
    chain: 'ethereum',
    address: '0x...',
    token: 'USDC'
  },
  to: {
    chain: 'xrp',
    address: 'r...',
    token: 'XRP'
  },
  amount: '100.00'
});

console.log('Transfer initiated:', transfer.txHash);`,
      },
      {
        title: "AI Agent Registration",
        language: "Python",
        description: "Register an AI agent with the network",
        code: `from nucleus_iob import NucleusIOB

# Initialize the client
nucleus = NucleusIOB(api_key='your-api-key')

# Register an AI agent
agent = nucleus.agents.register({
    name: 'My AI Agent',
    description: 'A helpful AI assistant',
    capabilities: ['memory', 'cross_chain', 'messaging'],
    policies: {
        memory_access: 'user_controlled',
        cross_chain: 'permissioned'
    }
})

print(f'Agent registered with ID: {agent.id}')`,
      },
      {
        title: "Memory Storage",
        language: "TypeScript",
        description: "Store and retrieve data from the infinite memory system",
        code: `import { NucleusIOB } from '@nucleusiob/sdk';

const nucleus = new NucleusIOB({
  apiKey: 'your-api-key'
});

// Store data in memory
const memory = await nucleus.memory.store({
  data: {
    conversation: 'User asked about blockchain interoperability',
    context: 'technical discussion',
    timestamp: new Date().toISOString()
  },
  access: 'private',
  tags: ['conversation', 'blockchain', 'interoperability']
});

// Retrieve data from memory
const retrieved = await nucleus.memory.retrieve({
  query: 'blockchain interoperability',
  context: 'technical discussion',
  limit: 10
});

console.log('Retrieved memories:', retrieved.results);`,
      },
    ],
  },
  resources: {
    title: "Developer Resources",
    description: "Everything you need to start building on Nucleus IOB",
    resources: [
      {
        icon: "📚",
        title: "Documentation",
        description: "Comprehensive technical documentation and guides",
        href: "/docs",
      },
      {
        icon: "💻",
        title: "SDKs & Libraries",
        description: "Official SDKs for popular programming languages",
        href: "/docs/sdks",
      },
      {
        icon: "🧪",
        title: "Testnet",
        description: "Access to our testnet for development and testing",
        href: "/testnet",
      },
      {
        icon: "💬",
        title: "Developer Support",
        description: "Get help from our technical team and community",
        href: "https://t.me/+LFOdtfLvIbBiYmZh",
      },
    ],
  },
  cta: {
    title: "Start Building",
    description:
      "Ready to integrate with the Internet of Blockchains? Get started with our comprehensive developer resources and join the future of AI-powered blockchain interoperability.",
    buttons: [
      {
        text: "View Documentation",
        href: "/docs",
        primary: true,
      },
      {
        text: "Join Developer Community",
        href: "https://t.me/+LFOdtfLvIbBiYmZh",
        primary: false,
      },
    ],
  },
};
