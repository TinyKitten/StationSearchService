import { useQuery } from "@apollo/client";
import { useMemo } from "react";
import {
  StationsData,
  STATIONS_BY_NAME_QUERY,
} from "../graphql/queries/stationsByName";

export default function useStationByName(name: string | undefined) {
  const { loading, error, data } = useQuery<StationsData>(
    STATIONS_BY_NAME_QUERY,
    { variables: { name } }
  );

  const stations = useMemo(() => {
    const mapped = data?.stationsByName
      .map((g, i, arr) => {
        const sameNameStations = arr.filter((s) => s.groupId === g.groupId);
        if (sameNameStations.length) {
          return sameNameStations.reduce((acc, cur) => ({
            ...acc,
            lines: Array.from(new Set([...acc.lines, ...cur.lines])),
          }));
        }
        return g;
      })
      .filter(
        (g, i, arr) => arr.findIndex((s) => s.groupId === g.groupId) === i
      );
    return mapped;
  }, [data?.stationsByName]);

  return { loading, error, stations };
}
