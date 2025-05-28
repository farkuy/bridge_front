import { Button } from "@mantine/core";
import { apiV1Method, privateRequest } from "@/shared/api";

export const MainePage = () => {
  const getAllUsers = async () => {
    const users = await privateRequest({
      request: apiV1Method("usersControllerGetAllUsers"),
    })({});
    console.log(users);
  };

  return (
    <div>
      <Button onClick={getAllUsers}>Всех</Button>
    </div>
  );
};
