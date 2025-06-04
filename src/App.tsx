import { MantineProvider } from "@mantine/core";
import { NavBar } from "@/widgets/ui";
import { AppRouter } from "@/app/router/AppRouter";
import { Notifications } from "@/features/Notification/Notification";

function App() {
  return (
    <MantineProvider>
      <NavBar />
      <AppRouter />
      <Notifications />
    </MantineProvider>
  );
}

export default App;
