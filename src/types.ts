export type Season = 'spring' | 'summer' | 'autumn' | 'winter';

export interface Photo {
  id: string;
  url: string;
  title: string;
  location: string;
}

export interface SeasonData {
  id: Season;
  title: string;
  chineseTitle: string;
  description: string;
  color: string;
  heroImage: string;
  gallery: Photo[];
}
