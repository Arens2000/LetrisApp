import { Logger } from "./logger";

export function errorHandler(err: any, req: any, res: any, next: any) {
  Logger.error("Internal Error:", err);

  res.status(500).json({
    status: "error",
    message: "Internal Server Error",
    detail: err.message,
  });
}
