import gsap from "gsap";
import Layout from "@/Layout";
import useTheme from "@/hooks/useTheme";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, TextPlugin, SplitText);

const App = () => {
  useTheme();

  return <Layout />;
};

export default App;
