import api from '../utils/axios';
import type { AuthResponse } from '../types/auth';

const AUTH_URL = '/auth';

export const authService = {
  signup: async (data: any) => {
    const response = await api.post<AuthResponse>(`${AUTH_URL}/signup`, data);
    return response.data;
  },
  login: async (data: any) => {
    const response = await api.post<AuthResponse>(`${AUTH_URL}/login`, data);
    return response.data;
  },
  logout: async () => {
    await api.get(`${AUTH_URL}/logout`);
  }
};
