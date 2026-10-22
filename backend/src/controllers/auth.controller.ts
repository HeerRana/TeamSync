import { NextFunction, Request, Response } from "express";
import { asyncHandler } from "../middlewares/asyncHandler.middleware";
import { config } from "../config/app.config";
import { registerSchema } from "../validation/auth.validation";
import { HTTPSTATUS } from "../config/http.config";
import { registerUserService, verifyUserService } from "../services/auth.service";
import { generateToken } from "../utils/jwt";
import passport from "passport";
import mongoose from "mongoose";

export const googleLoginCallback = asyncHandler(
  async (req: Request, res: Response) => {
    const user = req.user as any;
    const currentWorkspace = user?.currentWorkspace;

    if (!currentWorkspace) {
      return res.redirect(
        `${config.FRONTEND_GOOGLE_CALLBACK_URL}?status=failure`
      );
    }

    // Generate JWT token
    const token = generateToken({
      userId: user._id,
      email: user.email,
      currentWorkspace: currentWorkspace.toString(),
    });

    console.log('[Google OAuth] Redirecting to:', `${config.FRONTEND_ORIGIN}/workspace/${currentWorkspace}?token=${token}`);
    console.log('[Google OAuth] Token:', token);

    return res.redirect(
      `${config.FRONTEND_ORIGIN}/workspace/${currentWorkspace}?token=${token}`
    );
  }
);

export const registerUserController = asyncHandler(
  async (req: Request, res: Response) => {
    const body = registerSchema.parse({
      ...req.body,
    });

    const { userId, workspaceId } = await registerUserService(body);

    // Generate JWT token
    const token = generateToken({
      userId: (userId as mongoose.Types.ObjectId).toString(),
      email: body.email,
      currentWorkspace: (workspaceId as mongoose.Types.ObjectId).toString(),
    });

    return res.status(HTTPSTATUS.CREATED).json({
      message: "User created successfully",
      token,
      user: { userId, workspaceId },
    });
  }
);

export const loginController = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    passport.authenticate(
      "local",
      (
        err: Error | null,
        user: Express.User | false,
        info: { message: string } | undefined
      ) => {
        if (err) {
          return next(err);
        }

        if (!user) {
          return res.status(HTTPSTATUS.UNAUTHORIZED).json({
            message: info?.message || "Invalid email or password",
          });
        }

        // Generate JWT token
        const token = generateToken({
          userId: (user as any)._id,
          email: (user as any).email,
          currentWorkspace: (user as any).currentWorkspace?.toString(),
        });

        return res.status(HTTPSTATUS.OK).json({
          message: "Logged in successfully",
          token,
          user,
        });
      }
    )(req, res, next);
  }
);

export const logOutController = asyncHandler(
  async (req: Request, res: Response) => {
    // With JWT, logout is handled on the client side by removing the token
    return res
      .status(HTTPSTATUS.OK)
      .json({ message: "Logged out successfully" });
  }
);
