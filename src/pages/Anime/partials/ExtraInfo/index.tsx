import { IAnime } from '@ts/AnimeInterface';
import React from 'react';
import {
  IExtraInfoComplexItems,
  IExtraInfoSimplyItems,
} from './ExtraInfoTypes';
import ComplexItem from './partials/ComplexItem';
import SimpleItem from './partials/SimpleItem';

type ExtraInfoProps = {
  anime: IAnime;
};

const ExtraInfo = ({ anime }: ExtraInfoProps): JSX.Element => {
  const SimplyItems: IExtraInfoSimplyItems[] = [
    { title: 'Format:', content: anime.type },
    { title: 'Episodes:', content: anime.episodes },
    { title: 'Status:', content: anime.status },
    {
      title: 'Start date:',
      content: new Date(anime.aired.from).toLocaleDateString(),
    },
    {
      title: 'End date:',
      content: new Date(anime.aired.to).toLocaleDateString(),
    },
    { title: 'Season:', content: anime.season },
    { title: 'Sources:', content: anime.source },
    { title: 'Favorites:', content: anime.favorites },
    { title: 'Episode Duration:', content: anime.duration },
  ];

  const complexItems: IExtraInfoComplexItems[] = [
    { title: 'Producers:', content: anime.producers },
    { title: 'Synonyms:', content: anime.title_synonyms },
    { title: 'Genres:', content: anime.genres },
  ];

  return (
    <div className="max-w-[230px] w-full md:max-w-full">
      <div className="flex flex-col gap-2 w-[100%] lessMd:hidden">
        <span className="bloc w-full px-2 py-3 bg-light-gray-opacity border border-purple rounded-sm">
          #{anime.popularity} Most Popular All Time
        </span>
        <span className="block w-full px-2 py-3 bg-light-gray-opacity border border-purple rounded-sm">
          #{anime.rank} Highest Rated 2022
        </span>
      </div>

      <div className="flex flex-col mt-3 py-4 px-2 gap-4 bg-light-gray-opacity md:flex-row md:overflow-y-hidden">
        {SimplyItems.map((item, index) => (
          <SimpleItem title={item.title} content={item.content} key={index} />
        ))}
        {complexItems.map((item, index) => (
          <ComplexItem title={item.title} content={item.content} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExtraInfo;
