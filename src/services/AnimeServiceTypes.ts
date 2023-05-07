import {
  IAnime,
  IDataPagination,
  IAnimeCharacter,
  IAnimeGallery,
  IAnimeStaff,
} from '@ts/AnimeInterface';

export interface AnimeByIdResponse {
  data?: IAnime;
  status?: number;
}

export interface AnimeResponse {
  data: IAnime[];
  pagination: IDataPagination;
}

export interface AnimeCharacterResponse {
  data?: IAnimeCharacter[];
}

export interface AnimeStaffResponse {
  data?: IAnimeStaff[];
}

export interface AnimeGalleryResponse {
  data?: IAnimeGallery[];
}
