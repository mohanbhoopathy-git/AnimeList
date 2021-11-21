export const formatName = (name) => {
  const words = name.replace(/_/g, ' ').replace(/\s\s+/g, ' ').trim().split(' ');
  return words.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join(' ');
}

export const filterAndSortAnimeList = (search, list) => {
  if (!list || list.length === 0) return;
  let matching = { ...list };
  if (search) {
    matching = list.filter(item => search.trim().split(' ').find(searchWord => item.anime_name.includes(searchWord)));
  }
  return matching.sort((a, b) => ('' + a.anime_name).localeCompare(b.anime_name))
};
