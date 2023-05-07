import { axios } from '@plugins';
import {
  AnimeByIdResponse,
  AnimeCharacterResponse,
  AnimeGalleryResponse,
  AnimeStaffResponse,
  AnimeResponse,
} from './AnimeServiceTypes';

export default class TitlesService {
  static async getTopAnime(page: number): Promise<AnimeResponse> {
    return await axios({
      method: 'GET',
      url: 'top/anime',
      params: { page },
    }).then((res) => res.data);
  }

  static async getUpcomingTitles(limit: number): Promise<AnimeResponse> {
    return await axios({
      method: 'GET',
      url: 'seasons/upcoming',
      params: { limit },
    }).then((res) => res.data);
  }

  static async getSearchedTitles(
    searchValue: string,
    currentPage: number
  ): Promise<AnimeResponse> {
    return await axios({
      method: 'GET',
      url: 'anime',
      params: { q: searchValue, page: currentPage },
    }).then((res) => res.data);
  }

  static async getSeasonsNowTitles(
    limit: number,
    page = 1
  ): Promise<AnimeResponse> {
    return await axios({
      method: 'GET',
      url: 'seasons/now',
      params: { limit, page },
    }).then((res) => res.data);
  }

  static async getAnime(id: string): Promise<AnimeByIdResponse> {
    return await axios({
      method: 'GET',
      url: `anime/${id}/full`,
    }).then((res) => res.data);
  }

  static async getAnimeCharacters(id: string): Promise<AnimeCharacterResponse> {
    return await axios({
      method: 'GET',
      url: `anime/${id}/characters`,
    }).then((res) => res.data);
  }

  static async getAnimeStaff(id: string): Promise<AnimeStaffResponse> {
    return await axios({
      method: 'GET',
      url: `anime/${id}/staff`,
    }).then((res) => res.data);
  }
  static async getAnimeGallery(id: string): Promise<AnimeGalleryResponse> {
    return await axios({
      method: 'GET',
      url: `anime/${id}/pictures`,
    }).then((res) => res.data);
  }
}
