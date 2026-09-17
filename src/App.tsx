import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Stack } from "./components/sections/Stack";
import { Work } from "./components/sections/Work";
import { Header } from "./components/ui/Header";
import "./App.css";

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Work />
      <Stack />
      <Contact />
    </main>
  );
}

export default App;
