import type { Role as ARole } from "@/app/swagger/Api";
import type { Role } from "../type/router.type";
export const hasAccessPath = (roles: Role[], userRoles: ARole[] = []) => {
  if (!userRoles.length) return false;
  if (!roles.length) return true;

  return roles.some((rol) =>
    userRoles?.some((userRole) => userRole.value === rol),
  );
};
