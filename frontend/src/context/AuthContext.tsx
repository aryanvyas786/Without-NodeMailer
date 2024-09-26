import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
  userId: string | null;
  setUser: (token: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);

  const setUser = (token: string) => {
    const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode token
    setUserId(decodedToken.id); // Assuming the token contains user ID
  };

  return (
    <AuthContext.Provider value={{ userId, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
