export interface Boat {
  id: number;
  name: string;
  type: string;
  year: number;
  price: number;
  image?: string;
  description: string;
}

export interface BoatsData {
  boats: Boat[];
}
