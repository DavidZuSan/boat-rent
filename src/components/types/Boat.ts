export interface Boat {
  id: number;
  name: string;
  type: string | string[];
  year: number;
  price: number;
  image: string;
  imageInside: string[];
  description: string | string[];
  speed: number;
  length: number;
  bedrooms: number;
}

export interface BoatsData {
  boats: Boat[];
}
