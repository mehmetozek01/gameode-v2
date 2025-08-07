// utils/platformIcons.ts
import { FaWindows, FaPlaystation, FaXbox } from "react-icons/fa";
import { IconType } from "react-icons"; // React-Icons tip desteği
import { SiNintendoswitch } from "react-icons/si";

export const platformIcons: Record<string, IconType> = {
  PC: FaWindows,
  PS5: FaPlaystation,
  Xbox: FaXbox,
  Switch: SiNintendoswitch,
};


export interface Game {
  id: number;
  title: string;
  imageUrl: string;
  genres: string[];
  platforms: string[];
}

