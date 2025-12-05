export function requireRole(roles: string[]) {
  return (req: any, res: any, next: any) => {
    const role = req.user.role;

    if (!roles.includes(role))
      return res.status(403).json({ message: "Forbidden: insufficient role" });

    next();
  };
}

