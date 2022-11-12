import { useColorScheme } from "react-native";
import RootComponent from "./Screens/index";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";
  return <RootComponent />;
};

export default App;
