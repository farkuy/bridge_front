import { useUnit } from "effector-react";
import { $user } from "@/entities/User";

export const useAuth = () => {
  const [user] = useUnit([$user]);

  return !!user?.email;
};
