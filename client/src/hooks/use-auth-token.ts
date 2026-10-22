import { useState, useEffect } from 'react';

export const useAuthToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    setToken(storedToken);
    console.log('[useAuthToken] Loaded token from localStorage:', storedToken);
  }, []);

  const saveToken = (newToken: string) => {
    localStorage.setItem('authToken', newToken);
    setToken(newToken);
    console.log('[useAuthToken] Saved token to localStorage:', newToken);
  };

  const removeToken = () => {
    localStorage.removeItem('authToken');
    setToken(null);
    console.log('[useAuthToken] Removed token from localStorage');
  };

  return { token, saveToken, removeToken };
}; 