import Layout from "@/Layout";
import useTheme from "@/hooks/useTheme";

const App = () => {
  useTheme();

  return <Layout />;
};

export default App;
