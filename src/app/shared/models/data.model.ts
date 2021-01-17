import { Attributes } from "./attributes.model";
import { Relationships } from "./relationships.model";


export interface Data {
  type: string;
  id: string;
  attributes: Attributes;
  relationships: Relationships;
}
