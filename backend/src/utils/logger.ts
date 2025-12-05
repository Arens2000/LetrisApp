export class Logger {
  static info(msg: string, ...args: any[]) {
    console.log("[INFO]", msg, ...args);
  }

  static warn(msg: string, ...args: any[]) {
    console.warn("[WARN]", msg, ...args);
  }

  static error(msg: string, ...args: any[]) {
    console.error("[ERROR]", msg, ...args);
  }
}
