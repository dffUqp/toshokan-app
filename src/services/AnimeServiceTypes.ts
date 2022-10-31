import {
  IAnime,
  IDataPagination,
  IAnimeCharacter,
  IAnimeGallery,
  IAnimeStaff,
} from '@ts/AnimeInterface';

export interface AnimeByIdResponce {
  data?: IAnime;
  status?: number;
}

export interface AnimeResponce {
  data: IAnime[];
  pagination: IDataPagination;
}

export interface AnimeCharacterResponce {
  data?: IAnimeCharacter[];
}

export interface AnimeStaffResponce {
  data?: IAnimeStaff[];
}

export interface AnimeGalleryResponce {
  data?: IAnimeGallery[];
}
