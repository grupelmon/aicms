import { createContext, useContext, useMemo, useState } from 'react';
import api from '../api/client';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const login = async (email, password) => {
    const { data } = await api.post('/admin/login', { email, password });
    localStorage.setItem('token', data.token);
    setToken(data.token);
  };

  const logout = async () => {
    await api.post('/logout');
    localStorage.removeItem('token');
    setToken(null);
  };

  const value = useMemo(() => ({ token, login, logout, isAuthenticated: !!token }), [token]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
