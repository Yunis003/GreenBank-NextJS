import Discover from "./Components/Discover";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div className="w-[85%] h-screen flex flex-col gap-40">
      <Header />
      <Discover />
    </div>
  );
}
