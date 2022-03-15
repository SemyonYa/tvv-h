import { Place } from "./place";

export class Region {
    id: number;
    name: string;
    brief: string;
    description: string;

    places: Place[];
}