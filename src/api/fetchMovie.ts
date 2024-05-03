// highly preferred KEEP THIS API KEY IN A .env file!

export const fetchMovie = async (title: string) => {
  const data = await fetch(
    `https://www.omdbapi.com/?apikey=922db138&s=${title}`
  );

  return data.json();
};
