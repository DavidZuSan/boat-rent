export interface Boat {
  id: number;
  name: string;
  type: string[];
  year: number;
  price: number;
  image: string;
  imageInside: string[];
  description: string | string[];
}

export interface BoatsData {
  boats: Boat[];
}
