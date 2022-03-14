import { Image } from "./image";

export class Place {
    id: number;
    name: string;
    brief: string;
    description: string;
    imageId: number;
    image?: Image;
    regionId: number;
    regionName?: string;
}