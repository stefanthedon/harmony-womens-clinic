
export interface NavLink {
  name: string;
  path: string;
}

export interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

export interface Condition {
  title: string;
  description: string;
  imageUrl: string;
}

export interface User {
  name: string;
  email: string;
}

export interface BookingDetails {
  service: string;
  date: string;
  time: string;
  user: User;
}
