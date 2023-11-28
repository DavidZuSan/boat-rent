export interface Boat {
  id: number;
  name: string;
  year: number;
  price: number;
  image?: string;
  description: string;
}

export interface BoatsData {
  boats: Boat[];
}
