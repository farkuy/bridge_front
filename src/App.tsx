import { MainePage } from "./pages";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <MantineProvider>
      <MainePage />
    </MantineProvider>
  );
}

export default App;
