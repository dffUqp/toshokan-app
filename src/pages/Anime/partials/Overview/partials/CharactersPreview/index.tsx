import CharacterItem from '@components/CharacterItem';
import { Link } from 'react-router-dom';
import { IAnimeCharacter } from '@ts/AnimeInterface';

type CharactersPreviewProps = {
  character: IAnimeCharacter[] | undefined;
};

const CharactersPreview = ({
  character,
}: CharactersPreviewProps): JSX.Element | null => {
  if (!character || character?.length === 0) {
    return null;
  }

  const formattedCharacters = character.slice(0, 4);

  return (
    <div className="flex flex-col gap-y-2">
      <Link to="characters" className="text-lg capitalize">
        Character
      </Link>
      <div className="grid grid-cols-2 gap-10 xl:grid-cols-none">
        {formattedCharacters.map((item, index) => (
          <CharacterItem character={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default CharactersPreview;
