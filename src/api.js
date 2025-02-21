const API_URL = 'http://localhost:1337/api';

export const getHomePageData = async () => {
  const response = await fetch(`${API_URL}/boco-homepages`);
  if (!response.ok) throw new Error("Failed to fetch homepage data");
  const data = await response.json();
  return data.data;
};
