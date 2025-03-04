import Discover from "./Components/Discover";
import Find from "./Components/Find";
import Header from "./Components/Header";
import Offer from "./Components/Offer";
import Partners from "./Components/Partners";
import Personalize from "./Components/Personalize";
import Statistics from "./Components/Statistics";
import Image from 'next/image';
import Comments from "./Components/Comments";

export default function Home() {
  return (
    <div className="w-[85%] h-screen flex flex-col gap-40 relative">
      <Image src="/dora.svg" alt="bg" width={1300} height={1200} className="absolute index-[-99]"/>
      <Header />
      <Discover />
      <Statistics />
      <Partners />
      <Offer />
      <Personalize />
      <Find />
      <Comments />
    </div>
  ); 
}
