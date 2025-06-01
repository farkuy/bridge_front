import type { ElementAccess } from "../../type/router.type";
import type { User } from "@/entities/User";
import { hasAccessPath } from "@/app/router/utils/hasAccessPath";
import { Navigate } from "react-router";
import type { ReactNode } from "react";

interface RouteGuardProps extends Omit<ElementAccess, "element"> {
  user: User | null;
  children: ReactNode;
}

export const RouteAuthGuard = (props: RouteGuardProps) => {
  const { user, children, role, isForAuth } = props;

  if (isForAuth && !user?.email) {
    return <Navigate to="/auth" replace />;
  }

  const hasAccess = hasAccessPath(role, user?.roles);
  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return children;
};
