export interface Relationships {
  breeds: BreedsOrColorsOrSpeciesOrStatusesOrLocationsOrOrgsOrPictures;
  colors: BreedsOrColorsOrSpeciesOrStatusesOrLocationsOrOrgsOrPictures;
  species: BreedsOrColorsOrSpeciesOrStatusesOrLocationsOrOrgsOrPictures;
  statuses: BreedsOrColorsOrSpeciesOrStatusesOrLocationsOrOrgsOrPictures;
  locations: BreedsOrColorsOrSpeciesOrStatusesOrLocationsOrOrgsOrPictures;
  orgs: BreedsOrColorsOrSpeciesOrStatusesOrLocationsOrOrgsOrPictures;
  pictures: BreedsOrColorsOrSpeciesOrStatusesOrLocationsOrOrgsOrPictures;
}
export interface BreedsOrColorsOrSpeciesOrStatusesOrLocationsOrOrgsOrPictures {
  data?: (DataEntity1)[] | null;
}
export interface DataEntity1 {
  type: string;
  id: string;
}
