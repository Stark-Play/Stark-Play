export const news = [
    {
      id: "gaming-hub",
      title: "Starknet Gaming Hub Reaches 100K Daily Active Players",
      description: "The decentralized gaming ecosystem on Starknet has hit a major milestone with over 100,000 daily active players across its top gaming platforms. Leading titles like Eternal Legends and Quantum Warriors are driving mainstream adoption of blockchain gaming.",
      timestamp: "3 DAYS AGO",
      readTime: "4 MIN READ",
      category: "ECOSYSTEM",
      image: "/image/gaming-hub.webp"
    },
    {
      id: "cross-chain",
      title: "New Cross-Chain Gaming Alliance Formed Between Major L2s",
      description: "A groundbreaking partnership between leading Layer 2 platforms aims to create seamless interoperability for blockchain games. This alliance will enable players to transfer assets and progress across different L2 networks, marking a new era for onchain gaming.",
      timestamp: "4 DAYS AGO",
      readTime: "5 MIN READ",
      category: "PARTNERSHIPS",
      image: "/image/cross-chain.webp"
    },
    {
      id: "zero-knowledge",
      title: "Zero-Knowledge Gaming: The Next Frontier in Online Privacy",
      description: "Game developers are increasingly adopting zero-knowledge proofs to enhance player privacy while maintaining competitive integrity. This technological breakthrough is revolutionizing how multiplayer games handle sensitive player data and rankings.",
      timestamp: "5 DAYS AGO",
      readTime: "6 MIN READ",
      category: "TECHNOLOGY",
      image: "/image/security.webp"
    },
    {
      id: "studio-announces",
      title: "Major Studio Announces First AAA Game Built on Starknet",
      description: "A leading game studio has revealed plans to launch their upcoming RPG title exclusively on Starknet, citing the platform's scalability and low transaction costs. This marks the first major AAA studio entry into L2 blockchain gaming.",
      timestamp: "1 WEEK AGO",
      readTime: "3 MIN READ",
      category: "ANNOUNCEMENTS",
      image: "/image/aaa-game.webp"
    },
    {
      id: "gaming-dao",
      title: "Gaming DAOs See Record Growth in Q1 2025",
      description: "Decentralized gaming organizations have experienced unprecedented growth, with over 50 new gaming DAOs launched in the first quarter. These organizations are revolutionizing how games are developed and governed on the blockchain.",
      timestamp: "1 WEEK AGO",
      readTime: "4 MIN READ",
      category: "REPORTS",
      image: "/image/web-dao.webp"
    }
  ];

  export function getNewsData(slug: string) {
    return news.find((newsItem) => newsItem.id === slug);
  }