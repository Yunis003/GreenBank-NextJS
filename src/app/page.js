import Discover from "./Components/Discover";
import Header from "./Components/Header";
import Partners from "./Components/Partners";
import Statistics from "./Components/Statistics";

export default function Home() {
  return (
    <div className="w-[85%] h-screen flex flex-col gap-40">
      <Header />
      <Discover />
      <Statistics />
      <Partners />
    </div>
  );
}
