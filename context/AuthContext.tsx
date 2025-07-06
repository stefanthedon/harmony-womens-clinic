
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (credentials: Omit<User, 'name'>) => boolean;
  signup: (details: User) => boolean;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem('harmonyUser');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const isAuthenticated = !!user;

  // In a real app, this would involve API calls. Here we simulate.
  const login = (credentials: Omit<User, 'name'>): boolean => {
    // Simulate finding a user. For simplicity, any login matching a "registered" user works.
    const storedUsers = JSON.parse(localStorage.getItem('harmonyUsers') || '[]');
    const foundUser = storedUsers.find((u: User) => u.email === credentials.email);

    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem('harmonyUser', JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const signup = (details: User): boolean => {
    const storedUsers = JSON.parse(localStorage.getItem('harmonyUsers') || '[]');
    if (storedUsers.some((u: User) => u.email === details.email)) {
      return false; // User already exists
    }
    const newUsers = [...storedUsers, details];
    localStorage.setItem('harmonyUsers', JSON.stringify(newUsers));
    setUser(details);
    localStorage.setItem('harmonyUser', JSON.stringify(details));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('harmonyUser');
  };

  const value = { user, isAuthenticated, login, signup, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
