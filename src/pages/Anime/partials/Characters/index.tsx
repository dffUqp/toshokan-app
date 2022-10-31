import CharacterItem from '@components/CharacterItem';
import { useAnime } from '@pages/Anime';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { IAnimeCharacter } from '@ts/AnimeInterface';
import Select from '@components/UI/Select';

const Characters = (): JSX.Element => {
  const { charactersData } = useAnime();
  const [formatedCharacters, setFormatedCharacters] = useState<
    IAnimeCharacter[]
  >([]);

  const [characterLanguage, setCharacterLanguage] =
    useState<string>('Japanese');

  const { ref: observerRef, inView: myElemVisible } = useInView({
    rootMargin: '0px 0px 130px 0px',
  });

  useEffect(() => {
    if (charactersData?.data && myElemVisible) {
      const { data } = charactersData;
      setFormatedCharacters((elem) => {
        return data.length > 20 ? data.slice(0, elem.length + 20) : data;
      });
    }
  }, [myElemVisible, charactersData]);

  if (!charactersData?.data || charactersData?.data.length === 0) {
    return <div>Nothing Found</div>;
  }

  const options = [
    { name: 'Japanese', value: 'Japanese' },
    { name: 'English', value: 'English' },
  ];

  return (
    <div className="flex flex-col mx-auto max-w-[950px] w-full">
      <Select
        value={characterLanguage}
        onChange={(value) => setCharacterLanguage(value)}
        className="bg-black rounded-md p-2 border self-end mb-[20px]"
        option={options}
      />

      <div className="grid grid-cols-2 gap-10 xl:grid-cols-none">
        {formatedCharacters.map((item, index) => (
          <CharacterItem
            character={item}
            key={index}
            language={characterLanguage}
          />
        ))}
      </div>

      {charactersData.data.length !== formatedCharacters.length && (
        <div ref={observerRef} />
      )}
    </div>
  );
};

export default Characters;
