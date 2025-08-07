import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";
import sliderData from "@/data/gameData";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import { Game } from "@/data/gamesData";
import LoadingScreen from "@/components/LoadingScreen";

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
// Game Card
const PAGE_SIZE = 12;

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
  // Game Card 
  const [games, setGames] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // API'den oyunları çek
  const fetchGames = useCallback(async () => {
    setLoading(true);
    const res = await fetch(
      `https://api.rawg.io/api/games?key=6d3e00ba1feb4b6b81d2692ce6379cdb&page=${page}&page_size=${PAGE_SIZE}`
    );
    const data = await res.json();

    setGames((prev) => [...prev, ...data.results]);
    // Daha fazla veri var mı kontrol et
    setHasMore(data.next !== null);
    setLoading(false);
  }, [page]);

  useEffect(() => {
    fetchGames();
  }, [fetchGames]);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (loading || !hasMore) return;

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 500
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

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
      {/* Game card and News */}
      <div className="bg-indexgri min-h-screen px-5 sm:px-10 md:px-20 py-7">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>

        {loading && (
          <p className="text-white text-center mt-4">Yükleniyor...</p>
        )}

        {!hasMore && !loading && (
          <p className="text-gray-400 text-center mt-4">
            Daha fazla oyun bulunamadı.
          </p>
        )}
      </div>



      <Footer />
    </>
  );
}



const initData = sliderData[0];
