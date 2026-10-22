import { NextFunction, Request, Response } from "express";
import { UnauthorizedException } from "../utils/appError";
import { verifyToken, extractTokenFromHeader } from "../utils/jwt";
import { getUserByIdService } from "../services/user.service";

const isAuthenticated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = extractTokenFromHeader(req.headers.authorization);
    
    if (!token) {
      return next(new UnauthorizedException("No token provided. Please log in."));
    }

    const decoded = verifyToken(token);
    const user = await getUserByIdService(decoded.userId);
    
    if (!user) {
      return next(new UnauthorizedException("User not found. Please log in."));
    }

    // Attach user to request object
    req.user = user;
    next();
  } catch (error: any) {
    if (error.message === 'Invalid token') {
      return next(new UnauthorizedException("Invalid token. Please log in."));
    }
    return next(error);
  }
};

export default isAuthenticated;
