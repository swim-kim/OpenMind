export async function getItems(limit =8, offset=0) {
  const getQuery = await fetch(
    `https://openmind-api.vercel.app/10-1/subjects/?limit=${limit}&offset=${offset}`
  );
  const response = await getQuery.json();
  return response;
}
