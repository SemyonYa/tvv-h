import { TimeParamType } from "./helpers/time-param.type";

export interface Image {
    id: number;
    thumb: string;
    medium: string;
    large: string;
    isMain?: boolean;
    time?: TimeParamType;
}