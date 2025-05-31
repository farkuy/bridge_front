import type { Role as ARole } from "@/app/swagger/Api";
import type { Role } from "../type/router.type";
export const hasAccessPath = (roles: Role[], userRoles?: ARole[]) => {
  if (!userRoles) return false;
  return roles.some((rol) =>
    userRoles.some((userRole) => userRole.value === rol),
  );
};
