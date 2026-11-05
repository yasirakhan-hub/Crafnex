import { FaqItem } from '../types';

export const FAQS_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'general',
    question: 'What is Crafnex?',
    answer: 'Crafnex is a modern game server hosting brand conceptualized for gaming communities. Our core mission is India-first low-latency hosting followed by planned global edge expansions, starting with Minecraft Java and Bedrock hosting at launch.',
  },
  {
    id: 'faq-2',
    category: 'general',
    question: 'What is the current status of the Crafnex website?',
    answer: 'This website is currently a public demonstration and blueprint showcase. All specifications, hardware descriptions, and pricing figures represent proposed demonstration data.',
  },
  {
    id: 'faq-3',
    category: 'minecraft',
    question: 'Can Java and Bedrock players play on the same Crafnex server?',
    answer: 'Yes! Using our 1-click Paper or Purpur server setups combined with GeyserMC and Floodgate plugins, Bedrock players on mobile, console, or Windows can seamlessly join your Java Minecraft world.',
  },
  {
    id: 'faq-4',
    category: 'minecraft',
    question: 'Which Minecraft server software versions will be supported?',
    answer: 'We plan full support for Paper, Purpur, Spigot, Vanilla, Fabric, Forge, NeoForge, BungeeCord, and Velocity, with Java versions ranging from Java 8 through Java 21+.',
  },
  {
    id: 'faq-5',
    category: 'pricing',
    question: 'Is the Free Plan truly free?',
    answer: 'Yes, our proposed Free Plan offers 2 GB RAM and up to 10 player slots for casual multiplayer and plugin experimentation. It is designed to be free forever under standard community fair-use activity guidelines.',
  },
  {
    id: 'faq-6',
    category: 'pricing',
    question: 'What currencies and billing cycles are supported?',
    answer: 'The website provides a manual toggle between Indian Rupees (INR ₹) and US Dollars (USD $). You can select Monthly, Quarterly (10% demo discount), or Annual (20% demo discount) billing cycles.',
  },
  {
    id: 'faq-7',
    category: 'technical',
    question: 'Where are the server nodes located?',
    answer: 'Our primary planned deployment locations are Mumbai and Delhi in India to deliver sub-25ms latency for South Asian players. Planned secondary expansion locations include Singapore and Frankfurt, Germany.',
  },
  {
    id: 'faq-8',
    category: 'technical',
    question: 'How do I check which server location is recommended for my community?',
    answer: 'You can explore our Infrastructure section where planned server nodes in Mumbai, Delhi, Singapore, and Frankfurt are detailed with expected regional routing. For Indian and South Asian communities, Mumbai and Delhi are our primary recommended nodes.',
  },
  {
    id: 'faq-9',
    category: 'technical',
    question: 'What target hardware does Crafnex plan to use?',
    answer: 'We are targeting high-frequency AMD Ryzen 9 class processors, DDR5 ECC memory, and enterprise PCIe 4.0 NVMe storage to guarantee 20 TPS tick rate stability under heavy gameplay.',
  },
  {
    id: 'faq-10',
    category: 'general',
    question: 'When will other games like Palworld and Rust be available?',
    answer: 'Our website architecture is modular by design. Following our Minecraft launch, we plan to roll out server templates for Palworld, Rust, Valheim, ARK, and CS2. You can use the "Notify Me" feature in the Games section to receive updates.',
  },
];
