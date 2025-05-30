import { MantineProvider } from "@mantine/core";
import { NavBar } from "@/widgets/ui";
import { MainePage } from "@/pages";

function App() {
  return (
    <MantineProvider>
      <NavBar />
      <MainePage />
    </MantineProvider>
  );
}

export default App;
