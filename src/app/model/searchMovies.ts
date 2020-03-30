import { GenresModel } from './genres';
import { ProductionCompaniesModel } from './production_companies';
import { ProductionCountriesModel } from './production_countries';
import { SpokenLanguages } from './spoken_languages';

export class SearchMoviesModel {
  constructor(
    public adult?: boolean,
    public backdrop_path?: string,
    public belongs_to_collection?: number,
    public budget?: number,
    public genres?: GenresModel[],
    public homepage?: string,
    public id?: number,
    public imdb_id?: string,
    public original_language?: string,
    public original_title?: string,
    public overview?: string,
    public popularity?: number,
    public poster_path?: string,
    public production_companies?: ProductionCompaniesModel[],
    public production_countries?: ProductionCountriesModel[],
    public release_date?: string,
    public revenue?: number,
    public runtime?: number,
    public spoken_languages?: SpokenLanguages[],
    public status?: string,
    public tagline?: string,
    public title?: string,
    public video?: boolean,
    public vote_average?: number,
    public vote_count?: number,
    public videos?: any
  ) { }
}