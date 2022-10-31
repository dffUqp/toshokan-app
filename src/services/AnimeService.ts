import { axios } from '@plugins';
import {
  AnimeByIdResponce,
  AnimeCharacterResponce,
  AnimeGalleryResponce,
  AnimeStaffResponce,
  AnimeResponce,
} from './AnimeServiceTypes';

export default class TitlesService {
  static async getTopAnime(page: number): Promise<AnimeResponce> {
    return await axios({
      method: 'GET',
      url: 'top/anime',
      params: { page },
    }).then((res) => res.data);
  }

  static async getUpcomingTitles(limit: number): Promise<AnimeResponce> {
    return await axios({
      method: 'GET',
      url: 'seasons/upcoming',
      params: { limit },
    }).then((res) => res.data);
  }

  static async getSearchedTitles(
    searchValue: string,
    currentPage: number
  ): Promise<AnimeResponce> {
    return await axios({
      method: 'GET',
      url: 'anime',
      params: { q: searchValue, page: currentPage },
    }).then((res) => res.data);
  }

  static async getSeasonsNowTitles(
    limit: number,
    page = 1
  ): Promise<AnimeResponce> {
    return await axios({
      method: 'GET',
      url: 'seasons/now',
      params: { limit, page },
    }).then((res) => res.data);
  }

  static async getAnime(id: string): Promise<AnimeByIdResponce> {
    return await axios({
      method: 'GET',
      url: `anime/${id}/full`,
    }).then((res) => res.data);
  }

  static async getAnimeCharacters(id: string): Promise<AnimeCharacterResponce> {
    return await axios({
      method: 'GET',
      url: `anime/${id}/characters`,
    }).then((res) => res.data);
  }

  static async getAnimeStaff(id: string): Promise<AnimeStaffResponce> {
    return await axios({
      method: 'GET',
      url: `anime/${id}/staff`,
    }).then((res) => res.data);
  }
  static async getAnimeGallery(id: string): Promise<AnimeGalleryResponce> {
    return await axios({
      method: 'GET',
      url: `anime/${id}/pictures`,
    }).then((res) => res.data);
  }
}
