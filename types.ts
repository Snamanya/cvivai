
export enum RoomType {
  DELUXE = 'Deluxe Room',
  SUITE = 'Grand Suite',
  PRESIDENTIAL = 'Presidential Suite',
  OCEAN_VIEW = 'Ocean View Executive'
}

export interface Room {
  id: string;
  type: RoomType;
  price: number;
  description: string;
  features: string[];
  imageUrl: string;
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'Appetizers' | 'Main Course' | 'Desserts' | 'Drinks';
}

export interface BookingDetails {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  name: string;
  email: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
