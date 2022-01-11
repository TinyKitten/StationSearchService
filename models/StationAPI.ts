export enum StopCondition {
  ALL = "ALL",
  NOT = "NOT",
  PARTIAL = "PARTIAL",
  WEEKDAY = "WEEKDAY",
  HOLIDAY = "HOLIDAY",
}

export enum TrainDirection {
  BOTH = "BOTH",
  INBOUND = "INBOUND",
  OUTBOUND = "OUTBOUND",
}

export interface APITrainTypeMinimum {
  id: number;
  typeId: number;
  groupId: number;
  name: string;
  nameK: string;
  nameR: string;
  nameZh: string;
  nameKo: string;
  color: string;
  line: Line;
}
export interface APITrainType {
  id: number;
  typeId: number;
  groupId: number;
  name: string;
  nameK: string;
  nameR: string;
  nameZh: string;
  nameKo: string;
  stations: Station[];
  color: string;
  allTrainTypes: APITrainTypeMinimum[];
  direction: TrainDirection;
  lines: Line[];
}

export interface Station {
  id: number;
  groupId: number;
  prefId: number;
  name: string;
  nameK: string;
  nameR: string;
  nameZh: string;
  nameKo: string;
  address: string;
  currentLine: Line;
  lines: Line[];
  latitude: number;
  longitude: number;
  distance?: number;
  trainTypes: APITrainType[];
  stopCondition: StopCondition;
  __typename: "Station";
}

export enum LineType {
  Other,
  BulletTrain,
  Normal,
  Subway,
  Tram,
  Monorail,
  AGT,
}

export interface Company {
  nameR: string;
  nameEn: string;
}

export interface Line {
  id: number;
  companyId: number;
  lineColorC: string;
  name: string;
  nameR: string;
  nameK: string;
  nameZh: string;
  nameKo: string;
  lineType: LineType;
  company: Company;
  __typename: "Line";
}
