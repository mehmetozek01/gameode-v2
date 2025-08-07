const PAGE_SIZE = 12;

export const fetchGamesFromRAWG = async (page: number) => {
  const apiKey = process.env.NEXT_PUBLIC_RAWG_API_KEY;

  const res = await fetch(
    `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=${PAGE_SIZE}`
  );

  if (!res.ok) {
    throw new Error("Oyunlar alınamadı");
  }

  const data = await res.json();
  return data;
};
