
import { Room, RoomType, MenuItem } from './types';

export const ROOMS: Room[] = [
  {
    id: '1',
    type: RoomType.DELUXE,
    price: 350,
    description: 'Elegant and comfortable, our Deluxe rooms offer a sanctuary of calm with plush bedding and modern amenities.',
    features: ['King Size Bed', 'Smart TV', 'City View', 'Mini Bar'],
    imageUrl: 'https://picsum.photos/id/164/800/600'
  },
  {
    id: '2',
    type: RoomType.OCEAN_VIEW,
    price: 520,
    description: 'Breathtaking floor-to-ceiling windows overlooking the azure horizon. The perfect escape for dreamers.',
    features: ['Balcony', 'Nespresso Machine', 'Ocean View', 'Walk-in Shower'],
    imageUrl: 'https://picsum.photos/id/10/800/600'
  },
  {
    id: '3',
    type: RoomType.SUITE,
    price: 850,
    description: 'Expansive living spaces designed for the sophisticated traveler who demands excellence in every detail.',
    features: ['Separate Living Area', 'Personal Butler', 'Luxury Spa Access', 'Pillow Menu'],
    imageUrl: 'https://picsum.photos/id/201/800/600'
  },
  {
    id: '4',
    type: RoomType.PRESIDENTIAL,
    price: 1500,
    description: 'The pinnacle of luxury. A private rooftop terrace, infinity pool, and world-class interior design.',
    features: ['Private Pool', 'Kitchenette', 'Panoramic Views', 'VIP Airport Transfer'],
    imageUrl: 'https://picsum.photos/id/429/800/600'
  }
];

export const MENU_ITEMS: MenuItem[] = [
  { id: 'm1', name: 'Truffle Scallops', price: 28, description: 'Seared Hokkaido scallops with black truffle shavings and parsnip purée.', category: 'Appetizers' },
  { id: 'm2', name: 'Wagyu Ribeye', price: 75, description: 'A5 Miyazaki Wagyu, grilled over binchotan charcoal, served with marrow jus.', category: 'Main Course' },
  { id: 'm3', name: 'Miso Glazed Cod', price: 42, description: 'Wild-caught black cod, marinated for 72 hours, served with bok choy.', category: 'Main Course' },
  { id: 'm4', name: 'Golden Saffron Risotto', price: 34, description: 'Acquerello rice, Persian saffron, and 36-month aged Parmesan.', category: 'Main Course' },
  { id: 'm5', name: 'Valrhona Soufflé', price: 18, description: 'Dark chocolate lava cake with Madagascar vanilla bean gelato.', category: 'Desserts' },
  { id: 'm6', name: 'Elderflower Fizz', price: 16, description: 'Artisanal gin, fresh elderflower, lime, and sparkling soda.', category: 'Drinks' }
];
