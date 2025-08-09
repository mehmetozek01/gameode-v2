import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useRef, useCallback } from "react";
import Header from "@/components/Layout/Header";
import BackgroundImage from "@/components/Slidercard/BackgroundImage";
import Slides from "@/components/Slidercard/Slides";
import SlideInfo from "@/components/Slidercard/SlideInfo";
import Controls from "@/components/Slidercard/Controls";
import sliderData from "@/data/gameData";
import Footer from "@/components/Layout/Footer";
import GameCard from "@/components/Games/GameCard";
import LoadingScreen from "@/components/Loading/LoadingScreen";
import NewsCard from "@/components/News/Page";
import { fetchGamesFromRAWG } from "./api/rawg";
import GameNewsPage from "@/components/News/Page";

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
    try {
      const data = await fetchGamesFromRAWG(page);
      setGames((prev) => [...prev, ...data.results]);
      setHasMore(data.next !== null);
    } catch (error) {
      console.error("API'den veri alınamadı:", error);
    }
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
        relative min-h-screen select-none overflow-hidden text-white  antialiased`}>
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
      <div className="flex gap-6 p-6 min-h-screen bg-indexgri">
        {/* Haberler - Solda */}
        <div className="w-1/3">
          <h2 className="text-white font-bold text-2xl mb-4">Oyun Haberleri</h2>
          <NewsCard/>
        </div>

        {/* Sağdaki Oyun Kartları Bölümü */}
        <main className="flex-1">
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
        </main>
      </div>





      <Footer />
    </>
  );
}



const initData = sliderData[0];
