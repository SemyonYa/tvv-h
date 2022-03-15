import { ProjectType } from "./helpers/project-type";
import { Image } from "./image";
import { Project } from "./project";

export class Place {
    id: number;
    name: string;
    brief: string;
    description: string;
    imageId: number;
    image?: Image;
    regionId: number;
    regionName?: string;

    projects: Project[];
    projectTypes: { id: ProjectType, name: string }[];

    descriptionPs: string[];
}