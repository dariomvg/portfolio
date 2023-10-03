import ThemeProvider from "./contexts/ThemeContext";
import "./styles/App.scss";
import { Todo } from "./components/Todo";

function App() {
  return (
    <ThemeProvider>
      <Todo />
    </ThemeProvider>
  );
}

export default App;
