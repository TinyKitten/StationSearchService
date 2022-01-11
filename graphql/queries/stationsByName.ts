import { gql } from "@apollo/client";
import { Station } from "../../models/StationAPI";

export const STATIONS_BY_NAME_QUERY = gql`
  query StationByName($name: String!) {
    stationsByName(name: $name) {
      id
      groupId
      prefId
      name
      nameK
      nameR
      nameZh
      nameKo
      address
      latitude
      longitude
      lines {
        id
        companyId
        lineColorC
        name
        nameR
        nameK
        lineType
      }
    }
  }
`;

export interface StationsData {
  stationsByName: Station[];
}
