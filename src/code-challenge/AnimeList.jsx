import React, { useEffect, useState } from 'react';
import { Search } from './Search';
import { Card } from './Card';

import { filterAndSortAnimeList } from './helpers';
// Request "http://localhost:3000/list"

const AnimeList = () => {

  /* Local Initialization */
  const [animeList, setAnimeList] = useState([]);
  const [searchText, setSearchText] = useState('');

  /* Effects */
  useEffect(() => {
    fetch('/list')
      .then(res => res.json())
      .then(({ data, success }) => {
        if (success) {
          setAnimeList(data);
        }
        else setAnimeList([]);
      })
  }, []);

  /* Functions */
  const getAnimeList = () => {
    if (!animeList) return [];
    else return !!searchText ? filterAndSortAnimeList(searchText, animeList) : animeList;
  };

  /* Components */
  const Cards = () => {
    const list = getAnimeList();
    return (
      <div className="cards" >
        {list.length ? list.map(item =>
          <Card key={item.anime_id} name={item.anime_name} image={item.anime_img} />)
          :
          ''}
      </div>
    )
  };

  /* Renderer */
  return (
    <>
      <h1 name="Anime List">Anime List</h1>
      <Search onChange={setSearchText} searchText={searchText} />
      <div className="animeList">
        <Cards />
      </div >
    </>
  )
};

export default AnimeList;
