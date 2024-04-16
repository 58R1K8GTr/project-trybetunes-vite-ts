import { AlbumType, SongType } from '../types';

const getMusics = async (id: string): Promise<[AlbumType, ...SongType[]]> => {
  const request = await fetch(`https://itunes.apple.com/lookup?id=${id}&entity=song`);
  const requestJson = await request.json();
  console.log(requestJson);
  return requestJson.results;
};

export default getMusics;
