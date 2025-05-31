import { MantineProvider } from "@mantine/core";
import { NavBar } from "@/widgets/ui";
import { AppRouter } from "@/app/router/AppRouter";

function App() {
  return (
    <MantineProvider>
      <NavBar />
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
