import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";
import sliderData from "../../data/gameData";

export default function GameDetailPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  const game = sliderData.find((g) => g.slug === slug);

  if (!game) return <p>Game not found</p>;

  return (
    <>
      <Head>
        <title>{game.title} - Gameode</title>
        <meta name="description" content={game.description.slice(0, 160)} />
      </Head>

      <main className="min-h-screen p-8 bg-zinc-900 text-white max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">{game.title}</h1>
        <img
          src={game.img}
          alt={game.title}
          className="w-full rounded-lg mb-6"
          loading="lazy"
        />
        <p className="text-lg leading-relaxed mb-10">{game.description}</p>

        <h2 className="text-2xl font-semibold mb-4">Diğer Oyunlar</h2>
        <ul className="list-disc list-inside space-y-2">
          {sliderData
            .filter((g) => g.slug !== slug)
            .map((otherGame) => (
              <li key={otherGame.slug}>
                <Link
                  href={`/games/${otherGame.slug}`}
                  className="text-blue-400 hover:underline"
                >
                  {otherGame.title}
                </Link>
              </li>
            ))}
        </ul>

        <div className="mt-10">
          <Link href="/" className="text-gray-400 hover:text-white">
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>
    </>
  );
}
