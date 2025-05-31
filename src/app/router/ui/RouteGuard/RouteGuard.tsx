import type { ElementAccess } from "../../type/router.type";
import type { User } from "@/entities/User";

interface RouteGuardProps extends ElementAccess {
  user: User;
}

export const RouteGuard = (props: RouteGuardProps) => {
  const { user, ...other } = props;
  return <div></div>;
};
