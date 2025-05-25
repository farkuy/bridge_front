import { MainePage } from "./pages";
import { MantineProvider } from "@mantine/core";
import { NavBar } from "@/widgets/ui/NavBar/NavBar";

function App() {
  return (
    <MantineProvider>
      <NavBar />
      <MainePage />
    </MantineProvider>
  );
}

export default App;
