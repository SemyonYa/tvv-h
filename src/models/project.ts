import { ProjectTypes as ProjectType } from "./helpers/project-types";
import { Image } from "./image";

export class Project {
    id: number;
    name: string;
    brief: string;
    description: string;
    people: string;
    calendar: string;
    costs: number;
    images: Image[];

    regionId: number;
    regionName: string;
    placeId: number;
    placeName: string;
    projectTypeId: ProjectType;
    projectTypeName: string;
}