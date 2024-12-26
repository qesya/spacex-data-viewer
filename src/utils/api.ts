const BASE_URL = 'https://api.spacexdata.com/v4';

export type Launch = {
  id: string;
  name: string;
  details: string | null;
}

export type Rocket = {
  id: string;
  name: string;
  description: string;
}

export const fetchLaunches = async (): Promise<Launch[]> => {
  const response = await fetch(`${BASE_URL}/launches`);
  if (!response.ok) {
    throw new Error('Failed to fetch launches');
  }
  return response.json();
};

export const fetchRockets = async (): Promise<Rocket[]> => {
  const response = await fetch(`${BASE_URL}/rockets`);
  if (!response.ok) {
    throw new Error('Failed to fetch rockets');
  }
  return response.json();
};
