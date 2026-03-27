import { SeasonData } from './types';

export const SEASONS: SeasonData[] = [
  {
    id: 'spring',
    title: 'Spring',
    chineseTitle: '春 · 生机',
    description: 'The mountains wake up. Delicate blossoms and fresh greenery breathe life back into the Jinshanling landscape.',
    color: '#5A5A40',
    heroImage: 'https://aranya-photography.oss-cn-beijing.aliyuncs.com/spring/hero.jpg',
    gallery: [
      { id: 'sp1', title: 'Mountain Mist', location: 'Valley Road', url: 'https://images.unsplash.com/photo-1462270622445-5042b8683637?auto=format&fit=crop&q=80&w=800' },
      { id: 'sp2', title: 'First Bloom', location: 'Community Garden', url: 'https://images.unsplash.com/photo-1455218873509-8097305ee378?auto=format&fit=crop&q=80&w=800' },
      { id: 'sp3', title: 'Morning Dew', location: 'Hiking Trail', url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&q=80&w=800' },
      { id: 'sp4', title: 'Verdant Peaks', location: 'Observation Deck', url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'summer',
    title: 'Summer',
    chineseTitle: '夏 · 繁茂',
    description: 'Deep greens and golden sunlight. The community thrives under the warmth of the mountain sun.',
    color: '#2C4A3E',
    heroImage: 'https://aranya-photography.oss-cn-beijing.aliyuncs.com/summer/hero.jpg',
    gallery: [
      { id: 'su1', title: 'Golden Hour', location: 'The Plaza', url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800' },
      { id: 'su2', title: 'Forest Canopy', location: 'Pine Forest', url: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=800' },
      { id: 'su3', title: 'Summer Breeze', location: 'Terrace', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' },
      { id: 'su4', title: 'Mountain Stream', location: 'North Creek', url: 'https://images.unsplash.com/photo-1433086566045-8561395e70f1?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'autumn',
    title: 'Autumn',
    chineseTitle: '秋 · 绚烂',
    description: 'A masterpiece of fire and gold. The mountains transform into a tapestry of brilliant colors.',
    color: '#8B4513',
    heroImage: 'https://aranya-photography.oss-cn-beijing.aliyuncs.com/autumn/hero.jpg',
    gallery: [
      { id: 'au1', title: 'Amber Leaves', location: 'Maple Path', url: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?auto=format&fit=crop&q=80&w=800' },
      { id: 'au2', title: 'Harvest Moon', location: 'Open Field', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=800' },
      { id: 'au3', title: 'Crimson Ridge', location: 'Great Wall View', url: 'https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800' },
      { id: 'au4', title: 'Quiet Afternoon', location: 'Library', url: 'https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'winter',
    title: 'Winter',
    chineseTitle: '冬 · 寂静',
    description: 'Pure white silence. The architecture stands in stark, beautiful contrast against the snow-covered peaks.',
    color: '#4A5568',
    heroImage: 'https://aranya-photography.oss-cn-beijing.aliyuncs.com/winter/hero.jpg',
    gallery: [
      { id: 'wi1', title: 'Snowfall', location: 'Main Entrance', url: 'https://images.unsplash.com/photo-1477601263568-184e1c6374de?auto=format&fit=crop&q=80&w=800' },
      { id: 'wi2', title: 'Frozen Lake', location: 'South Pond', url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?auto=format&fit=crop&q=80&w=800' },
      { id: 'wi3', title: 'Winter Light', location: 'Chapel', url: 'https://images.unsplash.com/photo-1482489603187-f0ae98f307a7?auto=format&fit=crop&q=80&w=800' },
      { id: 'wi4', title: 'Minimalist Peak', location: 'Summit', url: 'https://images.unsplash.com/photo-1454166155302-ef4863c27e70?auto=format&fit=crop&q=80&w=800' },
    ]
  }
];
