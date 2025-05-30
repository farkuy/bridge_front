import { Button } from "@mantine/core";
import { apiV1Method, privateRequest } from "@/shared/api";

function MainePage() {
  const getAllUsers = async () => {
    const users = await privateRequest({
      request: apiV1Method("usersControllerGetAllUsers"),
    })({});
    console.log(users);
  };

  return (
    <div>
      Мэйен
      <Button onClick={getAllUsers}>Всех</Button>
    </div>
  );
}

export default MainePage;
