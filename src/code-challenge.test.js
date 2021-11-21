import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AnimeList from './code-challenge/AnimeList';
import { formatName, filterAndSortAnimeList } from './code-challenge/helpers';
import { animeList } from './mocks/handlers';

const getListNames = (list) => list.map(({ anime_name }) => anime_name);

describe('formatName', () => {
  it('returns a name in title case', () => {
    const result = formatName('jujutsu_KAISEN');
    const expected = 'Jujutsu Kaisen';

    expect(result).toEqual(expected);
  });

  it('cleans up spaces and underscores', () => {
    const result = formatName(' hunter__x __  hunter  ');
    const expected = 'Hunter X Hunter';

    expect(result).toEqual(expected);
  });
});

describe('filterAnimeList', () => {
  it('uses spaces to separate search words, each word can partially match a different anime name and sorts by name', () => {
    const result = filterAndSortAnimeList('ball demon', animeList);
    const resultIds = getListNames(result);
    const expectedIds = ['demon_slayer', 'dragon_ball'];

    expect(resultIds).toEqual(expectedIds);
  });

  it('filters by searching for text in anime names and sorts by name', () => {
    const result = filterAndSortAnimeList('on', animeList);
    const resultIds = getListNames(result);
    const expectedIds = [
      'attack_on_titan',
      'demon_slayer',
      'dragon_ball',
      'one_piece',
    ];

    expect(resultIds).toEqual(expectedIds);
  });

  it('matches multiple partial and complete search words', () => {
    const result = filterAndSortAnimeList(
      ' one brother hood _ball lover ',
      animeList
    );
    const resultIds = getListNames(result);
    const expectedIds = ['black_clover', 'fullmetal_brotherhood', 'one_piece'];

    expect(resultIds).toEqual(expectedIds);
  });
});

describe('AnimeList', () => {
  it('first renders all anime cards and then filters by the search words', async () => {
    render(<AnimeList />);

    const heading = screen.getByRole('heading', { name: 'Anime List' });
    expect(heading).toBeInTheDocument();

    const attackOnTitan = await screen.findByText('Attack On Titan');
    const onePieceCard = screen.getByText('One Piece');
    const fullmetalBrotherhoodCard = screen.getByText('Fullmetal Brotherhood');
    const heroCard = screen.getByText('Boku No Hero Academia');

    expect(attackOnTitan).toBeInTheDocument();
    expect(onePieceCard).toBeInTheDocument();
    expect(fullmetalBrotherhoodCard).toBeInTheDocument();
    expect(heroCard).toBeInTheDocument();

    const searchInput = screen.getByRole('textbox', { name: 'Search' });
    fireEvent.change(searchInput, { target: { value: 'metal hero' } });

    await waitFor(() => {
      expect(attackOnTitan).not.toBeInTheDocument();
    });
    expect(onePieceCard).not.toBeInTheDocument();
    expect(fullmetalBrotherhoodCard).toBeInTheDocument();
    expect(heroCard).toBeInTheDocument();
  });
});
