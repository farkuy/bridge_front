import { Button } from "@mantine/core";
import { apiRequest, apiV1request } from "@/shared/api/apiRequest";

export const MainePage = () => {
  const getAllUsers = async () => {
    const users = await apiRequest({
      request: apiV1request("usersControllerGetAllUsers"),
    });
    console.log(users);
  };

  return (
    <div>
      <Button onClick={getAllUsers}>Всех</Button>
    </div>
  );
};
