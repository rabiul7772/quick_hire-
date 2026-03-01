export interface User {
  _id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

export interface AuthResponse {
  status: string;
  token: string;
  data: {
    user: User;
  };
}
