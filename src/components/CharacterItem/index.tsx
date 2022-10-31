import ImageWithPlaceholder from '@components/ImageWithPlaceholder';
import React from 'react';
import { IAnimeCharacter } from '@ts/AnimeInterface';

type CharacterItemProps = {
  character: IAnimeCharacter;
  language?: string;
};

const CharacterItem = ({
  character,
  language = 'Japanese',
}: CharacterItemProps): JSX.Element => {
  const voice_actor = character.voice_actors.find(
    (elem) => elem.language === language
  );

  return (
    <div className="flex gap-x-5 justify-between bg-light-gray-opacity m-fold:gap-x-0">
      <div className="flex gap-2 m-fold:gap-0">
        <a
          href={character.character.url}
          rel="noreferrer"
          target="_blank"
          className="w-[80px]  m-fold:w-[65px]"
        >
          <ImageWithPlaceholder
            src={character.character.images.jpg.image_url}
            alt="character"
            className="w-[80px] m-fold:w-[65px] h-full m-fold:h-[90px] object-cover"
          />
        </a>

        <a
          href={character.character.url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col"
        >
          <span className="m-fold:text-md">{character.character.name}</span>
          <span className="mt-auto m-fold:text-md">{character.role}</span>
        </a>
      </div>

      <div className="flex gap-2 m-fold:gap-0">
        {voice_actor && (
          <>
            <a
              href={voice_actor.person.url}
              rel="noreferrer"
              target="_blank"
              className="flex flex-col text-right"
            >
              <span className="m-fold:text-md">{voice_actor.person.name}</span>
              <span className="mt-auto m-fold:text-md">
                {voice_actor.language}
              </span>
            </a>

            <a
              href={voice_actor.person.url}
              target="_blank"
              rel="noreferrer"
              className="w-[80px] m-fold:w-[65px] "
            >
              <ImageWithPlaceholder
                src={voice_actor.person.images.jpg.image_url}
                alt="voice_actor"
                className="w-[80px] m-fold:w-[65px] h-full m-fold:h-[90px] object-cover"
              />
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterItem;
