import Spinner from '@components/UI/Loaders/Spinner';
import TitlesService from '@services/AnimeService';
import {
  AnimeCharacterResponse,
  AnimeGalleryResponse,
  AnimeStaffResponse,
} from '@services/AnimeServiceTypes';
import { useQuery } from 'react-query';
import { Navigate, Outlet, useOutletContext, useParams } from 'react-router';
import { ExtraInfo, MainInfo } from './partials';

export type AnimeUrlParam = {
  animeId: string;
  animeName: string;
};

type OutletContextType = {
  charactersData: AnimeCharacterResponse | undefined;
  galleryData: AnimeGalleryResponse | undefined;
  staffData: AnimeStaffResponse | undefined;
};

export function useAnime() {
  return useOutletContext<OutletContextType>();
}

const Anime = (): JSX.Element => {
  const { animeId } = useParams() as AnimeUrlParam;

  const { data: anime } = useQuery(
    'maininfo',
    () => TitlesService.getAnime(animeId),
    {
      cacheTime: 0,
    }
  );

  const { data: charactersData } = useQuery(
    'characters',
    () => TitlesService.getAnimeCharacters(animeId),
    {
      enabled: !!anime?.data?.mal_id,
      cacheTime: 0,
    }
  );

  const { data: galleryData } = useQuery(
    'Gallery',
    () => TitlesService.getAnimeGallery(animeId),
    {
      enabled: !!anime?.data?.mal_id,
      cacheTime: 0,
    }
  );

  const { data: staffData } = useQuery(
    'staff',
    () => TitlesService.getAnimeStaff(animeId),
    {
      enabled: !!anime?.data?.mal_id,
      cacheTime: 0,
    }
  );

  if (anime?.status) {
    return <Navigate to={`/${window.locale}`} replace />;
  }

  if (anime?.data === undefined) {
    return <Spinner />;
  }

  return (
    <div className="container pb-5">
      <MainInfo anime={anime.data} />
      <div className="flex pt-30 md:flex-col gap-5">
        <ExtraInfo anime={anime.data} />
        <Outlet context={{ charactersData, galleryData, staffData }} />
      </div>
    </div>
  );
};

export default Anime;
