export function success(res: any, message: string, data: any = null) {
  return res.json({
    status: "success",
    message,
    data,
  });
}

export function error(res: any, message: string, code: number = 400) {
  return res.status(code).json({
    status: "error",
    message,
  });
}

