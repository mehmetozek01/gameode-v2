import Image from "next/image";
import { Game } from "@/data/gamesData";
import React, { useState } from "react";

interface GameCardProps {
  game: Game;
}
const slugify = (text: string) =>
  text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').trim();
export default function GameCard({ game }: GameCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`relative group cursor-pointer rounded-2xl bg-koyugri text-white
    overflow-hidden
    transition-all duration-500
    ${isHovered ? 'h-[400px]' : 'h-[200px]'
        }
  `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Görsel */}
      <Image
        src={game.imageUrl}
        alt={game.title}
        width={300}
        height={180}
        className="w-full h-44 object-cover rounded-t-2xl"
      />

      {/* Başlık ve platformlar */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{game.title}</h3>
        <div className="flex flex-wrap gap-2 text-sm mt-2">
          {game.platforms.map((platform, i) => (
            <span key={i} className="bg-zinc-700 px-2 py-1 rounded">
              {platform}
            </span>
          ))}
        </div>
      </div>

      {/* Hover içeriği */}
      <div
        className={`transition-opacity duration-500 ease-in-out
      ${isHovered ? 'opacity-100' : 'opacity-0'}
      p-4 text-sm
    `}
      >
        {game.title}
      </div>
    </div>

  );
}




