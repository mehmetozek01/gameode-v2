import React, { useState, useEffect, useRef, memo } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
} from "react-icons/fa";
import { SiNintendoswitch } from "react-icons/si";
import { IconType } from "react-icons";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  released: string;
  genres: { name: string }[];
  rating: number;
  description_raw?: string;
  platforms: { platform: { name: string } }[];
  screenshots?: { id: number; image: string }[];
}

const platformIcons: Record<string, IconType> = {
  PC: FaWindows,
  PlayStation: FaPlaystation,
  Xbox: FaXbox,
  Nintendo: SiNintendoswitch,
};

interface GameCardProps {
  game: Game;
}

const GameCard = memo(({ game }: GameCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageChangeTimeout = useRef<NodeJS.Timeout | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();

  // Responsive check
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allImages =
    game.screenshots && game.screenshots.length > 0
      ? [game.background_image, ...game.screenshots.map((s) => s.image)]
      : [game.background_image];

  const onMouseMove = (e: React.MouseEvent) => {
    if (!hovered || isMobile) return;
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateXVal = ((y - centerY) / centerY) * 12;
    const rotateYVal = ((x - centerX) / centerX) * -12;

    setRotateX(rotateXVal);
    setRotateY(rotateYVal);

    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);

    if (imageChangeTimeout.current) clearTimeout(imageChangeTimeout.current);
    imageChangeTimeout.current = setTimeout(() => {
      setCurrentImageIndex(0);
      setRotateX(0);
      setRotateY(0);
    }, 1200);
  };

  const onMouseLeave = () => {
    setHovered(false);
    setRotateX(0);
    setRotateY(0);
    setCurrentImageIndex(0);
    if (imageChangeTimeout.current) clearTimeout(imageChangeTimeout.current);
  };

  const onMouseEnter = () => {
    setHovered(true);
    controls.start({ scale: 1.05, boxShadow: "0 0 30px rgba(139, 92, 246, 0.7)" });
  };

  const onMouseExit = () => {
    controls.start({ scale: 1, boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)" });
  };

  // Star rating render
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    for (let i = 0; i < fullStars; i++)
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400" aria-hidden="true" />);
    if (halfStar)
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400" aria-hidden="true" />);
    for (let i = 0; i < emptyStars; i++)
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400" aria-hidden="true" />);
    return <div className="flex gap-1" aria-label={`${rating.toFixed(1)} out of 5 stars`}>{stars}</div>;
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={() => {
        onMouseLeave();
        onMouseExit();
        setHovered(false);
      }}
      onMouseEnter={() => {
        onMouseEnter();
        setHovered(true)
      }}

      tabIndex={0}
      aria-label={`Game card for ${game.name}`}
      className="w-58 h-80 cursor-pointer select-none rounded-xl bg-gray-900 outline-none relative overflow-hidden"
      animate={controls}
      style={{
        perspective: 900,
        transformStyle: "preserve-3d",
        transform: hovered
          ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          : "rotateX(0) rotateY(0)",
      }}
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        <Image
          src={allImages[currentImageIndex]}
          alt={`${game.name} background`}
          layout="fill"
          objectFit="cover"
          priority
          draggable={false}
          className={`transition-transform duration-700 ease-out ${hovered ? "scale-110 filter brightness-75" : "scale-100 filter-none"
            }`}
          placeholder="blur"
          blurDataURL="/placeholder.png"
        />
        {/* Overlay karartma */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 0.45 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 bg-black rounded-xl pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full justify-between p-4">
        {/* Title */}
        <h2
          className={`relative text-white text-center font-bold text-md px-4 py-2 rounded-3xl bg-gradient-to-b from-black/70 to-black/40 backdrop-blur-sm shadow-md line-clamp-2 select-none transition-opacity duration-300 ${hovered ? "opacity-0" : "opacity-100"}`}
          title={game.name}
        >
          {game.name}
        </h2>





        {/* Sliding info panel */}
        <AnimatePresence>

          {hovered && (
            <motion.div
              key="infoPanel"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 15 }}
              className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-gray-900 via-transparent to-transparent rounded-b-xl p-2 text-gray-200 text-sm max-h-[140px] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800"
              aria-hidden={!hovered}
            >
              <motion.div>
                {/* Platforms */}
                <div className="absolute top-0 left-0 flex gap-2 z-20 ml-2 mb-2">
                  {game.platforms.slice(0, 4).map((p, idx) => {
                    const name = p.platform.name;
                    const key = Object.keys(platformIcons).find((k) =>
                      name.toLowerCase().includes(k.toLowerCase())
                    );
                    const Icon = key ? platformIcons[key] : null;
                    return Icon ? (
                      <Icon key={idx} className="text-white text-lg drop-shadow-sm" title={name} />
                    ) : null;
                  })}
                </div>
                {/* <h2
                  className="text-white rounded-full"
                  title={game.name}
                >
                  {game.name}
                </h2> */}
              </motion.div>
              <p className="mt-2">
                <strong>Release Date:</strong> {game.released}
              </p>
              <p>
                <strong>Genres:</strong> {game.genres.map((g) => g.name).join(", ")}
              </p>
              <p className="flex items-center gap-2 ">
                <strong>Rating:</strong> {renderStars(game.rating)}
                <span>{game.rating.toFixed(1)}/5</span>
              </p>
              {game.description_raw && (
                <p className="line-clamp-4 mt-1" title={game.description_raw}>
                  {game.description_raw}
                </p>
              )}
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </motion.article>
  );
});

export default GameCard;
