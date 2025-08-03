// app/games/[slug]/page.tsx

import { notFound } from "next/navigation";
import sliderData from "../../data/games.json";

interface Game {
  slug: string;
  img: string;
  title: string;
  description: string;
}

interface Props {
  params: { slug: string };
}

export default function GameDetailPage({ params }: Props) {
  const { slug } = params;

  const game = sliderData.find((g) => g.slug === slug);

  if (!game) {
    return notFound();
  }
  return (
    <main className="min-h-screen p-8 bg-zinc-900 text-white">
      <h1 className="text-4xl font-bold mb-6">{game.title}</h1>
      <img
        src={game.img}
        alt={game.title}
        className="w-full max-w-4xl rounded-lg mb-6"
      />
      <p className="text-lg leading-relaxed">{game.description}</p>
    </main>
  );

}
