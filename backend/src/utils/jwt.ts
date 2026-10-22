import jwt from 'jsonwebtoken';
import { config } from '../config/app.config';

export interface JWTPayload {
  userId: string;
  email: string;
  currentWorkspace?: string;
}

export const generateToken = (payload: JWTPayload): string => {
  return jwt.sign(payload, config.SESSION_SECRET, {
    expiresIn: '7d', // Token expires in 7 days
  });
};

export const verifyToken = (token: string): JWTPayload => {
  try {
    return jwt.verify(token, config.SESSION_SECRET) as JWTPayload;
  } catch (error) {
    throw new Error('Invalid token');
  }
};

export const extractTokenFromHeader = (authHeader: string | undefined): string | null => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  return authHeader.substring(7);
}; 