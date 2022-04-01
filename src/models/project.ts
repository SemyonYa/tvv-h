import { ProjectType as ProjectType } from "./helpers/project-type";
import { Image } from "./image";

export class Project {
    id: number;
    name: string;
    brief: string;
    description: string;
    people: string;
    calendar: string;
    costs: number;
    images: {
        before: Image[],
        after: Image[],
    };
    mainImageId: number;

    regionId: number;
    regionName: string;
    placeId: number;
    placeName: string;
    projectTypeId: ProjectType;
    projectTypeName: string;

    prevId: number;
    nextId: number;
}