import { Button } from "@mantine/core";
import { apiV1request } from "@/shared/api/InstanceAxiosApi";

export const MainePage = () => {
  const getAllUsers = async () => {
    const users = await apiV1request("usersControllerGetAllUsers")();
    console.log(users);
  };

  return (
    <div>
      <Button onClick={getAllUsers}>Всех</Button>
    </div>
  );
};
