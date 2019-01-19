import { AcademyProgram } from "./AcademyProgram";

export interface AcademyModel {
    name: string;
    location: string;
    locationUrl: string;
    date: string;
    slots: number;
    registrationUrl: string;
    imageUrl: string;
    program: AcademyProgram;
}