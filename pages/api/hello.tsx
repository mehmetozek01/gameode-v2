// app/games/[slug]/page.tsx

import { notFound } from "next/navigation";
import sliderDataRaw from "../../data/games.json";

interface Game {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  genres: string[];
  platforms: string[];
}

const sliderData: Game[] = sliderDataRaw as Game[];

interface Props {
  params: { slug: string };
}

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();

export default function GameDetailPage({ params }: Props) {
  const { slug } = params;

  const game = sliderData.find((g) => slugify(g.title) === slug);

  if (!game) {
    return notFound();
  }

  return (
    <main className="min-h-screen p-8 bg-zinc-900 text-white">
      <h1 className="text-4xl font-bold mb-6">{game.title}</h1>
      <img
        src={game.imageUrl}
        alt={game.title}
        className="w-full max-w-4xl rounded-lg mb-6"
      />
      <p className="text-lg leading-relaxed">{game.description}</p>
    </main>
  );
}
