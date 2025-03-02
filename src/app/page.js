import Discover from "./Components/Discover";
import Find from "./Components/Find";
import Header from "./Components/Header";
import Offer from "./Components/Offer";
import Partners from "./Components/Partners";
import Personalize from "./Components/Personalize";
import Statistics from "./Components/Statistics";

export default function Home() {
  return (
    <div className="w-[85%] h-screen flex flex-col gap-40">
      <Header />
      <Discover />
      <Statistics />
      <Partners />
      <Offer />
      <Personalize />
      <Find />
    </div>
  );
}
