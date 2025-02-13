type SkillType = {
    id: number; 
    icon: ImageMetadata; 
    title: string; 
}

export interface SkillsTypes {
    front: SkillType[];
    back: SkillType[];
    others: SkillType[];
}

export interface ProjectsTypes {
    id: number
    icons: ImageMetadata[],
    title: string,
    date: string,
    description: string,
    repo: string,
}