import { rest } from 'msw';

export const animeList = [
  {
    anime_id: 1,
    anime_name: 'bleach',
    anime_img: '1-bleach.jpg',
  },
  {
    anime_id: 2,
    anime_name: 'black_clover',
    anime_img: '2-black-clover.jpg',
  },
  {
    anime_id: 3,
    anime_name: 'dragon_ball',
    anime_img: '3-dragon-ball.jpg',
  },
  {
    anime_id: 4,
    anime_name: 'jujutsu_kaisen',
    anime_img: '4-jujutsu-kaisen.jpg',
  },
  {
    anime_id: 5,
    anime_name: 'fullmetal_brotherhood',
    anime_img: '5-fma-brotherhood.jpg',
  },
  {
    anime_id: 6,
    anime_name: 'naruto',
    anime_img: '6-naruto.jpg',
  },
  {
    anime_id: 7,
    anime_name: 'gintama',
    anime_img: '7-gintama.jpg',
  },
  {
    anime_id: 8,
    anime_name: 'itachi_uchiha',
    anime_img: '8-itachi-uchiha.jpg',
  },
  {
    anime_id: 9,
    anime_name: 'one_piece',
    anime_img: '9-one-piece.jpg',
  },
  {
    anime_id: 10,
    anime_name: 'demon_slayer',
    anime_img: '10-demon-slayer.jpg',
  },
  {
    anime_id: 11,
    anime_name: 'attack_on_titan',
    anime_img: '11-attack-on-titan.jpg',
  },
  {
    anime_id: 12,
    anime_name: 'hunter_x_hunter',
    anime_img: '12-hunter-x-hunter.jpg',
  },
  {
    anime_id: 13,
    anime_name: 'boku_no_hero_academia',
    anime_img: '13-boku-no-hero-academia.jpg',
  },
];

export const handlers = [
  rest.get('http://localhost:3000/list', (req, res, ctx) => {
    return res(
      ctx.json({
        success: true,
        data: animeList,
      })
    );
  }),
];
