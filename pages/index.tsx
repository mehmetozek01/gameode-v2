import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";
import sliderData from "@/data/gameData";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { gamesData, Game } from "@/data/gamesData";
import News from "@/components/News";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  slug: string;
  // location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <>
      <Header />
      <main
        className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white  antialiased`}
      >
        <AnimatePresence>
          <BackgroundImage
            transitionData={transitionData}
            currentSlideData={currentSlideData}
          />
          <div className="  absolute z-20  h-full w-full">
            <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
              <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
                <SlideInfo
                  transitionData={transitionData}
                  currentSlideData={currentSlideData}
                />
              </div>
              <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
                <Slides data={data} />
                <Controls
                  currentSlideData={currentSlideData}
                  data={data}
                  transitionData={transitionData}
                  initData={initData}
                  handleData={setData}
                  handleTransitionData={setTransitionData}
                  handleCurrentSlideData={setCurrentSlideData}
                  sliderData={sliderData}
                />
              </div>
            </div>
          </div>
        </AnimatePresence>
      </main>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 m-6">
        {/* News - Solda */}
        <div className="md:col-span-1">
          <News />
        </div>

        {/* GameCards - Sağda */}
        <div className="md:col-span-3">
          <div className="flex flex-wrap gap-6">
            {gamesData.map((game: Game) => (
              <div
                key={game.id}
                className="w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 isolate"
              >
                <GameCard game={game} />
              </div>
            ))}
          </div>
        </div>

      </div>


      <Footer />
    </>
  );
}



const initData = sliderData[0];
