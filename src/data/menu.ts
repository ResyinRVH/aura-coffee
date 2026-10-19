export interface MenuItem {
  id: string;
  name: string;
  image: string;
  category: 'espresso' | 'manual brew' | 'signature' | 'pastry';
  description: string;
  tastingNotes?: string[];
  price: string;
  isPopular?: boolean;
}

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Offerings' },
  { id: 'espresso', label: 'Espresso' },
  { id: 'manual brew', label: 'Manual Brew' },
  { id: 'signature', label: 'Signatures' },
  { id: 'pastry', label: 'Pastry' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Nordic Light Roast Filter',
    image: '/nordic-light.webp',
    category: 'manual brew',
    description: 'Ethiopia Yirgacheffe washed process via V60 dripper.',
    tastingNotes: ['Jasmine', 'Peach Blossom', 'Bergamot'],
    price: '$5.50',
    isPopular: true,
  },
  {
    id: '2',
    name: 'Smoked Vanilla Oat Latte',
    image:'/Smoked-Vanilla-Web.webp',
    category: 'signature',
    description: 'Double ristretto infused with house-made Madagascar vanilla bean.',
    tastingNotes: ['Velvety Vanilla', 'Brown Butter', 'Toasted Oat'],
    price: '$7.20',
    isPopular: true,
  },
  {
    id: '3',
    name: 'Signature Espresso Shot',
    image: '/coffee-web.webp',
    category: 'espresso',
    description: 'Our house roasted single origin pulled to perfection, featuring deep cacao sweetness, delicate fruit acidity, and an exceptionally rich crema',
    tastingNotes: ['Jasmine', 'Peach Blossom', 'Bergamot'],
    price: '$8.60',
    isPopular: true,
  },
  
];