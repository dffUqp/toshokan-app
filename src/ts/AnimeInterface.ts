export interface IAnime {
  mal_id: number;
  title: string;
  isLoading: boolean;
  type: string;
  score: number;
  year: number;
  synopsis: string;
  episodes: number;
  genres: GenreType[];
  themes: ThemesType[];
  status: string;
  images: {
    jpg: ImageType;
    webp: ImageType;
  };
  aired: AiredType;
  popularity: number;
  rank: number;
  season: string;
  source: string;
  favorites: number;
  title_synonyms: string[];
  duration: string;
  producers: { name: string; mal_id?: number }[];
}

export interface IDataPagination {
  current_page: number;
  has_next_page: boolean;
  last_visible_page: number;
  items: {
    count: number;
    per_page: number;
    total: number;
  };
}

export interface IError {
  message: string;
}

export interface IAnimeCharacter {
  character: AnimeHelperType;
  role: string;
  favorites: number;
  voice_actors: { person: AnimeHelperType; language: string }[];
}

export interface IAnimeStaff {
  person: AnimeHelperType;
  positions: string[];
}

export interface IAnimeGallery {
  jpg: ImageType;
  webp: ImageType;
}

type AnimeHelperType = {
  mal_id: number;
  url: string;
  images: { jpg: { image_url: string } };
  name: string;
};

type AiredType = {
  from: string;
  string: string;
  to: string;
};

type ImageType = {
  image_url: string;
  large_image_url: string;
  small_image_url: string;
};

type GenreType = {
  mal_id: number;
  name: string;
};
type ThemesType = {
  mal_id: number;
  name: string;
};
