export class FavouritesMoviesModel {
  constructor(
      public id?: number,
      public video?: boolean,
      public vote_count?: number,
      public vote_average?: number,
      public title?: string,
      public release_date?: string,
      public original_language?: string,
      public original_title?: string,
      public genre_ids?: number[],
      public backdrop_path?: string,
      public adult?: boolean,
      public overview?: string,
      public poster_path?: string,
      public popularity?: number,
  ) { }
}